import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { taskRouter } from "./tasksRouter";
import { listRouter } from "./listRouter";
import { subscriptionRouter } from "./subscriptionRouter";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Task Board",
      version: "1.0.0",
    },
  },
  apis: ["./src/routes/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

const router = express.Router();

router.use("/api-docs", swaggerUi.serve);
router.get("/api-docs", swaggerUi.setup(swaggerSpec));

router.use(taskRouter);
router.use(listRouter);
router.use(subscriptionRouter);

export { router };
