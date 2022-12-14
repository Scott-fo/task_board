import * as grpc from '@grpc/grpc-js';
import { ProtoGrpcType } from '../../../protos/subscription';
import * as protoloader from '@grpc/proto-loader';

const packageDefinition = protoloader.loadSync('../protos/subscription.proto');
const proto = (grpc.loadPackageDefinition(packageDefinition) as unknown) as ProtoGrpcType;

export const client = new proto.EmailService("localhost:50051", grpc.credentials.createInsecure());
