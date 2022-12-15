FROM golang:latest

WORKDIR /app

COPY /lists/go.mod .
COPY /lists/go.sum .

RUN go mod download

COPY /lists .

RUN go build ./cmd/lists/main.go

CMD ["./main"]
