import { Response } from 'express';
type Tresponce<D> = {
  statusCode: number;
  success: true;
  token?: string;
  message?: string;
  data: D;
};

const ResponceFunction = <D>(res: Response, data: Tresponce<D>) => {
  res.status(data?.statusCode).json({
    success: data.success,
    statusCode: data.statusCode,
    message: data.message,
    data: data.data,
  });
};
export default ResponceFunction;
