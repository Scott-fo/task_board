import type { Request, Response } from "express";
import { z } from "zod";
import { CreateListRequest } from "../../../protos/CreateListRequest";
import { CreateListResponse } from "../../../protos/CreateListResponse";
import { DeleteListRequest } from "../../../protos/DeleteListRequest";
import { DeleteListResponse } from "../../../protos/DeleteListResponse";
import { GetListsRequest } from "../../../protos/GetListsRequest";
import { GetListsResponse } from "../../../protos/GetListsResponse";
import { UpdateListRequest } from "../../../protos/UpdateListRequest";
import { UpdateListResponse } from "../../../protos/UpdateListResponse";
import { listServiceClient } from "../grpc/list_service";

export const getLists = (_req: Request, res: Response) => {
  listServiceClient.getLists(
    {} as GetListsRequest,
    (err: Error, response: GetListsResponse) => {
      if (err) {
        console.log(err);
        res.status(400).send("Failed to retrieve lists");
      } else {
        res.status(200).send(response);
      }
    }
  );
};

export const deleteLists = (req: Request, res: Response) => {
  const deleteListSchema = z
    .object({
      id: z.string(),
    })
    .required();

  const result = deleteListSchema.safeParse(req.body);
  if (result.success === false) {
    res.status(400).send("Input validation failed");
  } else {
    listServiceClient.deleteList(
      result.data as DeleteListRequest,
      (err: Error, _response: DeleteListResponse) => {
        if (err) {
          console.log(err);
          res.status(400).send("Failed to delete list");
        } else {
          res.status(200).send("Successfully deleted list");
        }
      }
    );
  }
};

export const createLists = (req: Request, res: Response) => {
  const createListSchema = z
    .object({
      name: z.string(),
    })
    .required();

  const result = createListSchema.safeParse(req.body);
  if (result.success === false) {
    res.status(400).send("Input validation failed");
  } else {
    listServiceClient.createList(
      result.data as CreateListRequest,
      (err: Error, _response: CreateListResponse) => {
        if (err) {
          console.log(err);
          res.status(400).send("Failed to create list");
        } else {
          res.status(201).send("Successfully created list");
        }
      }
    );
  }
};

export const updateLists = (req: Request, res: Response) => {
  const updateListSchema = z
    .object({
      id: z.string(),
      name: z.string(),
    })
    .required();

  const result = updateListSchema.safeParse(req.body);
  if (result.success === false) {
    res.status(400).send("Input validation failed");
  } else {
    listServiceClient.updateList(
      result.data as UpdateListRequest,
      (err: Error, response: UpdateListResponse) => {
        if (err) {
          console.log(err);
          res.status(400).send("Failed to update list");
        } else {
          res.status(200).send(response);
        }
      }
    );
  }
};
