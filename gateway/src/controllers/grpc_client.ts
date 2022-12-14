import * as grpc from "@grpc/grpc-js";
import { ProtoGrpcType as SubscriptionProtoGrpcType } from "../../../protos/subscription";
import { ProtoGrpcType as TasksProtoGrpcType } from "../../../protos/tasks";
import * as protoloader from "@grpc/proto-loader";

const emailServicePackageDefinition = protoloader.loadSync(
  "../protos/subscription.proto"
);
const emailServiceProto = grpc.loadPackageDefinition(
  emailServicePackageDefinition
) as unknown as SubscriptionProtoGrpcType;

export const emailServiceClient = new emailServiceProto.EmailService(
  "dns:///task_board_emails_1:50051",
  grpc.credentials.createInsecure()
);

const taskServicePackageDefinition = protoloader.loadSync(
  "../protos/tasks.proto"
);
const taskServiceProto = grpc.loadPackageDefinition(
  taskServicePackageDefinition
) as unknown as TasksProtoGrpcType;

export const taskServiceClient = new taskServiceProto.TaskService(
  "dns:///task_board_tasks_1:50052",
  grpc.credentials.createInsecure()
);
