import httpStatus from 'http-status';
import catchAsync from '../../Utils/catchAsync';
import sendResponse from '../../Utils/sendResponse';
import { UserServices } from './User.services';
import bcrypt from 'bcryptjs';
import Config from '../../Config';



const createNewUser = catchAsync(async (req, res) => {
  const hashedPassword = bcrypt.hashSync(
    req.body.password,
    Number(Config.bcrypt_salt_round),
  );
  
  const userDataWithHashedPassword = {
    ...req.body,
    password: hashedPassword,
  };
  
  const result = await UserServices.RegisterUserIntoDb(
    userDataWithHashedPassword,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User registered successfully',
    data: result,
  });
});

const RetriveUsers = catchAsync(async (req, res) => {
  const result = await UserServices.RetriveAllUserFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User retrieved successfully',
    data: result,
  });
});

const deactivateUser = catchAsync(async (req, res) => {
  const result = await UserServices.deactivateUser(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User deactivated successfully',
    data: result,
  });
});
const activateUser = catchAsync(async (req, res) => {
  const result = await UserServices.activateUser(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User activated successfully',
    data: result,
  });
});



export const UserControllers = {
  createNewUser,
  RetriveUsers,
  deactivateUser,
  activateUser,
  
};
