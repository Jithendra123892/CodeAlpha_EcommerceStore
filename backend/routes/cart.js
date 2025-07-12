// backend/routes/cart.js
const express = require('express');
const { addToCart, removeFromCart, updateCartItem, viewCart } = require('../controllers/cartController');
const router = express.Router();



router.post('/add', addToCart);
router.post('/remove', removeFromCart);
router.post('/update', updateCartItem);
router.get('/', viewCart);

module.exports = router;