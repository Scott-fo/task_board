FROM golang:latest

WORKDIR /app

COPY /tasks/go.mod .
COPY /tasks/go.sum .

RUN go mod download

COPY /tasks .

RUN go build ./cmd/tasks/main.go

CMD ["./main"]
