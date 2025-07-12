
# E-Commerce Store - CodeAlpha Task

A comprehensive full-stack e-commerce web application built with Node.js, Express.js, MongoDB, and EJS templating.

## 🚀 Features

### ✅ Core Features (Task Requirements)
- **Product Listings**: Browse all available products with detailed information
- **Shopping Cart**: Add, remove, and update items in your cart
- **Product Details Page**: View comprehensive product information
- **Order Processing**: Complete checkout with shipping address
- **User Registration/Login**: Secure authentication system
- **Database Storage**: Products, users, and orders stored in MongoDB

### ✨ Additional Features
- **Session Management**: Secure user sessions with JWT tokens
- **Responsive Design**: Mobile-friendly interface
- **Stock Management**: Real-time inventory tracking
- **Order Confirmation**: Detailed order summaries
- **Error Handling**: Comprehensive error management
- **Security**: Password hashing, secure cookies, input validation

## 🛠️ Technology Stack

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **JWT**: JSON Web Token for authentication
- **bcryptjs**: Password hashing
- **express-session**: Session management

### Frontend
- **EJS**: Templating engine for server-side rendering
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox/grid
- **JavaScript**: Client-side interactivity
- **Google Fonts**: Inter font family

## 📁 Project Structure

```
CodeAlpha_EcommerceStore/
├── backend/
│   ├── config/
│   │   └── db.js                 # Database connection
│   ├── controllers/
│   │   ├── authController.js     # Authentication logic
│   │   ├── cartController.js     # Shopping cart logic
│   │   ├── orderController.js    # Order processing
│   │   └── productController.js  # Product management
│   ├── middleware/
│   │   └── authMiddleware.js     # JWT authentication middleware
│   ├── models/
│   │   ├── User.js               # User schema
│   │   ├── Product.js            # Product schema
│   │   └── Order.js              # Order schema
│   ├── routes/
│   │   ├── auth.js               # Authentication routes
│   │   ├── cart.js               # Cart routes
│   │   ├── orders.js             # Order routes
│   │   └── products.js           # Product routes
│   ├── seeder.js                 # Database seeding script
│   └── server.js                 # Main server file
├── frontend/
│   ├── scripts/
│   │   └── main.js               # Client-side JavaScript
│   ├── styles/
│   │   └── style.css             # Main stylesheet
│   └── views/
│       ├── auth/
│       │   ├── login.ejs         # Login form
│       │   └── register.ejs      # Registration form
│       ├── cart/
│       │   └── cart.ejs          # Shopping cart page
│       ├── error/
│       │   ├── 404.ejs           # 404 error page
│       │   └── 500.ejs           # 500 error page
│       ├── layouts/
│       │   └── main.ejs          # Main layout template
│       ├── order/
│       │   └── checkout.ejs      # Order confirmation
│       ├── partials/
│       │   └── header.ejs        # Header component
│       └── products/
│           ├── product-list.ejs  # Product listing
│           └── product-detail.ejs # Product details
├── .env                          # Environment variables
├── package.json                  # Project dependencies
└── README.md                     # This file
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account (or local MongoDB)

### Step 1: Clone the Repository
```bash
git clone <repository-url>
cd CodeAlpha_EcommerceStore
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Environment Configuration
Create a `.env` file in the root directory with:
```env
NODE_ENV=development
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_LIFETIME=1h
```

### Step 4: Seed the Database (Optional)
```bash
# Import sample data
node backend/seeder.js

# To delete all data
node backend/seeder.js -d
```

### Step 5: Run the Application
```bash
# Development mode with auto-restart
npm run dev

# Production mode
npm start
```

Visit `http://localhost:3000` to access the application.

## 🔑 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `development` or `production` |
| `PORT` | Server port | `3000` |
| `MONGO_URI` | MongoDB connection string | `mongodb://localhost:27017/ecommerce` |
| `JWT_SECRET` | Secret key for JWT tokens | `your-secret-key` |
| `JWT_LIFETIME` | JWT token expiration | `1h` |

## 📚 API Endpoints

### Authentication
- `GET /auth/login` - Login page
- `POST /auth/login` - User login
- `GET /auth/register` - Registration page
- `POST /auth/register` - User registration
- `GET /auth/logout` - User logout

### Products
- `GET /` - Product listing (homepage)
- `GET /products` - Product listing
- `GET /products/:id` - Product details

### Cart
- `GET /cart` - View cart
- `POST /cart/add` - Add item to cart
- `POST /cart/update` - Update cart item
- `POST /cart/remove` - Remove item from cart

### Orders
- `POST /orders` - Create new order
- `GET /orders/:id` - View order details

## 🔒 Security Features

- **Password Hashing**: bcryptjs for secure password storage
- **JWT Authentication**: Secure token-based authentication
- **HTTP-only Cookies**: Prevents XSS attacks
- **Input Validation**: Server-side validation for all forms
- **Session Security**: Secure session configuration
- **CORS Protection**: Cross-origin request protection

## 📱 Responsive Design

The application is fully responsive and includes:
- Mobile-first design approach
- Flexible grid layouts
- Responsive navigation
- Touch-friendly interactions
- Optimized images and media

## 🎨 User Interface

### Design Features
- Clean, modern design
- Consistent color scheme
- Intuitive navigation
- Interactive elements
- Loading states and feedback
- Custom modal dialogs

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance
- Form labels and validation

## 🧪 Testing

### Manual Testing Scenarios
1. **User Registration/Login**
   - Create new account
   - Login with valid credentials
   - Handle invalid credentials
   - Logout functionality

2. **Product Browsing**
   - View product listings
   - Navigate to product details
   - Check product information accuracy

3. **Shopping Cart**
   - Add products to cart
   - Update quantities
   - Remove items
   - Cart persistence across sessions

4. **Order Processing**
   - Complete checkout process
   - Validate shipping information
   - Order confirmation
   - Stock management

## 🚀 Deployment

### Environment Setup
1. Set `NODE_ENV=production`
2. Configure production MongoDB URI
3. Set secure JWT secret
4. Enable HTTPS in production

### Deployment Options
- **Heroku**: Easy deployment with MongoDB Atlas
- **DigitalOcean**: VPS deployment
- **AWS**: EC2 with RDS/DocumentDB
- **Vercel**: Serverless deployment

## 🛡️ Error Handling

The application includes comprehensive error handling:
- 404 Not Found pages
- 500 Internal Server Error pages
- Form validation errors
- Authentication errors
- Database connection errors
- Stock availability checks

## 📊 Performance Features

- **Efficient Database Queries**: Optimized MongoDB queries
- **Session Management**: Efficient session storage
- **Image Optimization**: Responsive image loading
- **Caching**: Browser caching for static assets
- **Minification**: CSS and JavaScript optimization

## 🔧 Customization

### Adding New Products
1. Use the seeder script to add sample products
2. Admin interface (future enhancement)
3. Direct database insertion

### Styling Customization
- Modify `frontend/styles/style.css`
- Update color variables
- Customize layout components

### Feature Extensions
- Payment gateway integration
- Advanced search functionality
- Product reviews and ratings
- Wishlist functionality
- Order tracking system

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**JITHENDRA**
- CodeAlpha Internship Project
- Full-stack E-commerce Store Implementation

## 🙏 Acknowledgments

- CodeAlpha for the internship opportunity
- MongoDB for the database solution
- Express.js community for the framework
- Unsplash for sample product images

---

**Note**: This is a educational project built for CodeAlpha internship. For production use, additional security measures, testing, and optimizations should be implemented.
=======
# CodeAlpha_EcommerceStore
CodeAlpha Full Stack Task - Simple E-commerce Store
>>>>>>> d10d3b20abfe78427b8de258eb8b9dc0269984c3
