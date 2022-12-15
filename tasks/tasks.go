package main

import (
	"context"
	"log"
	"net"
	"os"
	pb "tasks/protos"

	"github.com/google/uuid"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"google.golang.org/grpc"
)

type Server struct {
	pb.UnimplementedTaskServiceServer
}

func main() {
	listener, err := net.Listen("tcp", ":50052")
	if err != nil {
		log.Fatal(err)
	}

	s := grpc.NewServer()
	pb.RegisterTaskServiceServer(s, &Server{})

	log.Printf("Server listening on %v", listener.Addr())

	if err := s.Serve(listener); err != nil {
		log.Fatal(err)
	}
}

func (s *Server) GetTasks(ctx context.Context, in *pb.GetTasksRequest) (*pb.GetTasksResponse, error) {
	log.Printf("Received GetTasks request")

	client, err := getMongoClient()
	if err != nil {
		return &pb.GetTasksResponse{}, err
	}

	defer disconnectMongoClient(client)

	collection := client.Database("tasks").Collection("tasks")

	cursor, err := collection.Find(context.TODO(), bson.M{})
	if err != nil {
		return &pb.GetTasksResponse{}, err
	}

	var results []*pb.TaskEntry
	if err = cursor.All(context.TODO(), &results); err != nil {
		return &pb.GetTasksResponse{}, err
	}

	return &pb.GetTasksResponse{
		Tasks: results,
	}, nil
}

func (s *Server) CreateTask(ctx context.Context, in *pb.CreateTaskRequest) (*pb.CreateTaskResponse, error) {
	log.Printf("Received CreateTask request")

	client, err := getMongoClient()
	if err != nil {
		return &pb.CreateTaskResponse{}, err
	}

	defer disconnectMongoClient(client)

	collection := client.Database("tasks").Collection("tasks")

	in.Id = uuid.NewString()

	_, err = collection.InsertOne(context.TODO(), in)
	if err != nil {
		return &pb.CreateTaskResponse{}, err
	}

	return &pb.CreateTaskResponse{}, nil
}

func (s *Server) DeleteTasks(ctx context.Context, in *pb.DeleteTasksRequest) (*pb.DeleteTasksResponse, error) {
	log.Printf("Received DeleteTasks request")

	client, err := getMongoClient()
	if err != nil {
		return &pb.DeleteTasksResponse{}, err
	}

	defer disconnectMongoClient(client)

	collection := client.Database("tasks").Collection("tasks")
	filter := bson.M{"id": bson.M{"$in": in.Tasks}}
	collection.DeleteMany(context.TODO(), filter)

	return &pb.DeleteTasksResponse{}, nil
}

func (s *Server) UpdateTask(ctx context.Context, in *pb.UpdateTaskRequest) (*pb.UpdateTaskResponse, error) {
	log.Printf("Received UpdateTask request")

	client, err := getMongoClient()
	if err != nil {
		return &pb.UpdateTaskResponse{}, err
	}

	defer disconnectMongoClient(client)

	collection := client.Database("tasks").Collection("tasks")
	filter := bson.M{"id": in.Id}
	update := bson.M{"$set": bson.M{"name": in.Name, "description": in.Description, "completed": in.Completed, "unixTime": in.UnixTime}}

	collection.UpdateOne(context.TODO(), filter, update)

	var result pb.UpdateTaskResponse
	collection.FindOne(context.TODO(), filter).Decode(&result)
	return &result, nil
}

func (s *Server) MoveTasks(ctx context.Context, in *pb.MoveTaskRequest) (*pb.MoveTaskResponse, error) {
	log.Printf("Received DeleteTasks request")

	client, err := getMongoClient()
	if err != nil {
		return &pb.MoveTaskResponse{}, err
	}

	defer disconnectMongoClient(client)

	collection := client.Database("tasks").Collection("tasks")
	filter := bson.M{"id": bson.M{"$in": in.Tasks}}
	update := bson.M{"$set": bson.M{"listId": in.ListId}}
	collection.UpdateMany(context.TODO(), filter, update)

	return &pb.MoveTaskResponse{}, nil
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
