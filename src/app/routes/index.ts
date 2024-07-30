import { Router } from 'express';
import { userRouter } from '../modules/User/user.router';
import { serviceRouter } from '../modules/Service/service.router';
import { bookingRouter } from '../modules/Booking/Booking.router';
import { slodRouter } from '../modules/Slot/Slot.router';
import { AuthRouter } from '../modules/Auth/Auth.rout';

const router = Router();
const ModuleRouter = [
  {
    path: '/auth',
    route: userRouter,
  },
  {
    path: '/slod',
    route: slodRouter,
  },
  {
    path: '/booking',
    route: bookingRouter,
  },
  {
    path: '/services',
    route: serviceRouter,
  },
  {
    path: '/auth',
    route: AuthRouter,
  },
];
ModuleRouter.forEach((routes) => router.use(routes.path, routes.route));

export default router;
