// Simple Node.js check
console.log('🎉 Node.js is working!');
console.log('Node.js version:', process.version);
console.log('Platform:', process.platform);
console.log('Architecture:', process.arch);

// Check if we can require basic modules
try {
    const fs = require('fs');
    const path = require('path');
    
    console.log('✅ Core modules are working');
    
    // Check if package.json exists
    const packagePath = path.join(__dirname, 'package.json');
    if (fs.existsSync(packagePath)) {
        console.log('✅ package.json found');
        const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
        console.log('Project name:', pkg.name);
        console.log('Project version:', pkg.version);
    } else {
        console.log('❌ package.json not found');
    }
    
    // Check if .env exists
    const envPath = path.join(__dirname, '.env');
    if (fs.existsSync(envPath)) {
        console.log('✅ .env file found');
    } else {
        console.log('❌ .env file not found');
    }
    
} catch (error) {
    console.log('❌ Error:', error.message);
}

console.log('\n🚀 If you see this message, Node.js is working correctly!');
console.log('Next steps:');
console.log('1. Open a new Command Prompt or PowerShell window');
console.log('2. Navigate to the project directory');
console.log('3. Run: npm install');
console.log('4. Run: npm run seed');
console.log('5. Run: npm run dev');
console.log('6. Open browser to: http://localhost:3000');