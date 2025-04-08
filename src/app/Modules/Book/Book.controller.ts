import { Request, Response } from 'express';
import { BookServices } from './Book.services';
import sendResponse from '../../Utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../Utils/catchAsync';

const createBook = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await BookServices.createBook(payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Book created successfully',
    success: true,
    data: result,
  });
});

const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  const query = req.query;
  const result = await BookServices.getAllBooks(query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Books retrieved successfully',
    success: true,
    data: result,
  });
});

const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const { productId } = req.params;
  const result = await BookServices.getSingleBook(productId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Book retrieved successfully',
    success: true,
    data: result,
  });
});

const updateBook = catchAsync(async (req: Request, res: Response) => {
  const { productId } = req.params;
  const payload = req.body;
  const result = await BookServices.updateBook(payload, productId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Books updated successfully',
    success: true,
    data: result,
  });
});

const deleteBook = catchAsync(async (req: Request, res: Response) => {
  const { productId } = req.params;
  const result = await BookServices.deleteBook(productId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Books deleted successfully',
    success: true,
    data: result,
  });
});

export const BookControllers = {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};

