import { ZodError, ZodIssue } from 'zod';
import { TErorSorce, TGenericErrorResponce } from '../interface/error';

const handleZodError = (err: ZodError): TGenericErrorResponce => {
  const errorSource: TErorSorce = err.issues.map((issu: ZodIssue) => {
    return {
      path: issu?.path[issu.path.length - 1],
      message: issu.message,
    };
  });
  const statusCode = 400;
  return {
    statusCode,
    message: 'validation  error ',
    errorSource,
  };
};
export default handleZodError;
