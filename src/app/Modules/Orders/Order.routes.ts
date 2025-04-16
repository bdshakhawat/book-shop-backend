import { Router } from 'express';
import authGurd from '../../middlewares/authGurd';
import { orderController } from './Order.controller';
const route = Router();
<<<<<<< HEAD
// route.patch('/verify-order', authGurd('admin'), orderController.verifyPayment);
=======
route.patch('/verify-order', authGurd('admin'));
>>>>>>> e5b96d816497d14b4bc907cb4efdbdd3912ad23c
route.post(
  '/create-order',
  authGurd('user', 'admin'),
  orderController.createOrder,
);
route.patch(
  '/change-order-status/:id',
  authGurd('admin'),
  orderController.changeOrderStatus,
);
route.get('/get-orders', authGurd('admin'), orderController.getOrders);
route.get(
  '/get-customer-orders',
  authGurd('user'),
  orderController.getCustomerOrder,
);
export const OrderRoutes = route;
