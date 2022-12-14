// Original file: protos/tasks.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetTasksRequest as _GetTasksRequest, GetTasksRequest__Output as _GetTasksRequest__Output } from './GetTasksRequest';
import type { GetTasksResponse as _GetTasksResponse, GetTasksResponse__Output as _GetTasksResponse__Output } from './GetTasksResponse';

export interface TaskServiceClient extends grpc.Client {
  GetTasks(argument: _GetTasksRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_GetTasksResponse__Output>): grpc.ClientUnaryCall;
  GetTasks(argument: _GetTasksRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_GetTasksResponse__Output>): grpc.ClientUnaryCall;
  GetTasks(argument: _GetTasksRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_GetTasksResponse__Output>): grpc.ClientUnaryCall;
  GetTasks(argument: _GetTasksRequest, callback: grpc.requestCallback<_GetTasksResponse__Output>): grpc.ClientUnaryCall;
  getTasks(argument: _GetTasksRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_GetTasksResponse__Output>): grpc.ClientUnaryCall;
  getTasks(argument: _GetTasksRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_GetTasksResponse__Output>): grpc.ClientUnaryCall;
  getTasks(argument: _GetTasksRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_GetTasksResponse__Output>): grpc.ClientUnaryCall;
  getTasks(argument: _GetTasksRequest, callback: grpc.requestCallback<_GetTasksResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface TaskServiceHandlers extends grpc.UntypedServiceImplementation {
  GetTasks: grpc.handleUnaryCall<_GetTasksRequest__Output, _GetTasksResponse>;
  
}

export interface TaskServiceDefinition extends grpc.ServiceDefinition {
  GetTasks: MethodDefinition<_GetTasksRequest, _GetTasksResponse, _GetTasksRequest__Output, _GetTasksResponse__Output>
}
