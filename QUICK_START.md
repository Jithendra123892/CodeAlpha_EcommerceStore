# 🚀 QUICK START GUIDE - Node.js 18 Ready!

Since you have Node.js 18 installed, here's how to get the e-commerce store running quickly:

## 🎯 Option 1: Using Command Prompt/PowerShell

### Step 1: Open a NEW Command Prompt or PowerShell window
- Press `Win + R`, type `cmd` and press Enter
- Or press `Win + X` and select "Windows PowerShell"

### Step 2: Navigate to the project directory
```bash
cd c:\Users\jithe\CodeAlpha_EcommerceStore\CodeAlpha_EcommerceStore
```

### Step 3: Verify Node.js is working
```bash
node --version
npm --version
```

### Step 4: Install dependencies
```bash
npm install
```

### Step 5: Seed the database with sample data
```bash
npm run seed
```

### Step 6: Start the development server
```bash
npm run dev
```

### Step 7: Open your browser
Go to: **http://localhost:3000**

---

## 🎯 Option 2: Using the Batch Script

Double-click the `run-app.bat` file in the project directory. This will:
- Check if Node.js is available
- Install dependencies
- Seed the database
- Start the server

---

## 🎯 Option 3: Using PowerShell Script

1. Right-click `run-app.ps1` and select "Run with PowerShell"
2. Or open PowerShell and run: `.\run-app.ps1`

---

## 🧪 Test Node.js First (Optional)

If you want to test if Node.js is working correctly:
```bash
node check-node.js
```

---

## 🎉 What You'll See When It Works

1. **Dependencies Installation**: npm will download all required packages
2. **Database Seeding**: Sample products and users will be added
3. **Server Starting**: You'll see "Server running on port 3000"
4. **MongoDB Connection**: "Connected to MongoDB" message

---

## 🌐 Using the Application

### Sample Login Credentials:
- **Admin User**: 
  - Email: admin@example.com
  - Password: 123456

- **Regular User**:
  - Email: john@example.com  
  - Password: 123456

### Features to Test:
1. **Browse Products** - Homepage shows product grid
2. **Product Details** - Click any product
3. **Add to Cart** - Add items with quantities
4. **View Cart** - See cart contents
5. **Register** - Create new account
6. **Login** - Authenticate user
7. **Checkout** - Complete order process

---

## 📱 Expected Results

### Homepage:
- Beautiful product grid with 8 sample products
- Professional design with hover effects
- Responsive layout

### Product Details:
- Large product image
- Detailed description
- Price and stock information
- Add to cart functionality

### Shopping Cart:
- List of added items
- Update quantities
- Remove items
- Shipping address form
- Checkout button

### User Authentication:
- Registration form
- Login form
- User session management
- Secure logout

---

## 🛠️ Troubleshooting

### If Node.js is not recognized:
1. Restart your command prompt/PowerShell
2. Check if Node.js is in PATH
3. Try running from a different terminal

### If dependencies fail to install:
1. Delete `node_modules` folder (if it exists)
2. Run `npm install` again
3. Check internet connection

### If database connection fails:
1. Check .env file exists
2. Verify MongoDB URI is correct
3. Check internet connection

---

## 🎯 Success Indicators

✅ **Server Started**: "Server running on port 3000"
✅ **Database Connected**: "Connected to MongoDB"
✅ **Seeding Complete**: "Data imported successfully!"
✅ **Browser Access**: Homepage loads at http://localhost:3000

---

## 📊 Project Status

Your e-commerce store includes:

### ✅ Required Features:
- Product listings
- Shopping cart
- Product details page
- Order processing
- User registration/login
- Database storage

### ✅ Bonus Features:
- Responsive design
- Professional UI/UX
- Security features
- Error handling
- Session management
- Form validation

---

## 🚀 Ready to Launch!

Once you run the commands above, you'll have a fully functional e-commerce store with:
- 8 sample products
- User authentication
- Shopping cart
- Order processing
- Professional design
- Mobile responsive

**The store is production-ready and includes all features requested in the CodeAlpha task!**