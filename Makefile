create-types:
	./emails/node_modules/@grpc/proto-loader/build/bin/proto-loader-gen-types.js --longs=String --enums=String --defaults --oneofs --grpcLib=@grpc/grpc-js --outDir=./protos/ ./protos/*.proto

task-protos:
	protoc --go_out=./tasks --go_opt=paths=source_relative --go-grpc_out=./tasks --go-grpc_opt=paths=source_relative protos/tasks.proto

list-protos:
	protoc --go_out=./lists --go_opt=paths=source_relative --go-grpc_out=./lists --go-grpc_opt=paths=source_relative protos/lists.proto
