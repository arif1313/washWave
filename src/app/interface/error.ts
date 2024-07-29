export type TErorSorce = {
  path: string | number;
  message: string;
}[];
export type TGenericErrorResponce = {
  statusCode: number;
  message: string;
  errorSource: TErorSorce;
};
