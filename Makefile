create-types:
	./emails/node_modules/@grpc/proto-loader/build/bin/proto-loader-gen-types.js --longs=String --enums=String --defaults --oneofs --grpcLib=@grpc/grpc-js --outDir=./protos/ ./protos/*.proto
