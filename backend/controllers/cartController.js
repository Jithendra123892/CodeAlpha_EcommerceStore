// backend/controllers/cartController.js
const Product = require('../models/Product');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });



// @desc    Add item to cart
// @route   POST /cart/add
async function addToCart(req, res) {
    const { productId, quantity } = req.body;
    const qty = parseInt(quantity, 10);

    if (isNaN(qty) || qty <= 0) {
        return res.status(400).send('Invalid quantity.');
    }

    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).send('Product not found.');
        }

        if (qty > product.stock) {
            // Redirect back to cart with an error message
            req.session.errorMessage = `Not enough stock for ${product.name}. Available: ${product.stock}`;
            return res.redirect('/cart');
        }

        // Initialize cart in session if it doesn't exist
        if (!req.session.cart) {
            req.session.cart = [];
        }

        const cartItemIndex = req.session.cart.findIndex(item => item.product._id.toString() === productId);

        if (cartItemIndex > -1) {
            // Update quantity if product already in cart
            req.session.cart[cartItemIndex].quantity += qty;
        } else {
            // Add new item to cart. Store enough product info for display.
            req.session.cart.push({
                product: {
                    _id: product._id,
                    name: product.name,
                    price: product.price,
                    imageUrl: product.imageUrl,
                    stock: product.stock // Keep stock for client-side validation
                },
                quantity: qty
            });
        }
        // Clear any previous error messages
        delete req.session.errorMessage;
        res.redirect('/cart'); // Redirect to cart page
    } catch (error) {
        console.error('Error adding to cart:', error.message);
        req.session.errorMessage = 'Server error: Could not add item to cart.';
        res.redirect('/cart');
    }
}

// @desc    Remove item from cart
// @route   POST /cart/remove
function removeFromCart(req, res) {
    const { productId } = req.body;
    if (req.session.cart) {
        req.session.cart = req.session.cart.filter(item => item.product._id.toString() !== productId);
    }
    // Clear any previous error messages
    delete req.session.errorMessage;
    res.redirect('/cart');
}

// @desc    Update item quantity in cart
// @route   POST /cart/update
async function updateCartItem(req, res) {
    const { productId, quantity } = req.body;
    const qty = parseInt(quantity, 10);

    if (isNaN(qty) || qty < 0) { // Quantity can be 0 to remove item
        return res.status(400).send('Invalid quantity.');
    }

    try {
        if (req.session.cart) {
            const cartItemIndex = req.session.cart.findIndex(item => item.product._id.toString() === productId);

            if (cartItemIndex > -1) {
                const product = await Product.findById(productId); // Get current stock
                if (!product) {
                    req.session.errorMessage = 'Product not found for update.';
                    return res.redirect('/cart');
                }

                if (qty > product.stock) {
                    req.session.errorMessage = `Not enough stock for ${product.name}. Available: ${product.stock}`;
                    return res.redirect('/cart');
                }

                if (qty > 0) {
                    req.session.cart[cartItemIndex].quantity = qty;
                } else {
                    // If quantity is 0, remove the item
                    req.session.cart = req.session.cart.filter(item => item.product._id.toString() !== productId);
                }
            }
        }
        // Clear any previous error messages
        delete req.session.errorMessage;
        res.redirect('/cart');
    } catch (error) {
        console.error('Error updating cart item:', error.message);
        req.session.errorMessage = 'Server error: Could not update cart item.';
        res.redirect('/cart');
    }
}

// @desc    View cart
// @route   GET /cart
function viewCart(req, res) {
    const cart = req.session.cart || [];
    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.product.price * item.quantity;
    });

    // Retrieve error message from session if any
    const errorMessage = req.session.errorMessage;
    delete req.session.errorMessage; // Clear it after retrieving

    // Path is relative to app.set('views')
    res.render('cart/cart', { cart, subtotal, user: req.user || null, error: errorMessage });
}

module.exports = { addToCart, removeFromCart, updateCartItem, viewCart };