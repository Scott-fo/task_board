import * as grpc from "@grpc/grpc-js";
import { ProtoGrpcType as SubscriptionProtoGrpcType } from "../../../protos/subscription";
import { ProtoGrpcType as TasksProtoGrpcType } from "../../../protos/tasks";
import { ProtoGrpcType as ListsProtoGrpcType } from "../../../protos/lists";
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

const listServicePackageDefinition = protoloader.loadSync(
  "../protos/lists.proto"
);
const listServiceProto = grpc.loadPackageDefinition(
  listServicePackageDefinition
) as unknown as ListsProtoGrpcType;

export const listServiceClient = new listServiceProto.ListService(
  "dns:///task_board_lists_1:50053",
  grpc.credentials.createInsecure()
);
