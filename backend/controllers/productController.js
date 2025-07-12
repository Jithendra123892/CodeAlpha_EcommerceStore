// backend/controllers/productController.js
const Product = require('../models/Product');

// @desc    Get all products
// @route   GET /products
async function getProducts(req, res) {
    try {
        const products = await Product.find({});
        res.render('products/product-list', { products, user: req.user || null });
    } catch (error) {
        console.error('❌ Error fetching products:', error.message);
        res.status(500).send('Server Error: Could not fetch products.');
    }
}

// @desc    Get all products (standalone version)
// @route   GET /products/standalone
async function getProductsStandalone(req, res) {
    try {
        const products = await Product.find({});
        res.render('products/product-list-standalone', { products });
    } catch (error) {
        console.error('❌ Error fetching products for standalone view:', error.message);
        res.status(500).send('Server Error: Could not fetch products.');
    }
}

// @desc    Get single product by ID
// @route   GET /products/:id
async function getProductById(req, res) {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            // Path is relative to app.set('views')
            res.render('products/product-detail', { product, user: req.user || null });
        } else {
            res.status(404).send('Product not found.');
        }
    } catch (error) {
        console.error(`Error fetching product ${req.params.id}:`, error.message);
        res.status(500).send('Server Error: Could not fetch product details.');
    }
}

module.exports = { getProducts, getProductById, getProductsStandalone };