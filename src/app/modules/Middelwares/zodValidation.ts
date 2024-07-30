import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';
import { catchErrFunction } from '../../utils/catchAsync';

export const ZodValidationMiddelware = (Schema: AnyZodObject) => {
  return catchErrFunction(
    async (req: Request, res: Response, next: NextFunction) => {
      const coreData = req.body;
      await Schema.parseAsync(coreData);
      next();
    },
  );
};
