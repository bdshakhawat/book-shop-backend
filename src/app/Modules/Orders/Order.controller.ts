import catchAsync from '../../Utils/catchAsync';
import sendResponse from '../../Utils/sendResponse';
import httpStatus from 'http-status';
import { orderService } from './Order.services';
import { IUser } from '../User/User.interface';

const createOrder = catchAsync(async (req, res) => {
  const user = req.user;
  // console.log('inside create', req.body, req.user);
  const order = await orderService.createOrder(
    user as IUser,
    req.body,
    req.ip!,
  );
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Order placed successfully',
    data: order,
  });
});

const getOrders = catchAsync(async (req, res) => {
  const order = await orderService.getOrders();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Order retrieved successfully',
    data: order,
  });
});

// const verifyPayment = catchAsync(async (req, res) => {
//   const order = await orderService.verifyPayment(req.query.order_id as string);

//   sendResponse(res, {
//     success: true,
//     statusCode: httpStatus.CREATED,
//     message: 'Order verified successfully',
//     data: order,
//   });
// });

const changeOrderStatus = catchAsync(async (req, res) => {
  const order = await orderService.changeOrderStatus(
    req.params.id,
    req.query.status as string,
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Order status changed successfully',
    data: order,
  });
});

const getCustomerOrder = catchAsync(async (req, res) => {
  const { email } = req.user as IUser;
  const order = await orderService.getCustomerOrdersFromDb(email);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Order retrieved successfully',
    data: order,
  });
});

const deleteCustomerOrder = catchAsync(async (req, res) => {
  const { email } = req.user as IUser;
  const { orderId } = req.params;

  await orderService.deleteCustomerOrderFromDb(orderId, email);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Order deleted successfully',
    data: null,
  });
});

export const orderController = {
  createOrder,
  // verifyPayment,
  getOrders,
  changeOrderStatus,
  getCustomerOrder,
  deleteCustomerOrder,
};
