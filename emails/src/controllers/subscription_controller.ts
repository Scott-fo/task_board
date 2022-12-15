import { CreateSubscriptionRequest } from "../../../protos/CreateSubscriptionRequest";
import { CreateSubscriptionResponse } from "../../../protos/CreateSubscriptionResponse";
import * as grpc from "@grpc/grpc-js";
import { pool } from "../models/db";

export const CreateSubscription = (
  call: grpc.ServerUnaryCall<
    CreateSubscriptionRequest,
    CreateSubscriptionResponse
  >,
  callback: grpc.sendUnaryData<CreateSubscriptionResponse>
) => {
  const user = {
    firstName: call.request.firstName,
    email: call.request.email,
  };

  pool.getConnection((err, connection) => {
    if (err) {
      callback({ name: err.name, message: err.message }, {});
    } else {
      connection.query("INSERT INTO subscriptions SET ?", user, (err, _row) => {
        connection.release();
        if (err) {
          callback({ name: err.name, message: err.message }, {});
        } else {
          callback(null, {});
        }
      });
    }
  });
};

export const GetSubscriptions = (
  _call: grpc.ServerUnaryCall<
    CreateSubscriptionRequest,
    CreateSubscriptionResponse
  >,
  callback: grpc.sendUnaryData<CreateSubscriptionResponse>
) => {
  pool.getConnection((err, connection) => {
    if (err) {
      callback({ name: err.name, message: err.message }, {});
    } else {
      connection.query("SELECT * FROM subscriptions", (err, result) => {
        connection.release();
        if (err) {
          callback({ name: err.name, message: err.message }, {});
        } else {
          callback(null, { subscriptions: result });
        }
      });
    }
  });
};
