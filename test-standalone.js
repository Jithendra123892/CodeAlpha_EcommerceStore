// test-standalone.js
const axios = require('axios');

console.log('Testing standalone products page...');

// Use axios instead of http module
axios.get('http://127.0.0.1:3000/products/standalone')
  .then(response => {
    console.log(`Status Code: ${response.status}`);
    
    if (response.status === 200) {
      console.log('✅ Standalone products page is working!');
      
      // Check if the page contains product data
      if (response.data.includes('product-card') && response.data.includes('Add to Cart')) {
        console.log('✅ Products are being displayed correctly');
      } else {
        console.log('❌ Products may not be displaying correctly');
      }
    } else {
      console.log('❌ Standalone products page is not working');
    }
  })
  .catch(error => {
    console.error('❌ Error testing standalone page:', error.message);
    
    // Provide instructions for manual testing
    console.log('\nSince automated testing failed, please test manually:');
    console.log('1. Open a browser and go to: http://localhost:3000/products/standalone');
    console.log('2. You should see a list of products with images, descriptions, and "Add to Cart" buttons');
    console.log('3. Try clicking on a product name to view details');
    console.log('4. Try adding a product to the cart');
  });