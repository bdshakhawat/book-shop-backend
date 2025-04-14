import httpStatus from 'http-status';
import { Types } from 'mongoose';
import { IUser } from '../User/User.interface';
import { User } from '../User/User.model';
import Order from './Order.model';
import Book from '../Book/Book.model';
import {CustomError} from '../../Errors/CustomError';

const createOrder = async (
  user: IUser,
  payload: { products: { productId: Types.ObjectId; quantity: number }[] },
  client_ip: string
  // Add paymentMethodId: string
  // paymentMethodId: string
) => {
  // Validate products array
  if (!payload?.products?.length) {
    throw new CustomError(
      httpStatus.BAD_REQUEST,
      'Products array cannot be empty'
    );
  }

  const products = payload.products;
  let totalPrice = 0;

  // Process each product
  const productDetails = await Promise.all(
    products.map(async (item) => {
      const product = await Book.findById(item.productId);
      if (!product) {
        throw new CustomError(
          httpStatus.NOT_FOUND,
          `Product with ID ${item.productId} not found`
        );
      }
      if (!product.inStock || product.quantity < item.quantity) {
       throw new CustomError(
             httpStatus.BAD_REQUEST,
           `Insufficient stock for product ${product.title}`
      );
    }

      if (product.inStock && product.quantity < item.quantity) {
        throw new CustomError(
          httpStatus.BAD_REQUEST,
          `Insufficient stock for product ${product.title}`
        );
      }

      const subtotal = product.price * item.quantity;
      totalPrice += subtotal;
      
      return {
        productId: item.productId,
        quantity: item.quantity,
        price: product.price
      };
    })
  );

  // Create order
  const order = await Order.create({
    user: user.id,
    products: productDetails,
    totalPrice,
    client_ip,
    status: 'pending'
  });

  // Update stock levels
  await Promise.all(
    products.map(async (item) => {
      await Book.findByIdAndUpdate(item.productId, {
        $inc: { stock: -item.quantity }
      });
    })
  );

  return order;
};

const getOrders = async () => {
  return await Order.find()
    .populate('user')
    .populate('products.productId');
};

// const verifyPayment = async (order_id: string) => {
//   const verifiedPayment = await orderUtils.verifyPaymentAsync(order_id);

//   if (verifiedPayment.length) {
//     await Order.findOneAndUpdate(
//       {
//         'transaction.id': order_id,
//       },
//       {
//         'transaction.bank_status': verifiedPayment[0].bank_status,
//         'transaction.sp_code': verifiedPayment[0].sp_code,
//         'transaction.sp_message': verifiedPayment[0].sp_message,
//         'transaction.transactionStatus': verifiedPayment[0].transaction_status,
//         'transaction.method': verifiedPayment[0].method,
//         'transaction.date_time': verifiedPayment[0].date_time,
//         status:
//           verifiedPayment[0].bank_status == 'Success'
//             ? 'Paid'
//             : verifiedPayment[0].bank_status == 'Failed'
//               ? 'Pending'
//               : verifiedPayment[0].bank_status == 'Cancel'
//                 ? 'Cancelled'
//                 : '',
//       },
//     );
//   }

//   return verifiedPayment;
// };


const changeOrderStatus = async (id: string, status: string) => {
  if (!Types.ObjectId.isValid(id)) {
    throw new CustomError(httpStatus.BAD_REQUEST, 'Invalid order ID');
  }

  const result = await Order.findByIdAndUpdate(
    id, 
    { status }, 
    { new: true }
  );

  if (!result) {
    throw new CustomError(httpStatus.NOT_FOUND, 'Order not found');
  }

  return result;
};

const getCustomerOrdersFromDb = async (email: string) => {
  const user = await User.findOne({ email }).select('_id');
  if (!user) {
    throw new CustomError(httpStatus.NOT_FOUND, 'User not found');
  }

  return await Order.find({ user: user._id })
    .populate('products.productId').populate('user');
};

export const orderService = {
  createOrder,
  getOrders,
  
  changeOrderStatus,
  getCustomerOrdersFromDb
};





  


