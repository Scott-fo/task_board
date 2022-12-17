package main

import (
	"log"
	"net"
	"tasks/internal/tasks"
	pb "tasks/protos/source"

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
	pb.RegisterTaskServiceServer(s, &tasks.Server{})

	log.Printf("Server listening on %v", listener.Addr())

	if err := s.Serve(listener); err != nil {
		log.Fatal(err)
	}
}
