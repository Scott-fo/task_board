import express from "express";
import { router } from "./src/routes/routes";
import cors from "cors";

const PORT = 8000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Gateway (gRPC client) listening externally on port ${PORT}`);
});
