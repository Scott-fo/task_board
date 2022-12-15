import * as protoloader from "@grpc/proto-loader";
import * as grpc from "@grpc/grpc-js";
import { ProtoGrpcType } from "../../../protos/subscription";

const PORT = 50051;
const HOST = "task_board_emails_1";

const emailServicePackageDefinition = protoloader.loadSync(
  "../protos/source/subscription.proto"
);
const emailServiceProto = grpc.loadPackageDefinition(
  emailServicePackageDefinition
) as unknown as ProtoGrpcType;

export const emailServiceClient = new emailServiceProto.EmailService(
  `dns:///${HOST}:${PORT}`,
  grpc.credentials.createInsecure()
);
