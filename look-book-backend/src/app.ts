import express from 'express';
import cors from 'cors';
import AuthController from './controllers/auth.controller.js';

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));


app.use(express.json());
app.use("/api/login", AuthController.login);
app.use("/api/register", AuthController.register);

export default app;