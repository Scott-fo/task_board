import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { ListServiceClient as _ListServiceClient, ListServiceDefinition as _ListServiceDefinition } from './ListService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  CreateListRequest: MessageTypeDefinition
  CreateListResponse: MessageTypeDefinition
  DeleteListRequest: MessageTypeDefinition
  DeleteListResponse: MessageTypeDefinition
  GetListsRequest: MessageTypeDefinition
  GetListsResponse: MessageTypeDefinition
  ListEntry: MessageTypeDefinition
  ListService: SubtypeConstructor<typeof grpc.Client, _ListServiceClient> & { service: _ListServiceDefinition }
  UpdateListRequest: MessageTypeDefinition
  UpdateListResponse: MessageTypeDefinition
}

