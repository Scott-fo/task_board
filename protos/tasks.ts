import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { TaskServiceClient as _TaskServiceClient, TaskServiceDefinition as _TaskServiceDefinition } from './TaskService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  GetTasksRequest: MessageTypeDefinition
  GetTasksResponse: MessageTypeDefinition
  TaskEntry: MessageTypeDefinition
  TaskService: SubtypeConstructor<typeof grpc.Client, _TaskServiceClient> & { service: _TaskServiceDefinition }
}

