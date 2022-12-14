import express from 'express';
import { router } from './src/routes/routes';

const PORT = 8000;

const app = express();
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Gateway (gRPC client) listening externally on port ${PORT}`);
});
