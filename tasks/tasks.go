package main

import (
	"context"
	"log"
	"net"
	"os"
	pb "tasks/protos"

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
	connectionString := os.Getenv("MONGO_STRING")

	client, err := mongo.Connect(context.TODO(), options.Client().ApplyURI(connectionString))
	if err != nil {
		return &pb.GetTasksResponse{}, err
	}

	defer func() {
		if err = client.Disconnect(context.TODO()); err != nil {
			log.Fatal(err)
		}
	}()

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
