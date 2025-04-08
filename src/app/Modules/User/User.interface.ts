import { Types } from 'mongoose';

export type IUser ={
  id?: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
}
