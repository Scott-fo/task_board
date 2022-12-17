import type { Request, Response } from "express";
import { NotifySubscribersRequest } from "../../../protos/NotifySubscribersRequest";
import { NotifySubscribersResponse } from "../../../protos/NotifySubscribersResponse";
import { z } from "zod";
import { emailServiceClient } from "../grpc/email_service";

export const NotifySubscribers = (req: Request, res: Response) => {
  const notifySubscribersSchema = z
    .object({
      type: z.enum([
        "NOTIFICATION_DEADLINE_PASSED",
        "NOTIFICATION_TASK_COMPLETED",
      ]),
    })
    .required();

  const result = notifySubscribersSchema.safeParse(req.body);
  if (result.success === false) {
    res.status(400).send("Input validation failed");
  } else {
    emailServiceClient.notifySubscribers(
      result.data as NotifySubscribersRequest,
      (err: Error, _response: NotifySubscribersResponse) => {
        if (err) {
          res.status(400).send("Failed to notify subscribers");
        } else {
          res.send("Notified subscribers!");
        }
      }
    );
  }
};
