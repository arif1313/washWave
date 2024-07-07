import express, { Application, Request, Response } from 'express';
import cors from 'cors';
// import { studentRouter } from './app/modules/student/student.routes';
import { userRouter } from './app/modules/User/user.router';
import { studentRouter } from './app/modules/student/student.routes';
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/student', userRouter);
app.use('/api/v1/student', studentRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('hellow');
});

export default app;
