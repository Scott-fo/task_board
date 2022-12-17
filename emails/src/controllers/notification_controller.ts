import { NotifySubscribersRequest } from "../../../protos/NotifySubscribersRequest";
import { NotifySubscribersResponse } from "../../../protos/NotifySubscribersResponse";
import { pool } from "../../../emails/src/models/db";
import { NotificationType } from "../../../protos/NotificationType";
import * as grpc from "@grpc/grpc-js";

export const NotifySubscribers = (
  call: grpc.ServerUnaryCall<
    NotifySubscribersRequest,
    NotifySubscribersResponse
  >,
  callback: grpc.sendUnaryData<NotifySubscribersResponse>
) => {
  const type = call.request.type as NotificationType;

  pool.getConnection((err, connection) => {
    if (err) {
      callback({ name: err.name, message: err.message }, {});
    } else {
      connection.query("SELECT * FROM subscriptions", (err, result) => {
        connection.release();
        if (err) {
          callback({ name: err.name, message: err.message }, {});
        } else {
          const length = result.length;
          for (let i = 0; i < length; ++i) {
            console.log(
              `${
                type === 1 ? "Completed" : "Missed Deadline"
              } notification for "${result[i].firstName} | sent to ${
                result[i].email
              }`
            );
          }

          callback(null, {});
        }
      });
    }
  });
};
