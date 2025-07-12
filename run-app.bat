@echo off
echo 🚀 Starting E-Commerce Store Application...
echo.

REM Check if Node.js is available
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js not found in PATH
    echo.
    echo Please make sure Node.js is installed and added to PATH
    echo You can:
    echo 1. Restart your command prompt/PowerShell
    echo 2. Or add Node.js to your PATH manually
    echo 3. Or run this script from a new command prompt
    echo.
    pause
    exit /b 1
)

echo ✅ Node.js found! Version:
node --version
echo.

echo 📦 Installing dependencies...
npm install

echo.
echo 🌱 Seeding database with sample data...
npm run seed

echo.
echo 🚀 Starting development server...
echo.
echo 🌐 Open your browser and go to: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

npm run dev