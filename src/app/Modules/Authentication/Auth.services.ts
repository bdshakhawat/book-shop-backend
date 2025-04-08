import bcrypt from 'bcryptjs';
import { User } from '../User/User.model';

type loginData = {
  email: string;
  password: string;
};

const Login = async ({ email, password }: loginData) => {

  const userExist = await User.findOne({ email });
  if (!userExist) {
    throw new Error('The user not found')
  }
  
  const isPasswordMatched = bcrypt.compareSync(password, userExist.password);
  if (!isPasswordMatched) {
    throw new Error('Invalid password');
  }
  return userExist;
};

export const AuthServices = { Login };
