package jobhandler

import (
	"context"
	"fmt"
	"log"
	"strconv"
	"tasks/internal/models"
	pb "tasks/protos/source"
	"time"

	"github.com/robfig/cron/v3"
	"go.mongodb.org/mongo-driver/bson"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

func Start() {
	fmt.Println("Entered job main")
	c := cron.New()
	c.AddFunc("@daily", notifyExpiredTasks)
	c.Start()
}

type TaskId struct {
	Id        string
	Name      string
	UnixTime  string
	Completed bool
}

func notifyExpiredTasks() {
	fmt.Println("Notifying users for tasks past deadline")

	client, err := models.GetMongoClient()
	if err != nil {
		log.Println("Failed to connect to DB")
		return
	}

	defer models.DisconnectMongoClient(client)

	collection := client.Database("tasks").Collection("tasks")

	cursor, err := collection.Find(context.TODO(), bson.M{})
	if err != nil {
		log.Println("Failed to retrieve tasks")
		return
	}

	var results []TaskId
	if err = cursor.All(context.TODO(), &results); err != nil {
		log.Println(err)
		return
	}

	var filteredResults []TaskId
	for _, task := range results {
		if task.UnixTime != "" {
			deadline, err := strconv.ParseInt(task.UnixTime, 10, 64)
			if err != nil {
				log.Println(err)
				log.Println("Failed to parse unix time")
				continue
			}

			if deadline < time.Now().Unix() && task.Completed == false {
				filteredResults = append(filteredResults, task)
			}
		}
	}

	if len(filteredResults) > 0 {
		conn, err := grpc.Dial("dns:///task_board_emails_1:50051", grpc.WithTransportCredentials(insecure.NewCredentials()))
		if err != nil {
			log.Println(err)
			return
		}

		defer conn.Close()
		emailClient := pb.NewEmailServiceClient(conn)

		for range filteredResults {
			emailClient.NotifySubscribers(context.TODO(), &pb.NotifySubscribersRequest{
				Type: pb.NotificationType_NOTIFICATION_DEADLINE_PASSED,
			})
		}
	}

}
