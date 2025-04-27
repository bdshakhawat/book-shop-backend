import { Schema, model } from 'mongoose';
import { IBook } from './Book.interface';

const BookSchema = new Schema<IBook>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
  category: {
    type: String,
    required: true,
    enum: ['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'],
  },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true, default: true },
  isDeleted: { type: Boolean, default: false },
});

const Book = model<IBook>('Book', BookSchema);

export default Book;

// <<<<<<< HEAD
// import mongoose from 'mongoose';
// import { TBook } from './Book.interface';

// const bookSchema = new mongoose.Schema<TBook>(
//   {
//     title: {
//       type: String,
//       required: [true, 'Title is required'],
//     },
//     author: {
//       type: String,
//       required: [true, 'Author is required'],
//     },
//     price: {
//       type: Number,
//       required: [true, 'price is required'],
//     },
//     description: {
//       type: String,
//       required: [true, 'description is required'],
//     },
//     category: {
//       type: String,
//       enum: ['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'],
//       required: [true, 'category is required'],
//     },
//     quantity: {
//       type: Number,
//       required: [true, 'quantity is required'],
//     },
//     inStock: {
//       type: Boolean,
//       default: true,
//     },
//     isDeleted: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   {
//     timestamps: true,
//   },
// );

// bookSchema.pre('find', function (next) {
//   this.find({ isDeleted: { $ne: true } });
//   next();
// });

// export const Book = mongoose.model<TBook>('Book', bookSchema);
// =======
// >>>>>>> 489b2e9b65df89655bb35db603c0584e8e5bfe91
