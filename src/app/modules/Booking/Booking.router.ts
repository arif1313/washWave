import express /* { Request, Response } */ from 'express';
import { bookingControlers } from './Booking.controler';
const Router = express.Router();
Router.post('/create-booking', bookingControlers.createBooking);
export const userRouter = Router;
