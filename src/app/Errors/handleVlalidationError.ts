import mongoose from 'mongoose';
import { TErorSorce, TGenericErrorResponce } from '../interface/error';

const handleValidationError = (
  err: mongoose.Error.ValidationError,
): TGenericErrorResponce => {
  const errorSource: TErorSorce = Object.values(err.errors).map(
    (val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: val?.path,
        message: val?.message,
      };
    },
  );
  const statusCode = 400;

  return {
    statusCode,
    message: 'validation  error ',
    errorSource,
  };
};
export default handleValidationError;
