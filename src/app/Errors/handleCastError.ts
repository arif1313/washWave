import mongoose from 'mongoose';
import { TErorSorce, TGenericErrorResponce } from '../interface/error';

const handleCastError = (
  err: mongoose.Error.CastError,
): TGenericErrorResponce => {
  const errorSource: TErorSorce = [
    {
      path: err?.path,
      message: err?.message,
    },
  ];
  const statusCode = 400;
  return {
    statusCode,
    message: ' Cast error ',
    errorSource,
  };
};
export default handleCastError;
