import type { Request, Response } from "express";
import { GetTasksRequest } from "../../../protos/GetTasksRequest";
import { GetTasksResponse } from "../../../protos/GetTasksResponse";
import { taskServiceClient } from "./grpc_client";

export const getTasks = (req: Request, res: Response) => {
  taskServiceClient.getTasks(
    {} as GetTasksRequest,
    (err: any, response: GetTasksResponse) => {
      if (err) {
        console.log(err);
        res.status(400).send("Failed to retrieve tasks");
      } else {
        res.send(response);
      }
    }
  );
};
