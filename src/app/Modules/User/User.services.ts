import { User } from './User.model';

type TRegister = {
  name:string,
  email:string,
  password:string
}

const createUserIntoDB = async ({ name, email, password }: TRegister) => {

  const result = await User.create({
    email,
    password,
    name,
  });
  return result;
};

const getAllUserIntoDb = async () => {
  const result = await User.find({});
  return result;
};



export const UserServices = {
  createUserIntoDB,
  getAllUserIntoDb,
};
