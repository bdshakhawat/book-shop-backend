import catchAsync from '../../Utils/catchAsync';
import sendResponse from '../../Utils/sendResponse';
import httpStatus from 'http-status';
import { AuthServices } from './Auth.services';
import jwt from 'jsonwebtoken';


const LoginUser = catchAsync(async (req, res) => {
  const result = await AuthServices.Login(req.body);

  const payload = { id: result?._id, role: result?.role, email: result?.email };
  const accessToken = jwt.sign(payload, 'dfksdflkdfj', {
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
    suscess: true,
    message: 'User logged in successfully',
    data: { accessToken },
  });
});



export const AuthControllers = { LoginUser };
