import * as grpc from "@grpc/grpc-js";
import * as protoloader from "@grpc/proto-loader";
import { ProtoGrpcType } from "../protos/subscription";
import { EmailServiceHandlers } from "../protos/EmailService";
import {
  CreateSubscription,
  GetSubscriptions,
} from "./src/controllers/subscription_controller";
import { NotifySubscribers } from "./src/controllers/notification_controller";

const emailServer: EmailServiceHandlers = {
  CreateSubscription: CreateSubscription,
  GetSubscriptions: GetSubscriptions,
  NotifySubscribers: NotifySubscribers,
};

const packageDefinition = protoloader.loadSync("../protos/subscription.proto");
const proto = grpc.loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;

const server = new grpc.Server();

// eslint-disable-next-line
// @ts-ignore
server.addService(proto.EmailService.service, emailServer);

server.bindAsync(
  "0.0.0.0:50051",
  grpc.ServerCredentials.createInsecure(),
  () => {
    console.log("Emails Service (gRPC server) listening on port 50051");
    server.start();
  }
);

export { server };
