import QueryBuilder from '../../Builder/QueryBuilder';
import { TBook } from './Book.interface';
import { Book } from './Book.model';

const createBook = async (payload: TBook) => {
  const result = await Book.create(payload);
  return result;
};

const getAllBooks = async (query: Record<string, unknown>) => {
  const bookQuery = new QueryBuilder(Book.find(), query)
      .search(['title', 'author', 'category'])
      .filter()
      .sort()
      .paginate()
      .select();

  const result = await bookQuery.modelQuery;
  return result
}

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
}
