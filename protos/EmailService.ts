// Original file: protos/source/subscription.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateSubscriptionRequest as _CreateSubscriptionRequest, CreateSubscriptionRequest__Output as _CreateSubscriptionRequest__Output } from './CreateSubscriptionRequest';
import type { CreateSubscriptionResponse as _CreateSubscriptionResponse, CreateSubscriptionResponse__Output as _CreateSubscriptionResponse__Output } from './CreateSubscriptionResponse';
import type { GetSubscriptionsRequest as _GetSubscriptionsRequest, GetSubscriptionsRequest__Output as _GetSubscriptionsRequest__Output } from './GetSubscriptionsRequest';
import type { GetSubscriptionsResponse as _GetSubscriptionsResponse, GetSubscriptionsResponse__Output as _GetSubscriptionsResponse__Output } from './GetSubscriptionsResponse';
import type { NotifySubscribersRequest as _NotifySubscribersRequest, NotifySubscribersRequest__Output as _NotifySubscribersRequest__Output } from './NotifySubscribersRequest';
import type { NotifySubscribersResponse as _NotifySubscribersResponse, NotifySubscribersResponse__Output as _NotifySubscribersResponse__Output } from './NotifySubscribersResponse';

export interface EmailServiceClient extends grpc.Client {
  CreateSubscription(argument: _CreateSubscriptionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_CreateSubscriptionResponse__Output>): grpc.ClientUnaryCall;
  CreateSubscription(argument: _CreateSubscriptionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_CreateSubscriptionResponse__Output>): grpc.ClientUnaryCall;
  CreateSubscription(argument: _CreateSubscriptionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_CreateSubscriptionResponse__Output>): grpc.ClientUnaryCall;
  CreateSubscription(argument: _CreateSubscriptionRequest, callback: grpc.requestCallback<_CreateSubscriptionResponse__Output>): grpc.ClientUnaryCall;
  createSubscription(argument: _CreateSubscriptionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_CreateSubscriptionResponse__Output>): grpc.ClientUnaryCall;
  createSubscription(argument: _CreateSubscriptionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_CreateSubscriptionResponse__Output>): grpc.ClientUnaryCall;
  createSubscription(argument: _CreateSubscriptionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_CreateSubscriptionResponse__Output>): grpc.ClientUnaryCall;
  createSubscription(argument: _CreateSubscriptionRequest, callback: grpc.requestCallback<_CreateSubscriptionResponse__Output>): grpc.ClientUnaryCall;
  
  GetSubscriptions(argument: _GetSubscriptionsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_GetSubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  GetSubscriptions(argument: _GetSubscriptionsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_GetSubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  GetSubscriptions(argument: _GetSubscriptionsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_GetSubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  GetSubscriptions(argument: _GetSubscriptionsRequest, callback: grpc.requestCallback<_GetSubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  getSubscriptions(argument: _GetSubscriptionsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_GetSubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  getSubscriptions(argument: _GetSubscriptionsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_GetSubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  getSubscriptions(argument: _GetSubscriptionsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_GetSubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  getSubscriptions(argument: _GetSubscriptionsRequest, callback: grpc.requestCallback<_GetSubscriptionsResponse__Output>): grpc.ClientUnaryCall;
  
  NotifySubscribers(argument: _NotifySubscribersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_NotifySubscribersResponse__Output>): grpc.ClientUnaryCall;
  NotifySubscribers(argument: _NotifySubscribersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_NotifySubscribersResponse__Output>): grpc.ClientUnaryCall;
  NotifySubscribers(argument: _NotifySubscribersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_NotifySubscribersResponse__Output>): grpc.ClientUnaryCall;
  NotifySubscribers(argument: _NotifySubscribersRequest, callback: grpc.requestCallback<_NotifySubscribersResponse__Output>): grpc.ClientUnaryCall;
  notifySubscribers(argument: _NotifySubscribersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_NotifySubscribersResponse__Output>): grpc.ClientUnaryCall;
  notifySubscribers(argument: _NotifySubscribersRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_NotifySubscribersResponse__Output>): grpc.ClientUnaryCall;
  notifySubscribers(argument: _NotifySubscribersRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_NotifySubscribersResponse__Output>): grpc.ClientUnaryCall;
  notifySubscribers(argument: _NotifySubscribersRequest, callback: grpc.requestCallback<_NotifySubscribersResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface EmailServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateSubscription: grpc.handleUnaryCall<_CreateSubscriptionRequest__Output, _CreateSubscriptionResponse>;
  
  GetSubscriptions: grpc.handleUnaryCall<_GetSubscriptionsRequest__Output, _GetSubscriptionsResponse>;
  
  NotifySubscribers: grpc.handleUnaryCall<_NotifySubscribersRequest__Output, _NotifySubscribersResponse>;
  
}

export interface EmailServiceDefinition extends grpc.ServiceDefinition {
  CreateSubscription: MethodDefinition<_CreateSubscriptionRequest, _CreateSubscriptionResponse, _CreateSubscriptionRequest__Output, _CreateSubscriptionResponse__Output>
  GetSubscriptions: MethodDefinition<_GetSubscriptionsRequest, _GetSubscriptionsResponse, _GetSubscriptionsRequest__Output, _GetSubscriptionsResponse__Output>
  NotifySubscribers: MethodDefinition<_NotifySubscribersRequest, _NotifySubscribersResponse, _NotifySubscribersRequest__Output, _NotifySubscribersResponse__Output>
}
