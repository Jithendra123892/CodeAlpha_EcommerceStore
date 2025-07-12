# PowerShell script to run the E-Commerce Store
Write-Host "🚀 Starting E-Commerce Store Application..." -ForegroundColor Green
Write-Host ""

# Check if Node.js is available
try {
    $nodeVersion = & node --version 2>$null
    Write-Host "✅ Node.js found! Version: $nodeVersion" -ForegroundColor Green
    Write-Host ""
} catch {
    Write-Host "❌ Node.js not found in PATH" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please make sure Node.js is installed and added to PATH" -ForegroundColor Yellow
    Write-Host "You can:" -ForegroundColor Yellow
    Write-Host "1. Restart your PowerShell window" -ForegroundColor Yellow
    Write-Host "2. Or add Node.js to your PATH manually" -ForegroundColor Yellow
    Write-Host "3. Or run this script from a new PowerShell window" -ForegroundColor Yellow
    Write-Host ""
    Read-Host "Press Enter to exit"
    exit 1
}

# Change to project directory
Set-Location -Path $PSScriptRoot

Write-Host "📦 Installing dependencies..." -ForegroundColor Blue
npm install

Write-Host ""
Write-Host "🌱 Seeding database with sample data..." -ForegroundColor Blue
npm run seed

Write-Host ""
Write-Host "🚀 Starting development server..." -ForegroundColor Green
Write-Host ""
Write-Host "🌐 Open your browser and go to: http://localhost:3000" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

npm run dev