
## Backend Setup:



# Install dependencies
npm install

# Create a .env file and add the following variables:
PORT=5000
NODE_ENV
PORT
DATABASE_URL
BCRYPT_SALT_ROUNDS
JWT_ACCESS_SECRET
JWT_ACCESS_EXPIRES_IN


# Run the server
npm start:dev




**book-shop-backend** is a powerful backend application tailored for managing products, orders, and revenues in a stationery shop. Built using **TypeScript**, **Express.js**, **MongoDB**, and **Mongoose**, it leverages clean architecture principles, robust validation, and advanced error handling to ensure reliability and maintainability.


<!-- Features -->

### Key Features <a name="key-features"></a>

- **Comprehensive Product and Order Management**
- **Robust Validation and Error Handling**
- **Scalable and Maintainable Architecture**

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🚀 Live Demo <a name="live-demo"></a>

- [Live Demo Link](https://shop-store-jade.vercel.app/))
- [Video Link] (https://drive.google.com/file/d/1Lp0Qekie9LdNtiSoW1bdXG9YZGvsKSos/view?usp=sharing)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Setup

Clone this repository to your desired folder:

### Install

Install this project with:

<ul>
  
  <li>Step 1: Clone the Repository
    bash
    Copy code
    git clone https://github.com/bdshakhawat/shop-store.git
    📦 Step 2: Install Dependencies
    Install all required dependencies:

    bash
    Copy code
    npm install
    🔧 Step 3: Configure Environment Variables
    Create a .env file in the root directory and add the following variables:

    env
    Copy code
    MONGODB_URI=your-mongodb-connection-string
    PORT=5000
    Replace your-mongodb-connection-string with your MongoDB URI.

    ▶️ Step 4: Run the Application
    Start the development server:

    bash
    Copy code
    npm run dev
    The application will be live at http://localhost:5000.

    📡 API Endpoints
    📝 Product Endpoints
    POST /api/products: Add a new product.
    GET /api/products: Retrieve all products.
    GET /api/products/:id: Retrieve details of a specific product.
    PUT /api/products/:id: Update product details.
    DELETE /api/products/:id: Delete a product.
     Order Endpoints
    POST /api/orders: Place an order.
    GET /api/orders/revenue: Retrieve revenue details.
         
     Scripts
    The following scripts are available in the package.json:
    
    npm run dev	Starts the development server.
    npm run build	Compiles TypeScript to JavaScript.
    npm run start	Starts the production server.
    npm run lint	Runs ESLint for linting.
    npm run format	Formats code using Prettier.
</li>
</ul>

### Usage

To run the project, use  ```npm run build and npm run start:dev``` command.



### Run tests

Test case will be added soon.


### Deployment

Create an account in vercel and deploy from github repo


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>


👤 **Author1**

- GitHub: [@bdshakhawat](https://github.com/bdshakhawat)
- Twitter: [@bdshakwat](https://twitter.com/bdshakwat)
- LinkedIn: [shakawat-hossain](https://www.linkedin.com/in/shakawat-hossain)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- **Role-Based Access Control (RBAC)**
- **Advanced Reporting and Analytics**
- **Integration with Payment Gateways**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project please send a welcome message on Twitter and let's have a chat to share coding knowledge.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank my wife, who always inspires me to be a better software engineer. Also thanks to Programming Hero for awesome support.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
