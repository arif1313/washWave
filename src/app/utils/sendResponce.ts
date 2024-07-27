import { Response } from 'express';
type Tresponce<D> = {
  statusCode: number;
  success: true;
  message?: string;
  data: D;
};

const ResponceFunction = <D>(res: Response, data: Tresponce<D>) => {
  res.status(data?.statusCode).json({
    success: data.success,
    message: data.message,
    data: data.data,
  });
};
export default ResponceFunction;
