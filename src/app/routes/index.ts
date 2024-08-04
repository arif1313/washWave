import { Router } from 'express';
import { userRouter } from '../modules/User/user.router';
import { serviceRouter } from '../modules/Service/service.router';
import { bookingRouter } from '../modules/Booking/Booking.router';
import { AuthRouter } from '../modules/Auth/Auth.rout';
import { slodRouter } from '../modules/Slot/Slot.router';

const router = Router();
const ModuleRouter = [
  {
    path: '/auth',
    route: userRouter,
  },
  {
    path: '/slots',
    route: slodRouter,
  },

  {
    path: '/bookings',
    route: bookingRouter.Router,
  },
  {
    path: '/my-bookings',
    route: bookingRouter.myBookingRouter,
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
