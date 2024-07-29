/* eslint-disable @typescript-eslint/no-explicit-any */
import { TErorSorce, TGenericErrorResponce } from '../interface/error';

const handleDuplicateError = (err: any): TGenericErrorResponce => {
  const match = err.message.match(/"([^"]*)"/);
  const extractedSmg = match && match[1];
  const errorSource: TErorSorce = [
    {
      path: '',
      message: `${extractedSmg} is already exist`,
    },
  ];
  const statusCode = 400;
  return {
    statusCode,
    message: ' Cast error ',
    errorSource,
  };
};
export default handleDuplicateError;
