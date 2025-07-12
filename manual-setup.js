// manual-setup.js - Manual setup when npm is not available
const https = require('https');
const fs = require('fs');
const path = require('path');

console.log('🔧 Manual E-Commerce Store Setup');
console.log('=================================\n');

// Create a basic server without external dependencies
const basicServer = `
// basic-server.js - Minimal server for testing
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    console.log('Request:', req.method, req.url);
    
    if (req.url === '/' || req.url === '/index.html') {
        // Serve basic HTML page
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(\`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-Commerce Store - Setup Required</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; background: #f5f5f5; }
        .container { max-width: 800px; margin: 0 auto; background: white; padding: 40px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        h1 { color: #333; text-align: center; }
        .status { padding: 20px; margin: 20px 0; border-radius: 5px; }
        .info { background: #e3f2fd; border-left: 4px solid #2196f3; }
        .warning { background: #fff3e0; border-left: 4px solid #ff9800; }
        .error { background: #ffebee; border-left: 4px solid #f44336; }
        .success { background: #e8f5e8; border-left: 4px solid #4caf50; }
        code { background: #f5f5f5; padding: 2px 5px; border-radius: 3px; font-family: monospace; }
        .btn { display: inline-block; padding: 10px 20px; background: #2196f3; color: white; text-decoration: none; border-radius: 5px; margin: 10px 0; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 E-Commerce Store</h1>
        
        <div class="status error">
            <h3>⚠️ Setup Required</h3>
            <p>The full application requires npm to install dependencies. Your Node.js is working, but npm is not accessible in the current session.</p>
        </div>
        
        <div class="status info">
            <h3>🔧 Solutions:</h3>
            <p><strong>1. Refresh Environment:</strong></p>
            <ul>
                <li>Close all PowerShell/Command Prompt windows</li>
                <li>Open a NEW PowerShell window as Administrator</li>
                <li>Navigate to: <code>c:\\Users\\jithe\\CodeAlpha_EcommerceStore\\CodeAlpha_EcommerceStore</code></li>
                <li>Run: <code>npm --version</code> to test</li>
            </ul>
            
            <p><strong>2. Alternative Commands:</strong></p>
            <ul>
                <li><code>node install-and-run.js</code> - Try automatic setup</li>
                <li><code>node manual-setup.js</code> - Manual setup guide</li>
            </ul>
            
            <p><strong>3. Reinstall Node.js:</strong></p>
            <ul>
                <li>Download from: <a href="https://nodejs.org">https://nodejs.org</a></li>
                <li>Choose LTS version</li>
                <li>Restart computer after installation</li>
            </ul>
        </div>
        
        <div class="status success">
            <h3>✅ What You'll Get:</h3>
            <ul>
                <li>Complete e-commerce store with product listings</li>
                <li>Shopping cart functionality</li>
                <li>User registration and login</li>
                <li>Order processing system</li>
                <li>Professional responsive design</li>
                <li>MongoDB database integration</li>
            </ul>
        </div>
        
        <div class="status info">
            <h3>📁 Project Structure:</h3>
            <p>Your project is complete with:</p>
            <ul>
                <li>✅ Backend server (Node.js + Express)</li>
                <li>✅ Frontend views (EJS templates)</li>
                <li>✅ Database models (MongoDB)</li>
                <li>✅ Authentication system (JWT)</li>
                <li>✅ Responsive CSS styling</li>
                <li>✅ Interactive JavaScript</li>
            </ul>
        </div>
        
        <p style="text-align: center; margin-top: 40px;">
            <strong>Node.js Version: </strong><span id="nodeVersion">Detected</span><br>
            <strong>Status: </strong><span style="color: orange;">Setup Required</span><br>
            <strong>Next Step: </strong>Fix npm access and run setup
        </p>
    </div>
    
    <script>
        // Basic JavaScript to show this is working
        document.getElementById('nodeVersion').textContent = 'Node.js is working!';
        
        // Auto-refresh every 30 seconds to check if full app is running
        setTimeout(() => {
            fetch('/api/status').then(() => {
                window.location.reload();
            }).catch(() => {
                console.log('Full app not ready yet');
            });
        }, 30000);
    </script>
</body>
</html>
        \`);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found - Setup the full application first!');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(\`🌐 Basic server running at http://localhost:\${PORT}\`);
    console.log('');
    console.log('This is a temporary server showing setup instructions.');
    console.log('Follow the instructions in your browser to set up the full application.');
    console.log('');
    console.log('Press Ctrl+C to stop this server');
});
`;

// Write the basic server
fs.writeFileSync('basic-server.js', basicServer);

console.log('✅ Created basic-server.js');
console.log('');
console.log('🎯 Quick Test Options:');
console.log('');
console.log('1. Test basic Node.js server:');
console.log('   node basic-server.js');
console.log('   Then visit: http://localhost:3000');
console.log('');
console.log('2. Try automatic setup:');
console.log('   node install-and-run.js');
console.log('');
console.log('3. Fix npm and run normally:');
console.log('   - Close this PowerShell window');
console.log('   - Open NEW PowerShell as Administrator');
console.log('   - Run: npm --version');
console.log('   - If working, run: npm install && npm run seed && npm run dev');
console.log('');
console.log('🔧 If npm still doesn\'t work:');
console.log('- Restart computer');
console.log('- Reinstall Node.js from https://nodejs.org');
console.log('- Make sure to check "Add to PATH" during installation');