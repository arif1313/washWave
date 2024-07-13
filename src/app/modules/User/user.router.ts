import express /* { Request, Response } */ from 'express';
import { UserControlers } from './user.controler';

const Router = express.Router();

Router.post('/create-user', UserControlers.createUser);

export const userRouter = Router;
