import express /* { Request, Response } */ from 'express';
import { slodControlers } from './Slot.control';

const Router = express.Router();

Router.post('/create-slod', slodControlers.createSlod);

export const slodRouter = Router;
