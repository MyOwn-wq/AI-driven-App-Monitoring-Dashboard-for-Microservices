# Start both Backend and Frontend in separate windows
Write-Host "Starting NeuraWatch Development Environment..." -ForegroundColor Cyan
Write-Host ""
Write-Host "Backend will run on: http://localhost:5000" -ForegroundColor Yellow
Write-Host "Frontend will run on: http://localhost:3000" -ForegroundColor Yellow
Write-Host ""

# Start backend in new window
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD\backend'; npm start"

# Start frontend in new window
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD\frontend'; npm start"

Write-Host "Both servers are starting in separate windows..." -ForegroundColor Green
Write-Host "Close this window when done." -ForegroundColor Gray

