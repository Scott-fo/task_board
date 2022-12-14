import express from "express";
import { NotifySubscribers } from "../controllers/notification_controller";
import {
  createSubscription,
  getSubscriptions,
} from "../controllers/subscription_controller";
const router = express.Router();

router.get("/subscriptions", getSubscriptions);
router.post("/subscriptions/create", createSubscription);

router.post("/subscriptions/notification", NotifySubscribers);

export { router };
