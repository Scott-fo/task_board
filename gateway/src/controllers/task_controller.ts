import type { Request, Response } from "express";
import { CreateTaskRequest } from "../../../protos/CreateTaskRequest";
import { CreateTaskResponse } from "../../../protos/CreateTaskResponse";
import { DeleteTasksRequest } from "../../../protos/DeleteTasksRequest";
import { DeleteTasksResponse } from "../../../protos/DeleteTasksResponse";
import { GetTasksRequest } from "../../../protos/GetTasksRequest";
import { GetTasksResponse } from "../../../protos/GetTasksResponse";
import { MoveTaskRequest } from "../../../protos/MoveTaskRequest";
import { MoveTaskResponse } from "../../../protos/MoveTaskResponse";
import { UpdateTaskRequest } from "../../../protos/UpdateTaskRequest";
import { UpdateTaskResponse } from "../../../protos/UpdateTaskResponse";
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

export const createTask = (req: Request, res: Response) => {
  taskServiceClient.createTask(
    req.body as CreateTaskRequest,
    (err: any, response: CreateTaskResponse) => {
      if (err) {
        console.log(err);
        res.status(400).send("Failed to create task");
      } else {
        res.send(response);
      }
    }
  );
};

export const deleteTasks = (req: Request, res: Response) => {
  taskServiceClient.deleteTasks(
    req.body as DeleteTasksRequest,
    (err: any, response: DeleteTasksResponse) => {
      if (err) {
        console.log(err);
        res.status(400).send("Failed to delete task");
      } else {
        res.send(response);
      }
    }
  );
};

export const updateTask = (req: Request, res: Response) => {
  taskServiceClient.updateTask(
    req.body as UpdateTaskRequest,
    (err: any, response: UpdateTaskResponse) => {
      if (err) {
        console.log(err);
        res.status(400).send("Failed to update task");
      } else {
        res.send(response);
      }
    }
  );
};

export const moveTasks = (req: Request, res: Response) => {
  taskServiceClient.moveTasks(
    req.body as MoveTaskRequest,
    (err: any, response: MoveTaskResponse) => {
      if (err) {
        console.log(err);
        res.status(400).send("Failed to move tasks");
      } else {
        res.send(response);
      }
    }
  );
};
