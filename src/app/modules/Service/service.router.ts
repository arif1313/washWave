import express /* { Request, Response } */ from 'express';
import { serviceControlers } from './sevice.controler';

const Router = express.Router();

Router.post('/', serviceControlers.createService);
Router.get('/:id', serviceControlers.getService);
Router.get('/', serviceControlers.getService);
Router.put('/:id', serviceControlers.updateService);

export const serviceRouter = Router;
