import type { Request, Response } from "express";
import { CreateListRequest } from "../../../protos/CreateListRequest";
import { CreateListResponse } from "../../../protos/CreateListResponse";
import { DeleteListRequest } from "../../../protos/DeleteListRequest";
import { DeleteListResponse } from "../../../protos/DeleteListResponse";
import { GetListsRequest } from "../../../protos/GetListsRequest";
import { GetListsResponse } from "../../../protos/GetListsResponse";
import { UpdateListRequest } from "../../../protos/UpdateListRequest";
import { UpdateListResponse } from "../../../protos/UpdateListResponse";
import { listServiceClient } from "./grpc_client";

export const getLists = (req: Request, res: Response) => {
  listServiceClient.getLists(
    {} as GetListsRequest,
    (err: any, response: GetListsResponse) => {
      if (err) {
        console.log(err);
        res.status(400).send("Failed to retrieve lists");
      } else {
        res.send(response);
      }
    }
  );
};

export const deleteLists = (req: Request, res: Response) => {
  listServiceClient.deleteList(
    req.body as DeleteListRequest,
    (err: any, response: DeleteListResponse) => {
      if (err) {
        console.log(err);
        res.status(400).send("Failed to delete list");
      } else {
        res.send(response);
      }
    }
  );
};

export const createLists = (req: Request, res: Response) => {
  listServiceClient.createList(
    req.body as CreateListRequest,
    (err: any, response: CreateListResponse) => {
      if (err) {
        console.log(err);
        res.status(400).send("Failed to create list");
      } else {
        res.send(response);
      }
    }
  );
};

export const updateLists = (req: Request, res: Response) => {
  listServiceClient.updateList(
    req.body as UpdateListRequest,
    (err: any, response: UpdateListResponse) => {
      if (err) {
        console.log(err);
        res.status(400).send("Failed to update list");
      } else {
        res.send(response);
      }
    }
  );
};
