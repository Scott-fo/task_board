import express from "express";
import { NotifySubscribers } from "../controllers/notification_controller";
import {
  createSubscription,
  getSubscriptions,
} from "../controllers/subscription_controller";
import {
  getTasks,
  createTask,
  deleteTasks,
  updateTask,
  moveTasks,
} from "../controllers/task_controller";

import {
  getLists,
  deleteLists,
  createLists,
  updateLists,
} from "../controllers/list_controller";

const router = express.Router();

router.get("/subscriptions", getSubscriptions);
router.post("/subscriptions/create", createSubscription);
router.post("/subscriptions/notification", NotifySubscribers);

router.get("/tasks", getTasks);
router.post("/tasks/create", createTask);
router.post("/tasks/delete", deleteTasks);
router.post("/tasks/update", updateTask);
router.post("/tasks/move", moveTasks);

router.get("/lists", getLists);
router.post("/lists/delete", deleteLists);
router.post("/lists/create", createLists);
router.post("/lists/update", updateLists);

export { router };
