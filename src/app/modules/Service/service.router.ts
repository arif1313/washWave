import express /* { Request, Response } */ from 'express';
import { serviceControlers } from './sevice.controler';

const Router = express.Router();

Router.post('/', serviceControlers.createService);
Router.get('/:id', serviceControlers.getSingleService);

export const serviceRouter = Router;
