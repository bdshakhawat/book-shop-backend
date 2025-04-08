import { Response } from 'express';

type ResponseData<T> = {
  statusCode: number;
  message: string;
  suscess: boolean;
  data?: T;
};

const sendResponse = <T>(res: Response, data: ResponseData<T>) => {
  res.status(data?.statusCode).json({
    status: 'success',
    message: data?.message,
    success: data?.suscess,
    data: data?.data || null,
  });
};

export default sendResponse;
