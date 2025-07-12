# Setup Guide - E-Commerce Store

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Setup
Make sure your `.env` file is properly configured with:
```env
NODE_ENV=development
PORT=3000
MONGO_URI=mongodb+srv://jithendramaddala009988:qn3DkohUikkzIx2c@e-commerce.ugsf3wp.mongodb.net/?retryWrites=true&w=majority
JWT_SECRET=728cf65ebc20720639c8bea2fe28c54be45a3cb29b2fd993292f888d5b0d0e612daed9a599801f5d58e609dd6b01d4bdacf4923c57cab7bf013fb26efc133d70
JWT_LIFETIME=1h
```

### 3. Test Environment Variables
```bash
npm run test:env
```

### 4. Seed Database (Optional)
```bash
npm run seed
```

### 5. Start Development Server
```bash
npm run dev
```

Visit: http://localhost:3000

## 📋 Features Verification Checklist

### ✅ Core Features
- [ ] **Product Listings**: Navigate to homepage - should show all products
- [ ] **Product Details**: Click on any product to view details
- [ ] **Shopping Cart**: Add items to cart, view cart, update quantities
- [ ] **User Registration**: Create new account at `/auth/register`
- [ ] **User Login**: Login at `/auth/login`
- [ ] **Order Processing**: Complete checkout process with shipping info
- [ ] **Database Storage**: All data persisted in MongoDB

### ✅ Additional Features
- [ ] **Responsive Design**: Test on mobile devices
- [ ] **Session Management**: Cart persists across page reloads
- [ ] **Stock Management**: Products show available stock
- [ ] **Error Handling**: Try invalid URLs, see 404 pages
- [ ] **Security**: Passwords are hashed, secure authentication

## 🧪 Testing Scenarios

### 1. User Registration & Login
```
1. Go to /auth/register
2. Create account with: 
   - Username: testuser
   - Email: test@example.com
   - Password: 123456
3. Should redirect to homepage with user greeting
4. Logout and login again with same credentials
```

### 2. Shopping Cart Flow
```
1. Browse products on homepage
2. Click on a product to view details
3. Add to cart with quantity 2
4. View cart - should show 2 items
5. Update quantity to 3
6. Remove item from cart
7. Add multiple different products
```

### 3. Order Processing
```
1. Add items to cart
2. Go to cart page
3. Fill shipping address form
4. Submit order
5. Should redirect to order confirmation
6. Order should be saved in database
```

### 4. Error Handling
```
1. Visit invalid URL - should show 404 page
2. Try adding more items than stock available
3. Try accessing orders without login
4. Try login with invalid credentials
```

## 🔧 Development Commands

```bash
# Start development server with auto-restart
npm run dev

# Start production server
npm start

# Seed database with sample data
npm run seed

# Clear all data from database
npm run seed:destroy

# Test environment variables
npm run test:env
```

## 📁 Project Structure Overview

```
CodeAlpha_EcommerceStore/
├── backend/                    # Server-side code
│   ├── config/db.js           # Database configuration
│   ├── controllers/           # Request handlers
│   ├── middleware/            # Authentication middleware
│   ├── models/               # Database schemas
│   ├── routes/               # API routes
│   └── server.js             # Main server file
├── frontend/                  # Client-side code
│   ├── scripts/main.js       # JavaScript functionality
│   ├── styles/style.css      # CSS styling
│   └── views/                # EJS templates
├── .env                      # Environment variables
├── package.json              # Dependencies
└── README.md                 # Documentation
```

## 🎯 API Endpoints

### Authentication
- `GET /auth/register` - Registration form
- `POST /auth/register` - Create account
- `GET /auth/login` - Login form
- `POST /auth/login` - User login
- `GET /auth/logout` - User logout

### Products
- `GET /` - Homepage with product listing
- `GET /products` - All products
- `GET /products/:id` - Single product details

### Cart
- `GET /cart` - View shopping cart
- `POST /cart/add` - Add item to cart
- `POST /cart/update` - Update cart item quantity
- `POST /cart/remove` - Remove item from cart

### Orders
- `POST /orders` - Create new order
- `GET /orders/:id` - View order details

## 🛠️ Database Schema

### Users
```javascript
{
  username: String,
  email: String,
  password: String (hashed),
  isAdmin: Boolean,
  shippingAddress: {
    street: String,
    city: String,
    state: String,
    zip: String,
    country: String
  }
}
```

### Products
```javascript
{
  name: String,
  description: String,
  price: Number,
  imageUrl: String,
  stock: Number,
  category: String
}
```

### Orders
```javascript
{
  user: ObjectId,
  orderItems: [{
    name: String,
    quantity: Number,
    price: Number,
    product: ObjectId
  }],
  shippingAddress: Object,
  totalPrice: Number,
  status: String,
  createdAt: Date
}
```

## 🔐 Security Features

- **Password Hashing**: bcryptjs for secure password storage
- **JWT Authentication**: Stateless authentication
- **HTTP-only Cookies**: Prevents XSS attacks
- **Input Validation**: Server-side validation
- **Session Security**: Secure session configuration

## 🎨 UI/UX Features

- **Responsive Design**: Mobile-friendly interface
- **Interactive Elements**: Hover effects, animations
- **Custom Modals**: Replace browser alerts
- **Loading States**: Visual feedback for user actions
- **Form Validation**: Real-time validation feedback

## 📱 Mobile Responsiveness

The application is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🚀 Deployment Notes

### Environment Variables for Production
```env
NODE_ENV=production
PORT=5000
MONGO_URI=your_production_mongodb_uri
JWT_SECRET=your_secure_jwt_secret
```

### Production Optimizations
- Enable HTTPS
- Use secure cookies
- Implement rate limiting
- Add compression middleware
- Use environment-specific error handling

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Check MongoDB URI in .env
   - Ensure database is accessible
   - Verify network connection

2. **Authentication Not Working**
   - Check JWT_SECRET in .env
   - Clear browser cookies
   - Verify user exists in database

3. **Images Not Loading**
   - Check image URLs in database
   - Verify static file serving
   - Use placeholder images

4. **Cart Not Persisting**
   - Check session configuration
   - Verify session secret
   - Clear browser storage

### Debug Mode
Set `NODE_ENV=development` for detailed error messages and stack traces.

## 📞 Support

For issues or questions:
1. Check this setup guide
2. Review the main README.md
3. Check console logs for errors
4. Verify all dependencies are installed

---

**Happy Coding! 🎉**