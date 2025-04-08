import httpStatus from "http-status";
import catchAsync from "../../Utils/catchAsync";
import sendResponse from "../../Utils/sendResponse";
import { UserServices } from "./User.services";
import bcrypt from "bcryptjs";

const createUser = catchAsync(async (req, res) => {

  const hashedPassword = bcrypt.hashSync(
    req.body.password,
    Number(10)
  );
  const userDataWithHashedPassword = {
    ...req.body,
    password: hashedPassword,
  };
  const result = await UserServices.createUserIntoDB(
    userDataWithHashedPassword
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    suscess: true,
    message: "User registered successfully",
    data: result,
  });
});

const getAllUser = catchAsync(async (req, res) => {
  const result = await UserServices.getAllUserIntoDb();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    suscess: true,
    message: "User retrieved successfully",
    data: result,
  });
});


export const UserControllers = {
  createUser,
  getAllUser,
};
