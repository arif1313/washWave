import express /* { Request, Response } */ from 'express';
import { serviceControlers } from './sevice.controler';

const Router = express.Router();

Router.post('/create-service', serviceControlers.createService);

export const serviceRouter = Router;
