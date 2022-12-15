package lists

import (
	"context"
	"lists/internal/models"
	pb "lists/protos"
	"log"

	"github.com/google/uuid"
	"go.mongodb.org/mongo-driver/bson"
)

type Server struct {
	pb.UnimplementedListServiceServer
}

func (s *Server) GetLists(ctx context.Context, in *pb.GetListsRequest) (*pb.GetListsResponse, error) {
	log.Printf("Received GetLists request")

	client, err := models.GetMongoClient()
	if err != nil {
		return &pb.GetListsResponse{}, err
	}

	defer models.DisconnectMongoClient(client)

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

	client, err := models.GetMongoClient()
	if err != nil {
		return &pb.DeleteListResponse{}, err
	}

	defer models.DisconnectMongoClient(client)

	collection := client.Database("lists").Collection("lists")
	filter := bson.M{"id": in.Id}
	collection.DeleteOne(context.TODO(), filter)

	return &pb.DeleteListResponse{}, nil
}

func (s *Server) CreateList(ctx context.Context, in *pb.CreateListRequest) (*pb.CreateListResponse, error) {
	log.Printf("Received CreateList request")

	client, err := models.GetMongoClient()
	if err != nil {
		return &pb.CreateListResponse{}, err
	}

	defer models.DisconnectMongoClient(client)

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

	client, err := models.GetMongoClient()
	if err != nil {
		return &pb.UpdateListResponse{}, err
	}

	defer models.DisconnectMongoClient(client)

	collection := client.Database("lists").Collection("lists")
	filter := bson.M{"id": in.Id}
	update := bson.M{"$set": bson.M{"name": in.Name}}

	collection.UpdateOne(context.TODO(), filter, update)

	var result pb.UpdateListResponse
	collection.FindOne(context.TODO(), filter).Decode(&result)
	return &result, nil
}
