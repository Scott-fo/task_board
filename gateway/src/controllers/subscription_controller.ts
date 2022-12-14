import { CreateSubscriptionRequest } from "../../../protos/CreateSubscriptionRequest";
import { CreateSubscriptionResponse } from "../../../protos/CreateSubscriptionResponse";
import { GetSubscriptionsRequest } from "../../../protos/GetSubscriptionsRequest";
import { GetSubscriptionsResponse } from "../../../protos/GetSubscriptionsResponse";
import type { Request, Response } from "express";
import { z } from "zod";
import { emailServiceClient } from "../grpc/email_service";

export const getSubscriptions = (_req: Request, res: Response) => {
  emailServiceClient.getSubscriptions(
    {} as GetSubscriptionsRequest,
    (err: Error, response: GetSubscriptionsResponse) => {
      if (err) {
        console.log(err);
        res
          .status(400)
          .send(`Failed to retrieve subscriptions: ${err.message}`);
      } else {
        res.status(200).send(response);
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
          res
            .status(400)
            .send(`Failed to create subscriptions: ${err.message}`);
        } else {
          res.status(201).send("Successfully created subscription");
        }
      }
    );
  }
};
