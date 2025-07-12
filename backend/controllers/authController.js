// backend/controllers/authController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });



// Helper function to generate a JWT
const generateToken = (id) => {
    const secret = process.env.JWT_SECRET || '728cf65ebc20720639c8bea2fe28c54be45a3cb29b2fd993292f888d5b0d0e612daed9a599801f5d58e609dd6b01d4bdacf4923c57cab7bf013fb26efc133d70';
    const lifetime = process.env.JWT_LIFETIME || '1h';
    
    if (!secret) {
        console.error('❌ JWT_SECRET not found in environment variables');
        throw new Error('JWT_SECRET not found');
    }
    
    return jwt.sign({ id }, secret, {
        expiresIn: lifetime,
    });
};

// @desc    Register a new user
// @route   POST /auth/register
async function registerUser(req, res) {
    const { username, email, password } = req.body;

    // Basic validation
    if (!username || !email || !password) {
        // Path is relative to app.set('views')
        return res.status(400).render('auth/register', { error: 'Please enter all fields.' });
    }

    try {
        const userExists = await User.findOne({ email });

        if (userExists) {
            // Path is relative to app.set('views')
            return res.status(400).render('auth/register', { error: 'User with this email already exists.' });
        }

        const user = await User.create({ username, email, password });

        if (user) {
            const token = generateToken(user._id);
            // Set JWT as an HTTP-only cookie
            res.cookie('jwt', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
                maxAge: 3600000 // 1 hour in milliseconds (JWT_LIFETIME should match this)
            });
            res.redirect('/'); // Redirect to homepage after successful registration
        } else {
            // Path is relative to app.set('views')
            res.status(400).render('auth/register', { error: 'Invalid user data provided.' });
        }
    } catch (error) {
        console.error('Registration error:', error.message);
        // Path is relative to app.set('views')
        res.status(500).render('auth/register', { error: 'Server error during registration.' });
    }
}

// @desc    Authenticate user & get token
// @route   POST /auth/login
async function loginUser(req, res) {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
        // Path is relative to app.set('views')
        return res.status(400).render('auth/login', { error: 'Please enter all fields.' });
    }

    try {
        const user = await User.findOne({ email });

        if (user && (await user.matchPassword(password))) {
            const token = generateToken(user._id);
            // Set JWT as an HTTP-only cookie
            res.cookie('jwt', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 3600000 // 1 hour
            });
            res.redirect('/'); // Redirect to homepage after successful login
        } else {
            // Path is relative to app.set('views')
            res.status(401).render('auth/login', { error: 'Invalid email or password.' });
        }
    } catch (error) {
        console.error('Login error:', error.message);
        // Path is relative to app.set('views')
        res.status(500).render('auth/login', { error: 'Server error during login.' });
    }
}

// @desc    Logout user
// @route   GET /auth/logout
function logoutUser(req, res) {
    // Clear the JWT cookie by setting an empty cookie that expires immediately
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    });
    res.redirect('/auth/login'); // Redirect to login page after logout
}

module.exports = { registerUser, loginUser, logoutUser };