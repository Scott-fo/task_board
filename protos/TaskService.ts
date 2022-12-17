// Original file: protos/source/tasks.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateTaskRequest as _CreateTaskRequest, CreateTaskRequest__Output as _CreateTaskRequest__Output } from './CreateTaskRequest';
import type { CreateTaskResponse as _CreateTaskResponse, CreateTaskResponse__Output as _CreateTaskResponse__Output } from './CreateTaskResponse';
import type { DeleteTasksByListRequest as _DeleteTasksByListRequest, DeleteTasksByListRequest__Output as _DeleteTasksByListRequest__Output } from './DeleteTasksByListRequest';
import type { DeleteTasksByListResponse as _DeleteTasksByListResponse, DeleteTasksByListResponse__Output as _DeleteTasksByListResponse__Output } from './DeleteTasksByListResponse';
import type { DeleteTasksRequest as _DeleteTasksRequest, DeleteTasksRequest__Output as _DeleteTasksRequest__Output } from './DeleteTasksRequest';
import type { DeleteTasksResponse as _DeleteTasksResponse, DeleteTasksResponse__Output as _DeleteTasksResponse__Output } from './DeleteTasksResponse';
import type { GetTasksByListRequest as _GetTasksByListRequest, GetTasksByListRequest__Output as _GetTasksByListRequest__Output } from './GetTasksByListRequest';
import type { GetTasksByListResponse as _GetTasksByListResponse, GetTasksByListResponse__Output as _GetTasksByListResponse__Output } from './GetTasksByListResponse';
import type { GetTasksRequest as _GetTasksRequest, GetTasksRequest__Output as _GetTasksRequest__Output } from './GetTasksRequest';
import type { GetTasksResponse as _GetTasksResponse, GetTasksResponse__Output as _GetTasksResponse__Output } from './GetTasksResponse';
import type { MoveTaskRequest as _MoveTaskRequest, MoveTaskRequest__Output as _MoveTaskRequest__Output } from './MoveTaskRequest';
import type { MoveTaskResponse as _MoveTaskResponse, MoveTaskResponse__Output as _MoveTaskResponse__Output } from './MoveTaskResponse';
import type { UpdateTaskRequest as _UpdateTaskRequest, UpdateTaskRequest__Output as _UpdateTaskRequest__Output } from './UpdateTaskRequest';
import type { UpdateTaskResponse as _UpdateTaskResponse, UpdateTaskResponse__Output as _UpdateTaskResponse__Output } from './UpdateTaskResponse';

export interface TaskServiceClient extends grpc.Client {
  CreateTask(argument: _CreateTaskRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_CreateTaskResponse__Output>): grpc.ClientUnaryCall;
  CreateTask(argument: _CreateTaskRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_CreateTaskResponse__Output>): grpc.ClientUnaryCall;
  CreateTask(argument: _CreateTaskRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_CreateTaskResponse__Output>): grpc.ClientUnaryCall;
  CreateTask(argument: _CreateTaskRequest, callback: grpc.requestCallback<_CreateTaskResponse__Output>): grpc.ClientUnaryCall;
  createTask(argument: _CreateTaskRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_CreateTaskResponse__Output>): grpc.ClientUnaryCall;
  createTask(argument: _CreateTaskRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_CreateTaskResponse__Output>): grpc.ClientUnaryCall;
  createTask(argument: _CreateTaskRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_CreateTaskResponse__Output>): grpc.ClientUnaryCall;
  createTask(argument: _CreateTaskRequest, callback: grpc.requestCallback<_CreateTaskResponse__Output>): grpc.ClientUnaryCall;
  
  DeleteTasks(argument: _DeleteTasksRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_DeleteTasksResponse__Output>): grpc.ClientUnaryCall;
  DeleteTasks(argument: _DeleteTasksRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_DeleteTasksResponse__Output>): grpc.ClientUnaryCall;
  DeleteTasks(argument: _DeleteTasksRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_DeleteTasksResponse__Output>): grpc.ClientUnaryCall;
  DeleteTasks(argument: _DeleteTasksRequest, callback: grpc.requestCallback<_DeleteTasksResponse__Output>): grpc.ClientUnaryCall;
  deleteTasks(argument: _DeleteTasksRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_DeleteTasksResponse__Output>): grpc.ClientUnaryCall;
  deleteTasks(argument: _DeleteTasksRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_DeleteTasksResponse__Output>): grpc.ClientUnaryCall;
  deleteTasks(argument: _DeleteTasksRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_DeleteTasksResponse__Output>): grpc.ClientUnaryCall;
  deleteTasks(argument: _DeleteTasksRequest, callback: grpc.requestCallback<_DeleteTasksResponse__Output>): grpc.ClientUnaryCall;
  
  DeleteTasksByList(argument: _DeleteTasksByListRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_DeleteTasksByListResponse__Output>): grpc.ClientUnaryCall;
  DeleteTasksByList(argument: _DeleteTasksByListRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_DeleteTasksByListResponse__Output>): grpc.ClientUnaryCall;
  DeleteTasksByList(argument: _DeleteTasksByListRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_DeleteTasksByListResponse__Output>): grpc.ClientUnaryCall;
  DeleteTasksByList(argument: _DeleteTasksByListRequest, callback: grpc.requestCallback<_DeleteTasksByListResponse__Output>): grpc.ClientUnaryCall;
  deleteTasksByList(argument: _DeleteTasksByListRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_DeleteTasksByListResponse__Output>): grpc.ClientUnaryCall;
  deleteTasksByList(argument: _DeleteTasksByListRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_DeleteTasksByListResponse__Output>): grpc.ClientUnaryCall;
  deleteTasksByList(argument: _DeleteTasksByListRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_DeleteTasksByListResponse__Output>): grpc.ClientUnaryCall;
  deleteTasksByList(argument: _DeleteTasksByListRequest, callback: grpc.requestCallback<_DeleteTasksByListResponse__Output>): grpc.ClientUnaryCall;
  
  GetTasks(argument: _GetTasksRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_GetTasksResponse__Output>): grpc.ClientUnaryCall;
  GetTasks(argument: _GetTasksRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_GetTasksResponse__Output>): grpc.ClientUnaryCall;
  GetTasks(argument: _GetTasksRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_GetTasksResponse__Output>): grpc.ClientUnaryCall;
  GetTasks(argument: _GetTasksRequest, callback: grpc.requestCallback<_GetTasksResponse__Output>): grpc.ClientUnaryCall;
  getTasks(argument: _GetTasksRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_GetTasksResponse__Output>): grpc.ClientUnaryCall;
  getTasks(argument: _GetTasksRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_GetTasksResponse__Output>): grpc.ClientUnaryCall;
  getTasks(argument: _GetTasksRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_GetTasksResponse__Output>): grpc.ClientUnaryCall;
  getTasks(argument: _GetTasksRequest, callback: grpc.requestCallback<_GetTasksResponse__Output>): grpc.ClientUnaryCall;
  
  GetTasksByList(argument: _GetTasksByListRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_GetTasksByListResponse__Output>): grpc.ClientUnaryCall;
  GetTasksByList(argument: _GetTasksByListRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_GetTasksByListResponse__Output>): grpc.ClientUnaryCall;
  GetTasksByList(argument: _GetTasksByListRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_GetTasksByListResponse__Output>): grpc.ClientUnaryCall;
  GetTasksByList(argument: _GetTasksByListRequest, callback: grpc.requestCallback<_GetTasksByListResponse__Output>): grpc.ClientUnaryCall;
  getTasksByList(argument: _GetTasksByListRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_GetTasksByListResponse__Output>): grpc.ClientUnaryCall;
  getTasksByList(argument: _GetTasksByListRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_GetTasksByListResponse__Output>): grpc.ClientUnaryCall;
  getTasksByList(argument: _GetTasksByListRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_GetTasksByListResponse__Output>): grpc.ClientUnaryCall;
  getTasksByList(argument: _GetTasksByListRequest, callback: grpc.requestCallback<_GetTasksByListResponse__Output>): grpc.ClientUnaryCall;
  
  MoveTasks(argument: _MoveTaskRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_MoveTaskResponse__Output>): grpc.ClientUnaryCall;
  MoveTasks(argument: _MoveTaskRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_MoveTaskResponse__Output>): grpc.ClientUnaryCall;
  MoveTasks(argument: _MoveTaskRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_MoveTaskResponse__Output>): grpc.ClientUnaryCall;
  MoveTasks(argument: _MoveTaskRequest, callback: grpc.requestCallback<_MoveTaskResponse__Output>): grpc.ClientUnaryCall;
  moveTasks(argument: _MoveTaskRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_MoveTaskResponse__Output>): grpc.ClientUnaryCall;
  moveTasks(argument: _MoveTaskRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_MoveTaskResponse__Output>): grpc.ClientUnaryCall;
  moveTasks(argument: _MoveTaskRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_MoveTaskResponse__Output>): grpc.ClientUnaryCall;
  moveTasks(argument: _MoveTaskRequest, callback: grpc.requestCallback<_MoveTaskResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateTask(argument: _UpdateTaskRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_UpdateTaskResponse__Output>): grpc.ClientUnaryCall;
  UpdateTask(argument: _UpdateTaskRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_UpdateTaskResponse__Output>): grpc.ClientUnaryCall;
  UpdateTask(argument: _UpdateTaskRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_UpdateTaskResponse__Output>): grpc.ClientUnaryCall;
  UpdateTask(argument: _UpdateTaskRequest, callback: grpc.requestCallback<_UpdateTaskResponse__Output>): grpc.ClientUnaryCall;
  updateTask(argument: _UpdateTaskRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_UpdateTaskResponse__Output>): grpc.ClientUnaryCall;
  updateTask(argument: _UpdateTaskRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_UpdateTaskResponse__Output>): grpc.ClientUnaryCall;
  updateTask(argument: _UpdateTaskRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_UpdateTaskResponse__Output>): grpc.ClientUnaryCall;
  updateTask(argument: _UpdateTaskRequest, callback: grpc.requestCallback<_UpdateTaskResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface TaskServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateTask: grpc.handleUnaryCall<_CreateTaskRequest__Output, _CreateTaskResponse>;
  
  DeleteTasks: grpc.handleUnaryCall<_DeleteTasksRequest__Output, _DeleteTasksResponse>;
  
  DeleteTasksByList: grpc.handleUnaryCall<_DeleteTasksByListRequest__Output, _DeleteTasksByListResponse>;
  
  GetTasks: grpc.handleUnaryCall<_GetTasksRequest__Output, _GetTasksResponse>;
  
  GetTasksByList: grpc.handleUnaryCall<_GetTasksByListRequest__Output, _GetTasksByListResponse>;
  
  MoveTasks: grpc.handleUnaryCall<_MoveTaskRequest__Output, _MoveTaskResponse>;
  
  UpdateTask: grpc.handleUnaryCall<_UpdateTaskRequest__Output, _UpdateTaskResponse>;
  
}

export interface TaskServiceDefinition extends grpc.ServiceDefinition {
  CreateTask: MethodDefinition<_CreateTaskRequest, _CreateTaskResponse, _CreateTaskRequest__Output, _CreateTaskResponse__Output>
  DeleteTasks: MethodDefinition<_DeleteTasksRequest, _DeleteTasksResponse, _DeleteTasksRequest__Output, _DeleteTasksResponse__Output>
  DeleteTasksByList: MethodDefinition<_DeleteTasksByListRequest, _DeleteTasksByListResponse, _DeleteTasksByListRequest__Output, _DeleteTasksByListResponse__Output>
  GetTasks: MethodDefinition<_GetTasksRequest, _GetTasksResponse, _GetTasksRequest__Output, _GetTasksResponse__Output>
  GetTasksByList: MethodDefinition<_GetTasksByListRequest, _GetTasksByListResponse, _GetTasksByListRequest__Output, _GetTasksByListResponse__Output>
  MoveTasks: MethodDefinition<_MoveTaskRequest, _MoveTaskResponse, _MoveTaskRequest__Output, _MoveTaskResponse__Output>
  UpdateTask: MethodDefinition<_UpdateTaskRequest, _UpdateTaskResponse, _UpdateTaskRequest__Output, _UpdateTaskResponse__Output>
}
