import * as grpc from "@grpc/grpc-js";
import { ProtoGrpcType } from "../../../protos/lists";
import * as protoloader from "@grpc/proto-loader";

const PORT = 50053;
const HOST = "task_board_lists_1";

const listServicePackageDefinition = protoloader.loadSync(
  "../protos/source/lists.proto"
);
const listServiceProto = grpc.loadPackageDefinition(
  listServicePackageDefinition
) as unknown as ProtoGrpcType;

export const listServiceClient = new listServiceProto.ListService(
  `dns:///${HOST}:${PORT}`,
  grpc.credentials.createInsecure()
);
