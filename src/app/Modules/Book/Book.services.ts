import { TBook } from './Book.interface';
import { Book } from './Book.model';

const createBook = async (payload: TBook) => {
  const result = await Book.create(payload);
  return result;
};

const getAllBooks = async () => {
  const result = await Book.find();
  return result;
};

const getSingleBook = async (id: string) => {
  const result = await Book.findById(id);
  return result;
};

const updateBook = async (payload: Partial<TBook>, id: string) => {
  const result = await Book.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

const deleteBook = async (id: string) => {
  const result = await Book.findByIdAndDelete(id);
  return result;
};

export const BookServices = {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};
