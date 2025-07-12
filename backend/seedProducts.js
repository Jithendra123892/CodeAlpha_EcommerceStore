// backend/seedProducts.js
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

// Define the Product schema directly in this file
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    imageUrl: {
        type: String,
        required: true,
        default: '/images/placeholder.jpg',
    },
    stock: {
        type: Number,
        required: true,
        default: 0,
    },
    category: {
        type: String,
        required: false,
        enum: ['Electronics', 'Apparel', 'Books', 'Home Goods', 'Furniture', 'Other'],
        default: 'Other'
    },
}, {
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected for seeding...');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

const sampleProducts = [
    {
        name: 'Wireless Bluetooth Headphones',
        description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life.',
        price: 149.99,
        imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
        category: 'Electronics',
        stock: 15
    },
    {
        name: 'Premium Coffee Maker',
        description: 'Programmable coffee maker with built-in grinder and thermal carafe.',
        price: 89.99,
        imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop',
        category: 'Electronics',
        stock: 8
    },
    {
        name: 'Fitness Tracker Watch',
        description: 'Smart fitness tracker with heart rate monitor, GPS, and sleep tracking.',
        price: 199.99,
        imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop',
        category: 'Electronics',
        stock: 12
    },
    {
        name: 'Organic Cotton T-Shirt',
        description: 'Comfortable organic cotton t-shirt available in multiple colors.',
        price: 24.99,
        imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop',
        category: 'Apparel',
        stock: 25
    },
    {
        name: 'Laptop Stand',
        description: 'Adjustable aluminum laptop stand for better ergonomics and cooling.',
        price: 39.99,
        imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop',
        category: 'Electronics',
        stock: 20
    },
    {
        name: 'Wireless Charging Pad',
        description: 'Fast wireless charging pad compatible with all Qi-enabled devices.',
        price: 29.99,
        imageUrl: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=300&fit=crop',
        category: 'Electronics',
        stock: 18
    }
];

const seedProducts = async () => {
    try {
        await connectDB();
        
        console.log('🔍 Product model:', typeof Product);
        console.log('🔍 Product methods:', Object.getOwnPropertyNames(Product));
        
        // Clear existing products
        const deleteResult = await Product.deleteMany();
        console.log('🗑️ Cleared existing products:', deleteResult);
        
        // Insert sample products one by one
        for (const productData of sampleProducts) {
            const product = new Product(productData);
            await product.save();
            console.log('✅ Added product:', product.name);
        }
        
        console.log(`📦 Added ${sampleProducts.length} products to the database`);
        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding products:', error.message);
        console.error('❌ Stack trace:', error.stack);
        process.exit(1);
    }
};

seedProducts();