// install-and-run.js - Install dependencies and run the app
const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 E-Commerce Store Setup & Launch Script');
console.log('==========================================\n');

// Function to run command
function runCommand(command, args, description) {
    return new Promise((resolve, reject) => {
        console.log(`📦 ${description}...`);
        
        const child = spawn(command, args, {
            cwd: __dirname,
            stdio: 'inherit',
            shell: true
        });

        child.on('close', (code) => {
            if (code === 0) {
                console.log(`✅ ${description} completed successfully!\n`);
                resolve();
            } else {
                console.log(`❌ ${description} failed with code ${code}\n`);
                reject(new Error(`${description} failed`));
            }
        });

        child.on('error', (error) => {
            console.log(`❌ Error running ${description}:`, error.message);
            reject(error);
        });
    });
}

// Main execution
async function main() {
    try {
        // Check if npm is available
        console.log('🔍 Checking npm availability...');
        
        // Install dependencies
        await runCommand('npm', ['install'], 'Installing dependencies');
        
        // Seed database
        await runCommand('npm', ['run', 'seed'], 'Seeding database with sample data');
        
        console.log('🎉 Setup complete! Starting the development server...\n');
        console.log('🌐 Open your browser and go to: http://localhost:3000\n');
        console.log('Press Ctrl+C to stop the server\n');
        
        // Start the server
        await runCommand('npm', ['run', 'dev'], 'Starting development server');
        
    } catch (error) {
        console.log('\n❌ Setup failed:', error.message);
        console.log('\n🔧 Try these solutions:');
        console.log('1. Close and reopen PowerShell as Administrator');
        console.log('2. Run: refreshenv (if you have Chocolatey)');
        console.log('3. Restart your computer');
        console.log('4. Reinstall Node.js from https://nodejs.org');
        
        process.exit(1);
    }
}

// Check Node.js version first
console.log('Node.js version:', process.version);
console.log('Platform:', process.platform);
console.log('Architecture:', process.arch);
console.log('');

main();