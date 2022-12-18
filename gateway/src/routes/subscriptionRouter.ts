import express from "express";
import { NotifySubscribers } from "../controllers/notification_controller";
import {
  createSubscription,
  getSubscriptions,
} from "../controllers/subscription_controller";

const subscriptionRouter = express.Router();

/**
 * @swagger
 *
 * /subscriptions:
 *   get:
 *     description: Get all subscriptions
 *     responses:
 *       200:
 *         description: Returns all subscriptions
 */
subscriptionRouter.get("/subscriptions", getSubscriptions);

/**
 * @swagger
 *
 * /subscriptions/create:
 *   post:
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                description: The users email
 *              firstName:
 *                type: string
 *                description: The users first name
 *
 *     description: Delete List by Id
 *     responses:
 *       201:
 */
subscriptionRouter.post("/subscriptions/create", createSubscription);

/**
 * @swagger
 *
 * /subscriptions/notification:
 *   post:
 *     description: Triggers a notification to all subscribed users
 *     responses:
 *       200:
 *         description: Logs output on in the email service
 */
subscriptionRouter.post("/subscriptions/notification", NotifySubscribers);

export { subscriptionRouter };
