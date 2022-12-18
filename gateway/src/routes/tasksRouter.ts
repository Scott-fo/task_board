import express from "express";
import {
  getTasks,
  getTasksByList,
  createTask,
  deleteTasks,
  updateTask,
  moveTasks,
} from "../controllers/task_controller";

const taskRouter = express.Router();

/**
 * @swagger
 *
 * /tasks:
 *   get:
 *     description: Get all tasks
 *     responses:
 *       200:
 *         description: Returns all tasks
 */
taskRouter.get("/tasks", getTasks);

/**
 * @swagger
 *
 * /tasks/{id}:
 *   get:
 *     description: Get task by id
 *     parameters:
 *       - name: id
 *         description: The tasks id
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Returns task selected by id
 */
taskRouter.get("/tasks/:id", getTasksByList);

/**
 * @swagger
 *
 * /tasks/create:
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
 *                description: The tasks name
 *              description:
 *                type: string
 *                description: The tasks description
 *              listId:
 *                type: string
 *                description: The id of the list the task belongs to
 *              completed:
 *                type: boolean
 *                description: The tasks completion status
 *              unixTime:
 *                type: string
 *                description: The tasks deadline as a unix timestamp parsed as string
 *
 *     description: Create new task
 *     responses:
 *       201:
 */
taskRouter.post("/tasks/create", createTask);

/**
 * @swagger
 *
 * /tasks/delete:
 *   post:
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            type: object
 *            properties:
 *              tasks:
 *                type: array
 *                items:
 *                  type: string
 *                  description: The tasks id
 *
 *     description: Delete tasks by Id
 *     responses:
 *       200:
 */
taskRouter.post("/tasks/delete", deleteTasks);

/**
 * @swagger
 *
 * /tasks/update:
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
 *                description: The tasks id
 *              name:
 *                type: string
 *                description: The tasks name
 *              description:
 *                type: string
 *                description: The tasks description
 *              listId:
 *                type: string
 *                description: The id of the list the task belongs to
 *              completed:
 *                type: boolean
 *                description: The tasks completion status
 *              unixTime:
 *                type: string
 *                description: The tasks deadline as a unix timestamp parsed as string
 *
 *     description: Update task
 *     responses:
 *       200:
 */
taskRouter.post("/tasks/update", updateTask);

/**
 * @swagger
 *
 * /tasks/move:
 *   post:
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            type: object
 *            properties:
 *              listId:
 *                type: string
 *                description: the target lists id
 *              tasks:
 *                type: array
 *                items:
 *                  type: string
 *                  description: The tasks id
 *
 *     description: Delete tasks by Id
 *     responses:
 *       200:
 */
taskRouter.post("/tasks/move", moveTasks);

export { taskRouter };
