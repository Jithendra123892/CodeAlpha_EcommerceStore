// backend/routes/products.js
const express = require('express');
const { getProducts, getProductById, getProductsStandalone } = require('../controllers/productController');
const router = express.Router();

// Route for all products (homepage)
router.get('/', getProducts);
// Route for standalone product list
router.get('/standalone', getProductsStandalone);
// Route for a single product details page
router.get('/:id', getProductById);

module.exports = router;