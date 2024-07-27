import express, { Application, Request, Response } from 'express';
import cors from 'cors';
// import { studentRouter } from './app/modules/student/student.routes';
import { userRouter } from './app/modules/User/user.router';
import { slodRouter } from './app/modules/Slot/Slot.router';
import { bookingRouter } from './app/modules/Booking/Booking.router';
import { serviceRouter } from './app/modules/Service/service.router';
import globalErrorHandeler from './app/modules/Middelwares/globalError';
import notFound from './app/modules/Middelwares/notFound';
import router from './app/routes';

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use('/api', router);

app.use(globalErrorHandeler);
app.use(notFound);

app.get('/', (req: Request, res: Response) => {
  res.send('hellow');
});

export default app;
