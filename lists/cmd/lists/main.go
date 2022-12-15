package main

import (
	"lists/internal/lists"
	pb "lists/protos"
	"log"
	"net"

	"google.golang.org/grpc"
)

func main() {
	listener, err := net.Listen("tcp", ":50053")
	if err != nil {
		log.Fatal(err)
	}

	s := grpc.NewServer()
	pb.RegisterListServiceServer(s, &lists.Server{})

	log.Printf("Server listening on %v", listener.Addr())

	if err := s.Serve(listener); err != nil {
		log.Fatal(err)
	}
}
