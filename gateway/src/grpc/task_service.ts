import { ProtoGrpcType } from "../../../protos/tasks";
import * as grpc from "@grpc/grpc-js";
import * as protoloader from "@grpc/proto-loader";

const PORT = 50052;
const HOST = "task_board_tasks_1";

const taskServicePackageDefinition = protoloader.loadSync(
  "../protos/source/tasks.proto"
);

const taskServiceProto = grpc.loadPackageDefinition(
  taskServicePackageDefinition
) as unknown as ProtoGrpcType;

export const taskServiceClient = new taskServiceProto.TaskService(
  `dns:///${HOST}:${PORT}`,
  grpc.credentials.createInsecure()
);
