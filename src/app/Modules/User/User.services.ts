
import { User } from './User.model';


type TRegister = {
  name:string,
  email:string,
  password:string
}
const RegisterUserIntoDb = async ({ name, email, password }: TRegister) => {
  // console.log('coming');
  // console.log('hashed password', password);
  const result = await User.create({
    email,
    password,
    name,
  });
  return result;
};

const RetriveAllUserFromDB = async () => {
  const result = await User.find({});
  return result;
};

const activateUser = async (id: string) => {
  const result = await User.findByIdAndUpdate(id, { activity: 'activated' });
  return result;
};

const deactivateUser = async (id: string) => {
  console.log('insite deactiveUSER',id)
  const result = await User.findByIdAndUpdate(id, { activity: 'deactivated' });
  return result;
};

export const UserServices = {
  RegisterUserIntoDb,
  RetriveAllUserFromDB,
  activateUser,
  deactivateUser,
};
