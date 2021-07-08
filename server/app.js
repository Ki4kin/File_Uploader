import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import cors from 'cors';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import loadRouter from './routes/loadRouter.js';
import filesInfoRouter from './routes/filesInfoRouter.js';
import deleteFileRouter from './routes/deleteFileRouter.js';
import editFileRouter from './routes/editFileRouter.js';
import authRouter from './routes/authRouter.js';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

mongoose.connect('mongodb://localhost:27017/LOADER', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/load', loadRouter);
app.use('/filesInfo', filesInfoRouter);
app.use('/deleteFile', deleteFileRouter);
app.use('/edit', editFileRouter);
app.use('/user', authRouter);

export default app;
