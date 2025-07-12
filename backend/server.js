// backend/server.js

const path = require('path'); // Ensure path is required
// Load environment variables from .env file
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const expressLayouts = require('express-ejs-layouts'); // For EJS layouts

// Database connection
const connectDB = require('./config/db');
connectDB();

const app = express();

// Set EJS as templating engine and configure views directory
app.set('view engine', 'ejs');
// The 'views' directory is now set to 'frontend/views'
app.set('views', path.join(__dirname, '../frontend/views'));

// Use express-ejs-layouts middleware
app.use(expressLayouts);
// The layout path is now relative to the 'views' directory
app.set('layout', 'layouts/main');

// Middleware
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(cookieParser()); // For parsing cookies

// Express session middleware for the cart and flash messages
app.use(session({
    secret: process.env.JWT_SECRET || 'fallback-secret-key', // Use a strong secret from .env
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: process.env.NODE_ENV === 'production', // true for https in production
        httpOnly: true, // Prevents client-side JS from reading the cookie
        maxAge: 3600000 // 1 hour
    }
}));

// Serve static files from the 'frontend' directory
app.use(express.static(path.join(__dirname, '../frontend')));

// Import routes with error handling
let authRoutes, productRoutes, cartRoutes, orderRoutes, protect;

try {
    authRoutes = require('./routes/auth');
    console.log('✅ Auth routes loaded');
} catch (error) {
    console.error('❌ Error loading auth routes:', error.message);
}

try {
    productRoutes = require('./routes/products');
    console.log('✅ Product routes loaded');
} catch (error) {
    console.error('❌ Error loading product routes:', error.message);
}

try {
    cartRoutes = require('./routes/cart');
    console.log('✅ Cart routes loaded');
} catch (error) {
    console.error('❌ Error loading cart routes:', error.message);
}

try {
    orderRoutes = require('./routes/orders');
    console.log('✅ Order routes loaded');
} catch (error) {
    console.error('❌ Error loading order routes:', error.message);
}

try {
    const authMiddleware = require('./middleware/authMiddleware');
    protect = authMiddleware.protect;
    console.log('✅ Auth middleware loaded');
} catch (error) {
    console.error('❌ Error loading auth middleware:', error.message);
}

// Route Middlewares
if (authRoutes) {
    app.use('/auth', authRoutes);
    console.log('✅ Auth routes registered');
}

if (productRoutes) {
    app.use('/products', productRoutes);
    console.log('✅ Product routes registered');
}

if (cartRoutes) {
    app.use('/cart', cartRoutes);
    console.log('✅ Cart routes registered');
}

if (orderRoutes && protect) {
    app.use('/orders', protect, orderRoutes);
    console.log('✅ Order routes registered');
}

// Home route - display product list
// This route will be handled by the productController.getProducts
// We need to ensure the user object is available for the layout
app.get('/', async (req, res, next) => {
    // This block attempts to get user info for the homepage/layout
    // It's a simplified version as `protect` middleware isn't used directly here for the root
    // For a more robust solution, you might have a dedicated middleware for populating `req.user`
    // on all routes that need it, or rely on `protect` for all dynamic pages.
    let user = null;
    if (req.cookies.jwt) {
        try {
            const jwt = require('jsonwebtoken');
            const User = require('./models/User'); // Ensure User model is accessible
            const decoded = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET);
            user = await User.findById(decoded.id).select('-password');
            req.user = user; // Attach user to req for subsequent middleware/controllers
        } catch (error) {
            console.error('Error decoding JWT on homepage:', error.message);
            res.clearCookie('jwt'); // Clear invalid cookie
        }
    }
    // Pass control to the product controller to render the product list
    next();
}, productRoutes); // This will pass to the '/' route in productRoutes

// Removed test routes - now using the main application

// Handle 404 - Not Found
app.use((req, res, next) => {
    res.status(404).render('error/404', { user: req.user || null, message: "Page Not Found" }); // Render a 404 page
});

// Basic Error Handler (for development)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error/500', { user: req.user || null, message: "Something went wrong on the server!" }); // Render a 500 page
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    console.log(`🌐 Visit: http://localhost:${PORT}`);
    if (process.env.MONGO_URI) {
        console.log('✅ MongoDB URI loaded successfully');
    } else {
        console.log('❌ MongoDB URI not loaded from .env file');
    }
});