// backend/routes/auth.js
const express = require('express');
const { registerUser, loginUser, logoutUser } = require('../controllers/authController');
const router = express.Router();



// Render registration form
// Path is relative to app.set('views')
router.get('/register', (req, res) => res.render('auth/register', { error: null }));
// Handle registration submission
router.post('/register', registerUser);

// Render login form
// Path is relative to app.set('views')
router.get('/login', (req, res) => res.render('auth/login', { error: null }));
// Handle login submission
router.post('/login', loginUser);

// Handle logout
router.get('/logout', logoutUser);

module.exports = router;