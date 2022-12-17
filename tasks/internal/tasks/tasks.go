package tasks

import (
	"context"
	"log"
	"tasks/internal/models"
	pb "tasks/protos/source"

	"github.com/google/uuid"
	"go.mongodb.org/mongo-driver/bson"
)

type Server struct {
	pb.UnimplementedTaskServiceServer
}

func (s *Server) GetTasks(ctx context.Context, in *pb.GetTasksRequest) (*pb.GetTasksResponse, error) {
	log.Printf("Received GetTasks request")

	client, err := models.GetMongoClient()
	if err != nil {
		return &pb.GetTasksResponse{}, err
	}

	defer models.DisconnectMongoClient(client)

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

func (s *Server) GetTasksByList(ctx context.Context, in *pb.GetTasksByListRequest) (*pb.GetTasksByListResponse, error) {
	log.Printf("Received GetTasksByList request")

	client, err := models.GetMongoClient()
	if err != nil {
		return &pb.GetTasksByListResponse{}, err
	}

	defer models.DisconnectMongoClient(client)

	collection := client.Database("tasks").Collection("tasks")

	cursor, err := collection.Find(context.TODO(), bson.M{"listId": in.Id})
	if err != nil {
		return &pb.GetTasksByListResponse{}, err
	}

	var results []*pb.TaskEntry
	if err = cursor.All(context.TODO(), &results); err != nil {
		return &pb.GetTasksByListResponse{}, err
	}

	return &pb.GetTasksByListResponse{
		Tasks: results,
	}, nil
}

func (s *Server) CreateTask(ctx context.Context, in *pb.CreateTaskRequest) (*pb.CreateTaskResponse, error) {
	log.Printf("Received CreateTask request")

	client, err := models.GetMongoClient()
	if err != nil {
		return &pb.CreateTaskResponse{}, err
	}

	defer models.DisconnectMongoClient(client)

	collection := client.Database("tasks").Collection("tasks")

	in.Id = uuid.NewString()

	_, err = collection.InsertOne(context.TODO(), bson.M{"id": in.Id, "name": in.Name, "description": in.Description, "listId": in.ListId, "completed": in.Completed, "unixTime": in.UnixTime})
	if err != nil {
		return &pb.CreateTaskResponse{}, err
	}

	var result *pb.CreateTaskResponse
	filter := bson.M{"id": in.Id}

	collection.FindOne(context.TODO(), filter).Decode(&result)
	return result, nil
}

func (s *Server) DeleteTasks(ctx context.Context, in *pb.DeleteTasksRequest) (*pb.DeleteTasksResponse, error) {
	log.Printf("Received DeleteTasks request")

	client, err := models.GetMongoClient()
	if err != nil {
		return &pb.DeleteTasksResponse{}, err
	}

	defer models.DisconnectMongoClient(client)

	collection := client.Database("tasks").Collection("tasks")
	filter := bson.M{"id": bson.M{"$in": in.Tasks}}
	collection.DeleteMany(context.TODO(), filter)

	return &pb.DeleteTasksResponse{}, nil
}

func (s *Server) DeleteTasksByList(ctx context.Context, in *pb.DeleteTasksByListRequest) (*pb.DeleteTasksByListResponse, error) {
	log.Printf("Received DeleteTasksByList request")

	client, err := models.GetMongoClient()
	if err != nil {
		return &pb.DeleteTasksByListResponse{}, err
	}

	defer models.DisconnectMongoClient(client)

	collection := client.Database("tasks").Collection("tasks")
	filter := bson.D{{"listId", in.ListId}}
	collection.DeleteMany(context.TODO(), filter)

	return &pb.DeleteTasksByListResponse{}, nil
}

func (s *Server) UpdateTask(ctx context.Context, in *pb.UpdateTaskRequest) (*pb.UpdateTaskResponse, error) {
	log.Printf("Received UpdateTask request")

	client, err := models.GetMongoClient()
	if err != nil {
		return &pb.UpdateTaskResponse{}, err
	}

	defer models.DisconnectMongoClient(client)

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

	client, err := models.GetMongoClient()
	if err != nil {
		return &pb.MoveTaskResponse{}, err
	}

	defer models.DisconnectMongoClient(client)

	collection := client.Database("tasks").Collection("tasks")
	filter := bson.M{"id": bson.M{"$in": in.Tasks}}
	update := bson.M{"$set": bson.M{"listId": in.ListId}}
	collection.UpdateMany(context.TODO(), filter, update)

	return &pb.MoveTaskResponse{}, nil
}
