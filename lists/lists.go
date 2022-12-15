package main

import (
	"context"
	"github.com/google/uuid"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"google.golang.org/grpc"
	pb "lists/protos"
	"log"
	"net"
	"os"
)

type Server struct {
	pb.UnimplementedListServiceServer
}

func main() {

	listener, err := net.Listen("tcp", ":50053")
	if err != nil {
		log.Fatal(err)
	}

	s := grpc.NewServer()
	pb.RegisterListServiceServer(s, &Server{})

	log.Printf("Server listening on %v", listener.Addr())

	if err := s.Serve(listener); err != nil {
		log.Fatal(err)
	}
}

func (s *Server) GetLists(ctx context.Context, in *pb.GetListsRequest) (*pb.GetListsResponse, error) {
	log.Printf("Received GetLists request")

	client, err := getMongoClient()
	if err != nil {
		return &pb.GetListsResponse{}, err
	}

	defer disconnectMongoClient(client)

	collection := client.Database("lists").Collection("lists")

	cursor, err := collection.Find(context.TODO(), bson.M{})
	if err != nil {
		return &pb.GetListsResponse{}, err
	}

	var results []*pb.ListEntry
	if err = cursor.All(context.TODO(), &results); err != nil {
		return &pb.GetListsResponse{}, err
	}

	return &pb.GetListsResponse{
		Lists: results,
	}, nil
}

func (s *Server) DeleteList(ctx context.Context, in *pb.DeleteListRequest) (*pb.DeleteListResponse, error) {
	log.Printf("Received DeleteLists request")

	client, err := getMongoClient()
	if err != nil {
		return &pb.DeleteListResponse{}, err
	}

	defer disconnectMongoClient(client)

	collection := client.Database("lists").Collection("lists")
	filter := bson.M{"id": in.Id}
	collection.DeleteOne(context.TODO(), filter)

	return &pb.DeleteListResponse{}, nil
}

func (s *Server) CreateList(ctx context.Context, in *pb.CreateListRequest) (*pb.CreateListResponse, error) {
	log.Printf("Received CreateList request")

	client, err := getMongoClient()
	if err != nil {
		return &pb.CreateListResponse{}, err
	}

	defer disconnectMongoClient(client)

	collection := client.Database("lists").Collection("lists")

	in.Id = uuid.NewString()

	_, err = collection.InsertOne(context.TODO(), in)
	if err != nil {
		return &pb.CreateListResponse{}, err
	}

	return &pb.CreateListResponse{}, nil
}

func (s *Server) UpdateList(ctx context.Context, in *pb.UpdateListRequest) (*pb.UpdateListResponse, error) {
	log.Printf("Received UpdateList request")

	client, err := getMongoClient()
	if err != nil {
		return &pb.UpdateListResponse{}, err
	}

	defer disconnectMongoClient(client)

	collection := client.Database("lists").Collection("lists")
	filter := bson.M{"id": in.Id}
	update := bson.M{"$set": bson.M{"name": in.Name}}

	collection.UpdateOne(context.TODO(), filter, update)

	var result pb.UpdateListResponse
	collection.FindOne(context.TODO(), filter).Decode(&result)
	return &result, nil
}

func getMongoClient() (*mongo.Client, error) {
	connectionString := os.Getenv("MONGO_STRING")

	client, err := mongo.Connect(context.TODO(), options.Client().ApplyURI(connectionString))
	if err != nil {
		return nil, err
	}

	return client, nil
}

func disconnectMongoClient(client *mongo.Client) {
	if err := client.Disconnect(context.TODO()); err != nil {
		log.Fatal(err)
	}
}
