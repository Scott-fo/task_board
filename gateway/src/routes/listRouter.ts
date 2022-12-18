import express from "express";
import {
  getLists,
  deleteLists,
  createLists,
  updateLists,
} from "../controllers/list_controller";

const listRouter = express.Router();

/**
 * @swagger
 *
 * /lists:
 *   get:
 *     description: Get all lists
 *     responses:
 *       200:
 *         description: Returns all lists
 */
listRouter.get("/lists", getLists);

/**
 * @swagger
 *
 * /lists/delete:
 *   post:
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            type: object
 *            properties:
 *              id:
 *                type: string
 *                description: The lists id
 *
 *     description: Delete List by Id
 *     responses:
 *       200:
 */
listRouter.post("/lists/delete", deleteLists);

/**
 * @swagger
 *
 * /lists/create:
 *   post:
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                description: The lists name
 *
 *     description: Create a new List
 *     responses:
 *       201:
 */
listRouter.post("/lists/create", createLists);

/**
 * @swagger
 *
 * /lists/update:
 *   post:
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            type: object
 *            properties:
 *              id:
 *                type: string
 *                description: The lists id
 *              name:
 *                type: string
 *                description: The lists name
 *
 *     description: Update a List
 *     responses:
 *       200:
 */
listRouter.post("/lists/update", updateLists);

export { listRouter };
