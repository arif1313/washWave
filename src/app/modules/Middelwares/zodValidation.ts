import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

export const ZodValidationMiddelware = (Schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const coreData = req.body;
      await Schema.parseAsync(coreData);
      next();
    } catch (err) {
      next(err);
    }
  };
};
