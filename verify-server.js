// verify-server.js
const axios = require('axios');

// Test the root endpoint
axios.get('http://127.0.0.1:3000/')
  .then(response => {
    console.log('✅ Server is running!');
    console.log(`Status Code: ${response.status}`);
    console.log('Response size:', response.data.length, 'bytes');
  })
  .catch(error => {
    console.error('❌ Server is not responding:', error.message);
  });