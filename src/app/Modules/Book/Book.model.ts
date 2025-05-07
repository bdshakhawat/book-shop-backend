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
