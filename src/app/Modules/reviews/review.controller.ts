import { StatusCodes } from 'http-status-codes';

import { reviewServices } from './review.service';
import catchAsync from '../../Utils/catchAsync';
import sendResponse from '../../Utils/sendResponse';

const createReview = catchAsync(async (req, res) => {
  const result = await reviewServices.createReview(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'review create successfully',
    data: result,
  });
});
const getAllReview = catchAsync(async (req, res) => {
  const result = await reviewServices.getAllReview();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'All review get successfully',
    data: result,
  });
});
const getReview = catchAsync(async (req, res) => {
  const { bookId } = req.params;
  console.log('controller ',bookId)
  const result = await reviewServices.getReview(bookId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'get single review successfully',
    data: result,
  });
});

export const likeReview = catchAsync(async (req, res) => {
  const { reviewId } = req.params;
  const result = await reviewServices.increaseLike(reviewId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'increass like in review successfully',
    data: result,
  });
});

export const dislikeReview = catchAsync(async (req, res) => {
  const { reviewId } = req.params;
  const result = await reviewServices.decreaseLike(reviewId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'decriess like in review successfully',
    data: result,
  });
});
export const reviewControllers = {
  createReview,
  getAllReview,
  getReview,
  likeReview,
  dislikeReview,
};
