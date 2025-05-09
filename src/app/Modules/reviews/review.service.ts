import { IReview } from './review.interface';
import Review from './review.model';

const createReview = async (payload: IReview) => {
  const result = await Review.create({ ...payload, likeCount: 0 });
  return result;
};
const getAllReview = async () => {
  const requests = await Review.find().populate('bookId').exec();
  return requests;
};
const getReview = async (bookId: string) => {
  const requests = await Review.find( {bookId}).exec();
  return requests;
};
const increaseLike = async (reviewId: string): Promise<number> => {
  const review = await Review.findById(reviewId) 
  if (!review) throw new Error('Review not found');
  (review.likeCount as number) += 1 ;
  await review.save();
  return (review.likeCount as number);
};

 const decreaseLike = async (reviewId: string) => {
  const review = await Review.findById(reviewId);
  if (!review) throw new Error('Review not found');
  review.likeCount = Math.max(0, (review.likeCount as number) - 1);
  await review.save();
  return (review.likeCount as number);
};
export const reviewServices = {
  createReview,
  getAllReview,
  getReview,
  decreaseLike,
  increaseLike
};
