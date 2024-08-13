import express, { Application, Request, Response } from 'express';
import cors from 'cors';
// import { studentRouter } from './app/modules/student/student.routes';

import globalErrorHandeler from './app/modules/Middelwares/globalError';
import notFound from './app/modules/Middelwares/notFound';
import router from './app/routes';

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('hello wellcome washWave project');
});
app.use(globalErrorHandeler);
app.use(notFound);

export default app;
