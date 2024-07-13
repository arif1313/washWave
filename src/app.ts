import express, { Application, Request, Response } from 'express';
import cors from 'cors';
// import { studentRouter } from './app/modules/student/student.routes';
import { userRouter } from './app/modules/User/user.router';
import { slodRouter } from './app/modules/Slot/Slot.router';

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/user', userRouter);
app.use('/slod', slodRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('hellow');
});

export default app;
