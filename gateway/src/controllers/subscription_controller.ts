import { CreateSubscriptionRequest } from "../../../protos/CreateSubscriptionRequest";
import { CreateSubscriptionResponse } from "../../../protos/CreateSubscriptionResponse";
import { GetSubscriptionsRequest } from "../../../protos/GetSubscriptionsRequest";
import { GetSubscriptionsResponse } from "../../../protos/GetSubscriptionsResponse";
import { client } from "./grpc_client";
import type { Request, Response } from "express";

export const getSubscriptions = (_req: Request, res: Response) => {
  client.getSubscriptions(
    {} as GetSubscriptionsRequest,
    (err: any, response: GetSubscriptionsResponse) => {
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
  const { email, firstName } = req.body;
  client.createSubscription(
    { email, firstName } as CreateSubscriptionRequest,
    (err: any, response: CreateSubscriptionResponse) => {
      if (err) {
        res.status(400).send("Failed to create subscriptions");
      } else {
        res.send("Successfully created subscription");
      }
    }
  );
};
