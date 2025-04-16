import bcrypt from 'bcryptjs';
import { User } from '../User/User.model';
import Config from '../../Config';

type loginData = {
  email: string;
  password: string;
};

const Login = async ({ email, password }: loginData) => {
  const userExist = await User.findOne({ email });
  if (!userExist) {
    throw new Error('The user not found');
  }

  const isPasswordMatched = bcrypt.compareSync(password, userExist.password);
  if (!isPasswordMatched) {
    throw new Error('Invalid password');
  }
  return userExist;
};

const updatePasswordInDB = async (payload: {
  email: string;
  oldPassword: string;
  newPassword: string;
}) => {
  const { email, oldPassword, newPassword } = payload;
  console.log('from line 38', email, oldPassword, newPassword);

  // Checking user exists in db or not
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('User not Exit');
  }

  // Checking old password is correct or not
  const isPasswordMatched = bcrypt.compareSync(oldPassword, user.password);
  console.log('from line 43', isPasswordMatched);
  if (!isPasswordMatched) {
    throw new Error( 'Invalid password');
  }
  const hashedNewPassword = bcrypt.hashSync(
    newPassword,
    Number(Config.bcrypt_salt_round),
  );
  user.password = hashedNewPassword;
  const result = await user.save();
  return result;
};
export const AuthServices = { Login, updatePasswordInDB };
