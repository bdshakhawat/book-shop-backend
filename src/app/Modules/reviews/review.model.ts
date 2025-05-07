import { model, Schema } from 'mongoose';
const ReviewSchema = new Schema(
  {
    bookId: { type: String, ref: 'Book', required: true },
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    reviewMessage: { type: String, required: true },
    likeCount: { type: Number },
  },
  {
    timestamps: true,
  },
);

const Review = model('reviews', ReviewSchema);
export default Review;
