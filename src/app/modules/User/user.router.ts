import express /* { Request, Response } */ from 'express';
import { UserControlers } from './user.controler';

const Router = express.Router();

Router.post('/signup', UserControlers.createUser);

export const userRouter = Router;
