import catchAsync from '../../Utils/catchAsync';
import sendResponse from '../../Utils/sendResponse';
import httpStatus from 'http-status';
import { AuthServices } from './Auth.services';
import jwt from 'jsonwebtoken';
import Config from '../../Config';

const LoginUser = catchAsync(async (req, res) => {
  const result = await AuthServices.Login(req.body);
  console.log('req', req.body);
  const payload = { id: result?._id, role: result?.role, email: result?.email };
  const accessToken = jwt.sign(payload, Config.jwt_secret as string, {
    expiresIn: '1h',
  });
  res.cookie('accessToken', accessToken, {
    httpOnly: true,
    sameSite: 'none',
    secure: true,
    maxAge: 1209600,
  });
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User logged in successfully',
    data: { accessToken },
  });
});

const updatePassword = catchAsync(async (req, res) => {
  const result = await AuthServices.updatePasswordInDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Password updated successfully',
    data: result,
  });
});

export const AuthControllers = { LoginUser, updatePassword };
