import express from 'express';
import { slodControlers } from './Slot.control';

const Router = express.Router();

// Router.post(
//   '/slots',
//   ZodValidationMiddelware(ZodSoldValidations.TSlodValidationSchema),
//   slodControlers.createSlod,
// );
Router.get('/availability', slodControlers.getAvailableSlot);

export const slodRouter = Router;
