// Original file: protos/lists.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateListRequest as _CreateListRequest, CreateListRequest__Output as _CreateListRequest__Output } from './CreateListRequest';
import type { CreateListResponse as _CreateListResponse, CreateListResponse__Output as _CreateListResponse__Output } from './CreateListResponse';
import type { DeleteListRequest as _DeleteListRequest, DeleteListRequest__Output as _DeleteListRequest__Output } from './DeleteListRequest';
import type { DeleteListResponse as _DeleteListResponse, DeleteListResponse__Output as _DeleteListResponse__Output } from './DeleteListResponse';
import type { GetListsRequest as _GetListsRequest, GetListsRequest__Output as _GetListsRequest__Output } from './GetListsRequest';
import type { GetListsResponse as _GetListsResponse, GetListsResponse__Output as _GetListsResponse__Output } from './GetListsResponse';
import type { UpdateListRequest as _UpdateListRequest, UpdateListRequest__Output as _UpdateListRequest__Output } from './UpdateListRequest';
import type { UpdateListResponse as _UpdateListResponse, UpdateListResponse__Output as _UpdateListResponse__Output } from './UpdateListResponse';

export interface ListServiceClient extends grpc.Client {
  CreateList(argument: _CreateListRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_CreateListResponse__Output>): grpc.ClientUnaryCall;
  CreateList(argument: _CreateListRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_CreateListResponse__Output>): grpc.ClientUnaryCall;
  CreateList(argument: _CreateListRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_CreateListResponse__Output>): grpc.ClientUnaryCall;
  CreateList(argument: _CreateListRequest, callback: grpc.requestCallback<_CreateListResponse__Output>): grpc.ClientUnaryCall;
  createList(argument: _CreateListRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_CreateListResponse__Output>): grpc.ClientUnaryCall;
  createList(argument: _CreateListRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_CreateListResponse__Output>): grpc.ClientUnaryCall;
  createList(argument: _CreateListRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_CreateListResponse__Output>): grpc.ClientUnaryCall;
  createList(argument: _CreateListRequest, callback: grpc.requestCallback<_CreateListResponse__Output>): grpc.ClientUnaryCall;
  
  DeleteList(argument: _DeleteListRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_DeleteListResponse__Output>): grpc.ClientUnaryCall;
  DeleteList(argument: _DeleteListRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_DeleteListResponse__Output>): grpc.ClientUnaryCall;
  DeleteList(argument: _DeleteListRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_DeleteListResponse__Output>): grpc.ClientUnaryCall;
  DeleteList(argument: _DeleteListRequest, callback: grpc.requestCallback<_DeleteListResponse__Output>): grpc.ClientUnaryCall;
  deleteList(argument: _DeleteListRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_DeleteListResponse__Output>): grpc.ClientUnaryCall;
  deleteList(argument: _DeleteListRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_DeleteListResponse__Output>): grpc.ClientUnaryCall;
  deleteList(argument: _DeleteListRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_DeleteListResponse__Output>): grpc.ClientUnaryCall;
  deleteList(argument: _DeleteListRequest, callback: grpc.requestCallback<_DeleteListResponse__Output>): grpc.ClientUnaryCall;
  
  GetLists(argument: _GetListsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_GetListsResponse__Output>): grpc.ClientUnaryCall;
  GetLists(argument: _GetListsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_GetListsResponse__Output>): grpc.ClientUnaryCall;
  GetLists(argument: _GetListsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_GetListsResponse__Output>): grpc.ClientUnaryCall;
  GetLists(argument: _GetListsRequest, callback: grpc.requestCallback<_GetListsResponse__Output>): grpc.ClientUnaryCall;
  getLists(argument: _GetListsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_GetListsResponse__Output>): grpc.ClientUnaryCall;
  getLists(argument: _GetListsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_GetListsResponse__Output>): grpc.ClientUnaryCall;
  getLists(argument: _GetListsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_GetListsResponse__Output>): grpc.ClientUnaryCall;
  getLists(argument: _GetListsRequest, callback: grpc.requestCallback<_GetListsResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateList(argument: _UpdateListRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_UpdateListResponse__Output>): grpc.ClientUnaryCall;
  UpdateList(argument: _UpdateListRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_UpdateListResponse__Output>): grpc.ClientUnaryCall;
  UpdateList(argument: _UpdateListRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_UpdateListResponse__Output>): grpc.ClientUnaryCall;
  UpdateList(argument: _UpdateListRequest, callback: grpc.requestCallback<_UpdateListResponse__Output>): grpc.ClientUnaryCall;
  updateList(argument: _UpdateListRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_UpdateListResponse__Output>): grpc.ClientUnaryCall;
  updateList(argument: _UpdateListRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_UpdateListResponse__Output>): grpc.ClientUnaryCall;
  updateList(argument: _UpdateListRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_UpdateListResponse__Output>): grpc.ClientUnaryCall;
  updateList(argument: _UpdateListRequest, callback: grpc.requestCallback<_UpdateListResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface ListServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateList: grpc.handleUnaryCall<_CreateListRequest__Output, _CreateListResponse>;
  
  DeleteList: grpc.handleUnaryCall<_DeleteListRequest__Output, _DeleteListResponse>;
  
  GetLists: grpc.handleUnaryCall<_GetListsRequest__Output, _GetListsResponse>;
  
  UpdateList: grpc.handleUnaryCall<_UpdateListRequest__Output, _UpdateListResponse>;
  
}

export interface ListServiceDefinition extends grpc.ServiceDefinition {
  CreateList: MethodDefinition<_CreateListRequest, _CreateListResponse, _CreateListRequest__Output, _CreateListResponse__Output>
  DeleteList: MethodDefinition<_DeleteListRequest, _DeleteListResponse, _DeleteListRequest__Output, _DeleteListResponse__Output>
  GetLists: MethodDefinition<_GetListsRequest, _GetListsResponse, _GetListsRequest__Output, _GetListsResponse__Output>
  UpdateList: MethodDefinition<_UpdateListRequest, _UpdateListResponse, _UpdateListRequest__Output, _UpdateListResponse__Output>
}
