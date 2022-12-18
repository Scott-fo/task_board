import type { Request, Response } from "express";
import { z } from "zod";
import { CreateTaskRequest } from "../../../protos/CreateTaskRequest";
import { CreateTaskResponse } from "../../../protos/CreateTaskResponse";
import { DeleteTasksRequest } from "../../../protos/DeleteTasksRequest";
import { DeleteTasksResponse } from "../../../protos/DeleteTasksResponse";
import { GetTasksRequest } from "../../../protos/GetTasksRequest";
import { GetTasksResponse } from "../../../protos/GetTasksResponse";
import { GetTasksByListRequest } from "../../../protos/GetTasksByListRequest";
import { GetTasksByListResponse } from "../../../protos/GetTasksByListResponse";
import { MoveTaskRequest } from "../../../protos/MoveTaskRequest";
import { MoveTaskResponse } from "../../../protos/MoveTaskResponse";
import { UpdateTaskRequest } from "../../../protos/UpdateTaskRequest";
import { UpdateTaskResponse } from "../../../protos/UpdateTaskResponse";
import { taskServiceClient } from "../grpc/task_service";

export const getTasks = (_req: Request, res: Response) => {
  taskServiceClient.getTasks(
    {} as GetTasksRequest,
    (err: Error, response: GetTasksResponse) => {
      if (err) {
        console.log(err);
        res.status(400).send("Failed to retrieve tasks");
      } else {
        res.status(200).send(response);
      }
    }
  );
};

export const getTasksByList = (req: Request, res: Response) => {
  const getTasksByListSchema = z
    .object({
      id: z.string(),
    })
    .required();

  const result = getTasksByListSchema.safeParse(req.params);
  if (result.success === false) {
    res.status(400).send("Input validation failed");
  } else {
    taskServiceClient.getTasksByList(
      result.data as GetTasksByListRequest,
      (err: Error, response: GetTasksByListResponse) => {
        if (err) {
          console.log(err);
          res.status(400).send("Failed to retrieve tasks");
        } else {
          res.status(200).send(response);
        }
      }
    );
  }
};

export const createTask = (req: Request, res: Response) => {
  const createTaskSchema = z.object({
    name: z.string(),
    description: z.string(),
    listId: z.string(),
    completed: z.boolean(),
    unixTime: z.string(),
  });

  const result = createTaskSchema.safeParse(req.body);
  if (result.success === false) {
    res.status(400).send("Input validation failed");
  } else {
    taskServiceClient.createTask(
      result.data as CreateTaskRequest,
      (err: Error, response: CreateTaskResponse) => {
        if (err) {
          console.log(err);
          res.status(400).send("Failed to create task");
        } else {
          res.status(201).send(response);
        }
      }
    );
  }
};

export const deleteTasks = (req: Request, res: Response) => {
  const deleteTaskSchema = z
    .object({
      tasks: z.string().array(),
    })
    .required();

  const result = deleteTaskSchema.safeParse(req.body);
  if (result.success === false) {
    res.status(400).send("Input validation failed");
  } else {
    taskServiceClient.deleteTasks(
      result.data as DeleteTasksRequest,
      (err: Error, _response: DeleteTasksResponse) => {
        if (err) {
          console.log(err);
          res.status(400).send("Failed to delete task");
        } else {
          res.status(200).send("Successfully deleted task");
        }
      }
    );
  }
};

export const updateTask = (req: Request, res: Response) => {
  const updateTaskSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    listId: z.string(),
    completed: z.boolean(),
    unixTime: z.string(),
  });

  const result = updateTaskSchema.safeParse(req.body);
  if (result.success === false || result.data.id === "") {
    res.status(400).send("Input validation failed");
  } else {
    taskServiceClient.updateTask(
      result.data as UpdateTaskRequest,
      (err: Error, response: UpdateTaskResponse) => {
        if (err) {
          console.log(err);
          res.status(400).send("Failed to update task");
        } else {
          res.status(200).send(response);
        }
      }
    );
  }
};

export const moveTasks = (req: Request, res: Response) => {
  const moveTaskSchema = z
    .object({
      listId: z.string(),
      tasks: z.string().array(),
    })
    .required();

  const result = moveTaskSchema.safeParse(req.body);
  if (result.success === false) {
    res.status(400).send("Input validation failed");
  } else {
    taskServiceClient.moveTasks(
      result.data as MoveTaskRequest,
      (err: Error, _response: MoveTaskResponse) => {
        if (err) {
          console.log(err);
          res.status(400).send("Failed to move tasks");
        } else {
          res.status(200).send("Successfully moved tasks");
        }
      }
    );
  }
};
