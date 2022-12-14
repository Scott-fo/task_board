import { client } from './grpc_client';
import type { Request, Response } from 'express';
import { NotifySubscribersRequest } from '../../../protos/NotifySubscribersRequest';
import { NotifySubscribersResponse } from '../../../protos/NotifySubscribersResponse';

export const NotifySubscribers = (req: Request, res: Response) => {
  const { type } = req.body;
  client.notifySubscribers({ type } as NotifySubscribersRequest, (err: any, response: NotifySubscribersResponse) => {
    if (err) {
      res.status(400).send("Failed to notify subscribers");
    } else {
      res.send("Notified subscribers!");
    }
  });
}
