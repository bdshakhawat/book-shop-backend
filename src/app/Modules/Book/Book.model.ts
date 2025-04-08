<<<<<<< HEAD
import mongoose from 'mongoose';
import { TBook } from './Book.interface';

const bookSchema = new mongoose.Schema<TBook>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    author: {
      type: String,
      required: [true, 'Author is required'],
    },
    price: {
      type: Number,
      required: [true, 'price is required'],
    },
    description: {
      type: String,
      required: [true, 'description is required'],
    },
    category: {
      type: String,
      enum: ['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'],
      required: [true, 'category is required'],
    },
    quantity: {
      type: Number,
      required: [true, 'quantity is required'],
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

bookSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

export const Book = mongoose.model<TBook>('Book', bookSchema);
=======
>>>>>>> 489b2e9b65df89655bb35db603c0584e8e5bfe91
