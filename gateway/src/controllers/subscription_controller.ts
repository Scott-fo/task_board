import { CreateSubscriptionRequest } from "../../../protos/CreateSubscriptionRequest";
import { CreateSubscriptionResponse } from "../../../protos/CreateSubscriptionResponse";
import { GetSubscriptionsRequest } from "../../../protos/GetSubscriptionsRequest";
import { GetSubscriptionsResponse } from "../../../protos/GetSubscriptionsResponse";
import { emailServiceClient } from "./grpc_client";
import type { Request, Response } from "express";
import { z } from "zod";

export const getSubscriptions = (_req: Request, res: Response) => {
  emailServiceClient.getSubscriptions(
    {} as GetSubscriptionsRequest,
    (err: Error, response: GetSubscriptionsResponse) => {
      if (err) {
        console.log(err);
        res.status(400).send("Failed to retrieve subscriptions");
      } else {
        res.send(response);
      }
    }
  );
};

export const createSubscription = (req: Request, res: Response) => {
  const createSubscriptionSchema = z
    .object({
      email: z.string().email(),
      firstName: z.string().min(2),
    })
    .required();

  const result = createSubscriptionSchema.safeParse(req.body);
  if (result.success === false) {
    res.status(400).send("Input validation failed");
  } else {
    emailServiceClient.createSubscription(
      result.data as CreateSubscriptionRequest,
      (err: Error, _response: CreateSubscriptionResponse) => {
        if (err) {
          res.status(400).send("Failed to create subscriptions");
        } else {
          res.send("Successfully created subscription");
        }
      }
    );
  }
};
