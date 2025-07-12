# 🚀 How to Run the E-Commerce Store

## Prerequisites

You need to install Node.js and npm on your system first.

### 1. Install Node.js
- Go to https://nodejs.org/
- Download the LTS version (recommended)
- Run the installer and follow the setup wizard
- This will also install npm (Node Package Manager)

### 2. Verify Installation
Open a new Command Prompt or PowerShell and run:
```bash
node --version
npm --version
```

You should see version numbers for both.

## 🏃‍♂️ Running the Application

### Step 1: Navigate to Project Directory
```bash
cd c:/Users/jithe/CodeAlpha_EcommerceStore/CodeAlpha_EcommerceStore
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Seed the Database (Optional but Recommended)
```bash
npm run seed
```

### Step 4: Start the Development Server
```bash
npm run dev
```

### Step 5: Access the Application
Open your web browser and go to:
```
http://localhost:3000
```

## 🎯 What You'll See

1. **Homepage** - Product listings with beautiful cards
2. **Product Details** - Click any product to see details
3. **Cart** - Add items to cart and manage quantities
4. **Login/Register** - Create account or login
5. **Checkout** - Complete order process

## 🧪 Test the Features

### Sample Users (after seeding):
- **Admin**: admin@example.com / 123456
- **User**: john@example.com / 123456

### Test Scenarios:
1. **Register new user** → `/auth/register`
2. **Browse products** → Homepage
3. **Add to cart** → Click "Add to Cart" on products
4. **View cart** → Click "Cart" in navigation
5. **Complete order** → Fill shipping info and checkout

## 🔧 Available Commands

```bash
# Start development server (auto-restart on changes)
npm run dev

# Start production server
npm start

# Add sample data to database
npm run seed

# Remove all data from database
npm run seed:destroy

# Test environment variables
npm run test:env
```

## 📱 Features to Test

### ✅ Core Features
- [ ] Product listings on homepage
- [ ] Product detail pages
- [ ] Add/remove items from cart
- [ ] Update cart quantities
- [ ] User registration
- [ ] User login/logout
- [ ] Order processing
- [ ] Order confirmation

### ✅ UI/UX Features
- [ ] Responsive design (resize browser)
- [ ] Interactive buttons and forms
- [ ] Custom modal dialogs
- [ ] Smooth animations
- [ ] Error handling (try invalid URLs)

## 🎨 What Makes This Special

1. **Professional Design** - Modern, clean interface
2. **Fully Responsive** - Works on all devices
3. **Real-time Validation** - Instant feedback
4. **Secure Authentication** - JWT-based security
5. **Session Management** - Cart persists across visits
6. **Error Handling** - Graceful error messages
7. **Database Integration** - MongoDB with proper schemas

## 🔍 Project Structure

```
CodeAlpha_EcommerceStore/
├── backend/
│   ├── controllers/     # Business logic
│   ├── models/         # Database schemas
│   ├── routes/         # API endpoints
│   ├── middleware/     # Authentication
│   └── server.js       # Main server file
├── frontend/
│   ├── views/          # EJS templates
│   ├── styles/         # CSS files
│   └── scripts/        # JavaScript
├── .env               # Environment variables
└── package.json       # Dependencies
```

## 🛠️ Technology Stack

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, JavaScript, EJS
- **Database**: MongoDB Atlas
- **Authentication**: JWT, bcryptjs
- **Session**: Express sessions

## 🎯 Success Indicators

When everything works correctly, you should see:
- Server starts on port 3000
- Database connects successfully
- Products load on homepage
- Cart functionality works
- User authentication works
- Orders can be placed

## 🆘 Troubleshooting

### Common Issues:

1. **Port 3000 already in use**
   - Change PORT in .env file
   - Or stop other services using port 3000

2. **Database connection error**
   - Check MONGO_URI in .env
   - Ensure internet connection

3. **Modules not found**
   - Run `npm install` again
   - Delete node_modules and reinstall

4. **Authentication issues**
   - Clear browser cookies
   - Check JWT_SECRET in .env

---

**🎉 Congratulations! You now have a fully functional e-commerce store!**

This is a complete, production-ready application with all the features requested:
- Product listings ✅
- Shopping cart ✅  
- Product details ✅
- Order processing ✅
- User registration/login ✅
- Database storage ✅

Plus many additional professional features for an enhanced user experience!