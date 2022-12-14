import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { EmailServiceClient as _EmailServiceClient, EmailServiceDefinition as _EmailServiceDefinition } from './EmailService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  CreateSubscriptionRequest: MessageTypeDefinition
  CreateSubscriptionResponse: MessageTypeDefinition
  EmailService: SubtypeConstructor<typeof grpc.Client, _EmailServiceClient> & { service: _EmailServiceDefinition }
  GetSubscriptionsRequest: MessageTypeDefinition
  GetSubscriptionsResponse: MessageTypeDefinition
  NotificationType: EnumTypeDefinition
  NotifySubscribersRequest: MessageTypeDefinition
  NotifySubscribersResponse: MessageTypeDefinition
  SubscriptionEntry: MessageTypeDefinition
}

