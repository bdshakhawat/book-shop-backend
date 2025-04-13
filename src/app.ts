import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application } from 'express';
import router from './app/Routes';
import { globalErrorHandler } from './app/middlewares/globalErrorHandler';
const app: Application = express();
app.use(express.json());
app.use(cookieParser());
// app.use(cors());

// CORS Configuration
const corsOptions = {
  origin: ['http://localhost:5173'], // Frontend origin
  credentials: true, // Allow cookies
};

// Apply CORS Middleware
app.use(cors(corsOptions));
app.use('/api/v1', router);

app.get('/', (req, res) => {
  res.send('Welcome to Book Shop');
});

app.use(globalErrorHandler);

// eslint-disable-next-line @typescript-eslint/no-require-imports, no-undef
const stripe = require('stripe')(
  'sk_test_51NFeKsHXxHHqqBSElvVcqxhbvzhtIOPVI7dQA6ziUAMcb9bh1egOXa0dCOJa46CI7bw66V5UXQh0p2fLg0qIQCqE00TCH7ucTn',
);

app.post('/create-checkout-session', async (req, res) => {
  console.log('test');
  try {
    const { product, user } = req.body;

    console.log('product', product);
    console.log('user', user);
    const lineItems = [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: product.title,
          },
          unit_amount: Math.round(product.price * 100),
        },
        quantity: 1, // Ensure quantity is included
      },
    ];

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `http://localhost:5173/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: 'http://localhost:5173/failed',
      metadata: {
        email: user.email,
        product: product._id,
        quantity: 1,
        totalPrice: Math.round(product.price * 100),
      },
    });

    // const paymentConfirmation = await stripe.checkout.sessions.retrieve(
    //   session.id,
    // );

    console.log('paymentConfirmation', session);
    // const paymentIntent = await stripe.paymentIntents.retrieve(session.id);

    // console.log(`Payment status: ${paymentIntent.status}`);

    res.json({ id: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Failed to create session' });
  }
});

app.get('/checkout-session/:sessionId', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(
      req.params.sessionId,
    );

    console.log('Payment session details:', session);

    res.json({
      paymentStatus: session.payment_status,
      userEmail: session.metadata.email,
      productId: session.metadata.product,
      productQuantity: session.metadata.quantity,
      productPrice: session.metadata.totalPrice,
    });
  } catch (error) {
    console.error('Error retrieving checkout session:', error);
    res.status(500).json({ error: 'Failed to retrieve session details' });
  }
});
export const App = app;
