// backend/seeder.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const User = require('./models/User');
const Product = require('./models/Product');
const Order = require('./models/Order');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

// Sample data
const users = [
    {
        username: 'admin',
        email: 'admin@example.com',
        password: '123456',
        isAdmin: true,
        shippingAddress: {
            street: '123 Admin St',
            city: 'Admin City',
            state: 'Admin State',
            zip: '12345',
            country: 'USA'
        }
    },
    {
        username: 'john_doe',
        email: 'john@example.com',
        password: '123456',
        isAdmin: false,
        shippingAddress: {
            street: '456 User Ave',
            city: 'User City',
            state: 'User State',
            zip: '67890',
            country: 'USA'
        }
    }
];

const products = [
    {
        name: 'Wireless Bluetooth Headphones',
        description: 'High-quality wireless headphones with noise cancellation, 30-hour battery life, and premium sound quality. Perfect for music lovers and professionals.',
        price: 199.99,
        imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        stock: 25,
        category: 'Electronics'
    },
    {
        name: 'Smart Watch Series 5',
        description: 'Advanced smartwatch with heart rate monitoring, GPS tracking, water resistance, and 7-day battery life. Compatible with iOS and Android.',
        price: 299.99,
        imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        stock: 15,
        category: 'Electronics'
    },
    {
        name: 'Organic Cotton T-Shirt',
        description: 'Comfortable and sustainable organic cotton t-shirt. Available in multiple colors and sizes. Perfect for everyday wear.',
        price: 29.99,
        imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        stock: 50,
        category: 'Apparel'
    },
    {
        name: 'JavaScript Programming Book',
        description: 'Comprehensive guide to modern JavaScript programming. Covers ES6+, async/await, modules, and advanced concepts. Perfect for developers.',
        price: 49.99,
        imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        stock: 30,
        category: 'Books'
    },
    {
        name: 'Ceramic Coffee Mug Set',
        description: 'Set of 4 elegant ceramic coffee mugs with ergonomic handles. Dishwasher and microwave safe. Perfect for your morning coffee routine.',
        price: 39.99,
        imageUrl: 'https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        stock: 20,
        category: 'Home Goods'
    },
    {
        name: 'Ergonomic Office Chair',
        description: 'Professional ergonomic office chair with lumbar support, adjustable height, and breathable mesh back. Perfect for long work sessions.',
        price: 299.99,
        imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        stock: 10,
        category: 'Furniture'
    },
    {
        name: 'Smartphone Case',
        description: 'Protective smartphone case with shock absorption and wireless charging compatibility. Available for multiple phone models.',
        price: 24.99,
        imageUrl: 'https://images.unsplash.com/photo-1601593346740-925612772716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        stock: 40,
        category: 'Electronics'
    },
    {
        name: 'Yoga Mat Pro',
        description: 'Premium yoga mat with excellent grip and cushioning. Eco-friendly materials, non-slip surface, and comes with carrying strap.',
        price: 79.99,
        imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        stock: 25,
        category: 'Other'
    }
];

const importData = async () => {
    try {
        // Wait for database connection
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Clear existing data (only if collections exist)
        try {
            await Order.deleteMany({});
            console.log('Cleared existing orders'.yellow);
        } catch (err) {
            console.log('Orders collection not found, skipping...'.yellow);
        }
        
        try {
            await Product.deleteMany({});
            console.log('Cleared existing products'.yellow);
        } catch (err) {
            console.log('Products collection not found, skipping...'.yellow);
        }
        
        try {
            await User.deleteMany({});
            console.log('Cleared existing users'.yellow);
        } catch (err) {
            console.log('Users collection not found, skipping...'.yellow);
        }

        // Insert sample data
        const createdUsers = await User.insertMany(users);
        const createdProducts = await Product.insertMany(products);

        console.log('Data imported successfully!'.green.inverse);
        console.log(`Created ${createdUsers.length} users`.blue);
        console.log(`Created ${createdProducts.length} products`.blue);
        process.exit();
    } catch (error) {
        console.error(`Error importing data: ${error.message}`.red.inverse);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log('Data destroyed!'.red.inverse);
        process.exit();
    } catch (error) {
        console.error(`Error destroying data: ${error.message}`.red.inverse);
        process.exit(1);
    }
};

// Check command line arguments
if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}