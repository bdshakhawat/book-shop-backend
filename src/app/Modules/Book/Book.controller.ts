import sendResponse from '../../Utils/sendResponse';
import catchAsync from '../../Utils/catchAsync';
import httpStatus from 'http-status';
import { BookServices } from './Book.services';

const CreateBook = catchAsync(async (req, res) => {
  const result = await BookServices.CreateBookInDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book created successfully',
    data: result,
  });
});
const RetriveBooks = catchAsync(async (req, res) => {
  const queries = req.query;
  console.log(queries);
  const result = await BookServices.RetriveAllBookFromDB(queries);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book retrieved successfully',
    data: result,
  });
});
const RetriveSingleBook = catchAsync(async (req, res) => {
  const result = await BookServices.RetriveBookFromDB(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book retrieved successfully',
    data: result,
  });
});

const NumberOfCategory = catchAsync(async (req, res) => {
  const result = await BookServices.NumberOfCategory();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book retrieved successfully',
    data: result,
  });
});

const DeleteBook = catchAsync(async (req, res) => {
  const result = await BookServices.DeleteBookFromDB(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book Deleted successfully',
    data: result,
  });
});
const UpdateBook = catchAsync(async (req, res) => {
  const result = await BookServices.UpdateBookDataInDB(req.params.id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book Updated successfully',
    data: result,
  });
});

const GetAuthors = catchAsync(async (req, res) => {
  const result = await BookServices.GetAuthorsFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book retrieved successfully',
    data: result,
  });
});

export const BookController = {
  CreateBook,
  RetriveBooks,
  RetriveSingleBook,
  NumberOfCategory,
  DeleteBook,
  UpdateBook,
  GetAuthors,
};









// <<<<<<< HEAD
// import { Request, Response } from 'express';
// import { BookServices } from './Book.services';
// import sendResponse from '../../Utils/sendResponse';
// import httpStatus from 'http-status';
// import catchAsync from '../../Utils/catchAsync';

// const createBook = catchAsync(async (req: Request, res: Response) => {
//   const payload = req.body;
//   const result = await BookServices.createBook(payload);
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     message: 'Book created successfully',
//     suscess: true,
//     data: result,
//   });
// });

// const getAllBooks = catchAsync(async (req: Request, res: Response) => {
//   const result = await BookServices.getAllBooks();
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     message: 'Books retrieved successfully',
//     suscess: true,
//     data: result,
//   });
// });

// const getSingleBook = catchAsync(async (req: Request, res: Response) => {
//   const { productId } = req.params;
//   const result = await BookServices.getSingleBook(productId);
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     message: 'Book retrieved successfully',
//     suscess: true,
//     data: result,
//   });
// });

// const updateBook = catchAsync(async (req: Request, res: Response) => {
//   const { productId } = req.params;
//   const payload = req.body;
//   const result = await BookServices.updateBook(payload, productId);
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     message: 'Books updated successfully',
//     suscess: true,
//     data: result,
//   });
// });

// const deleteBook = catchAsync(async (req: Request, res: Response) => {
//   const { productId } = req.params;
//   const result = await BookServices.deleteBook(productId);
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     message: 'Books deleted successfully',
//     suscess: true,
//     data: result,
//   });
// });

// export const BookControllers = {
//   createBook,
//   getAllBooks,
//   getSingleBook,
//   updateBook,
//   deleteBook,
// };
// =======

// >>>>>>> 489b2e9b65df89655bb35db603c0584e8e5bfe91
