# NeuraWatch - AI-Driven App Monitoring Dashboard

> **Educational Project for BCA Students** - A mini Dynatrace/Grafana clone that monitors microservices from popular apps (Instagram, WhatsApp, Facebook, Google, YouTube, Netflix) to help students understand microservices architecture.

![NeuraWatch](https://img.shields.io/badge/NeuraWatch-Monitoring-blue)
![React](https://img.shields.io/badge/React-18.2.0-61dafb)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)

## 🎯 What is NeuraWatch?

NeuraWatch is an **educational monitoring dashboard** designed for BCA 3rd year students to understand microservices architecture. It monitors microservices from **popular apps** that students use daily, making it easy to understand:

- **Microservices Architecture** - Learn how big apps like Instagram, WhatsApp, Facebook are built using microservices
- **Service Health Monitoring** - See how each service (Feed, Stories, Messaging, etc.) is monitored separately
- **Job Resilience** - Understand background jobs and scheduled tasks in real apps
- **AI Anomaly Detection** - Learn how AI detects performance issues automatically

### 📱 What You're Monitoring (Popular Apps)

This dashboard shows real-time monitoring of microservices from apps you use every day:

#### **Instagram Services:**
- 📸 Instagram Feed Service
- 📹 Instagram Stories Service

#### **WhatsApp Services:**
- 💬 WhatsApp Messaging Service
- 📞 WhatsApp Video Call Service

#### **Facebook Services:**
- 🔐 Facebook Auth Service
- 📰 Facebook News Feed Service

#### **Google Services:**
- 🔍 Google Search API
- 🗺️ Google Maps Service

#### **YouTube & Netflix:**
- 🎥 YouTube Video Service
- 📺 Netflix Streaming Service

#### **Background Jobs:**
- Instagram - Daily Feed Update
- WhatsApp - Message Delivery Sync
- Facebook - Weekly Analytics Report
- Google - Search Index Update
- YouTube - Video Processing Queue
- Netflix - Recommendation Engine

## 📚 Why This Project is Perfect for BCA Students

1. **Easy to Understand** - Uses familiar app names (Instagram, WhatsApp, etc.) instead of abstract service names
2. **Real-world Example** - Shows how actual production apps are monitored
3. **Learn Microservices** - Understand how big apps are split into smaller services
4. **Full-Stack Experience** - React frontend + Node.js backend
5. **Modern Technologies** - Uses industry-standard tools (React, Express, TailwindCSS)

## Features

- 🎯 **Real-time Metrics Dashboard**: Monitor CPU usage, Memory usage, and API Latency from popular apps
- 📊 **Service Status Monitoring**: Track health of Instagram, WhatsApp, Facebook, Google services
- 🔄 **Job Resilience Tracking**: Monitor background jobs from real apps
- 🤖 **AI Anomaly Detection**: Automatic detection of anomalies (e.g., high latency, resource spikes)
- 🎨 **Grafana-like UI**: Professional dark-themed dashboard with beautiful visualizations
- 📈 **Interactive Charts**: Real-time graphs using Recharts
- 🌙 **Dark Theme**: Modern dark theme optimized for monitoring dashboards
- 🔄 **Auto-refresh**: Updates every 30 seconds automatically

## Tech Stack

### Frontend
- React 18.2.0
- TailwindCSS 3.3.6
- Recharts 2.10.3
- Axios 1.6.2

### Backend
- Node.js
- Express 4.18.2
- CORS enabled for cross-origin requests

## Project Structure

```
app_monitoring/
├── backend/
│   ├── server.js          # Express server with API endpoints
│   ├── package.json       # Backend dependencies
│   └── render.yaml        # Render.com deployment config
├── frontend/
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── Navbar.js
│   │   │   ├── MetricCard.js
│   │   │   ├── ServiceStatusCard.js
│   │   │   └── JobResilienceCard.js
│   │   ├── services/
│   │   │   └── api.js     # API service layer
│   │   ├── App.js         # Main app component
│   │   ├── index.js       # React entry point
│   │   └── index.css      # TailwindCSS styles
│   ├── public/
│   ├── package.json       # Frontend dependencies
│   └── render.yaml        # Render.com deployment config
└── README.md
```

## API Endpoints

The backend provides the following REST API endpoints:

- `GET /api/cpu` - CPU usage metrics with time series data
- `GET /api/memory` - Memory usage metrics with time series data
- `GET /api/latency` - API latency metrics with time series data
- `GET /api/status` - Service status information
- `GET /api/jobs` - Job resilience metrics and status
- `GET /health` - Health check endpoint

### Example Response

```json
{
  "server": "production-cluster-us-east-1",
  "current": 75.5,
  "data": [
    {
      "timestamp": "2024-01-01T12:00:00.000Z",
      "value": 75.5
    }
  ],
  "anomalies": [],
  "status": "healthy",
  "unit": "%"
}
```

## AI Anomaly Detection

The application includes a simple AI-powered anomaly detection system that:

- **CPU**: Flags anomalies when usage exceeds 90%
- **Memory**: Flags anomalies when usage exceeds 85%
- **Latency**: Flags anomalies when latency exceeds 500ms
- **Visual Indicators**: Anomalies are highlighted in red with warning messages

## Local Development Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   Or for production:
   ```bash
   npm start
   ```

   The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file (optional, defaults to localhost):
   ```env
   REACT_APP_API_URL=http://localhost:5000
   ```

4. Start the development server:
   ```bash
   npm start
   ```

   The frontend will run on `http://localhost:3000`

### Quick Start (Windows PowerShell)

Use the provided helper scripts:

```powershell
# Start both services in separate windows
.\start-dev.ps1

# Or start individually
.\start-backend.ps1
.\start-frontend.ps1
```

## Deployment to Render.com

This application is configured for deployment on Render.com with two separate services.

### Backend Deployment

1. Go to [Render.com Dashboard](https://dashboard.render.com)
2. Click "New +" and select "Web Service"
3. Connect your repository
4. Configure the service:
   - **Name**: `neurawatch-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment Variables**:
     - `NODE_ENV`: `production`
     - `PORT`: `10000` (Render will override this)

5. Deploy the service and note the URL (e.g., `https://neurawatch-backend.onrender.com`)

### Frontend Deployment

1. In Render.com Dashboard, click "New +" and select "Static Site"
2. Connect your repository
3. Configure the service:
   - **Name**: `neurawatch-frontend`
   - **Root Directory**: `frontend`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `build`
   - **Environment Variables**:
     - `REACT_APP_API_URL`: `https://neurawatch-backend.onrender.com` (use your backend URL)

4. Deploy the service

### Using render.yaml (Alternative)

If using Render Blueprint:

1. Push your code to a Git repository
2. In Render Dashboard, select "New Blueprint Instance"
3. Connect your repository
4. Render will automatically detect the `render.yaml` files and create the services

**Note**: Update the `REACT_APP_API_URL` in `frontend/render.yaml` with your actual backend URL after deployment.

## Environment Variables

### Backend
- `PORT`: Server port (default: 5000, Render uses 10000)
- `NODE_ENV`: Environment mode (production/development)

### Frontend
- `REACT_APP_API_URL`: Backend API URL (default: http://localhost:5000)

## Features Breakdown

### Dashboard Cards

1. **CPU Usage Card**
   - Real-time CPU percentage from Instagram & Facebook Services Cluster
   - Shows how much CPU resources these services are using
   - 20-point time series graph
   - Status indicators (healthy/warning/critical)

2. **Memory Usage Card**
   - Real-time memory percentage from WhatsApp & YouTube Services Cluster
   - Shows memory consumption of messaging and video services
   - 20-point time series graph
   - Status indicators (healthy/warning/critical)

3. **API Latency Card**
   - Real-time latency for Google Search API
   - Shows how fast the search responds (example: searching "BCA projects")
   - 20-point time series graph
   - Anomaly detection for latencies > 500ms

4. **Service Status Card**
   - Monitor all microservices from popular apps:
     - Instagram (Feed, Stories)
     - WhatsApp (Messaging, Video Calls)
     - Facebook (Auth, News Feed)
     - Google (Search, Maps)
     - YouTube & Netflix
   - Individual service health status
   - Uptime percentage for each service
   - Overall status summary

5. **Job Resilience Card**
   - Background jobs from popular apps:
     - Instagram - Daily Feed Update
     - WhatsApp - Message Delivery Sync
     - Facebook - Weekly Analytics
     - Google - Search Index Update
     - YouTube - Video Processing
     - Netflix - Recommendation Engine
   - Success rate metrics and history
   - Failure tracking

### Auto-refresh

The dashboard automatically refreshes every 30 seconds to show the latest metrics.

## Customization

### Adding New Metrics

1. Add a new endpoint in `backend/server.js`:
   ```javascript
   app.get('/api/yourmetric', (req, res) => {
     // Your logic here
   });
   ```

2. Add the API call in `frontend/src/services/api.js`
3. Add a new MetricCard in `frontend/src/App.js`

### Adjusting Anomaly Detection

Modify the thresholds in `backend/server.js`:
```javascript
const detectAnomalies = (data, threshold) => {
  // Customize threshold logic
};
```

## Troubleshooting

### Backend not connecting
- Ensure the backend is running on the correct port
- Check CORS settings if accessing from different domains
- Verify the `REACT_APP_API_URL` environment variable

### Charts not displaying
- Check browser console for errors
- Ensure Recharts is properly installed
- Verify data format matches expected structure

### Build failures on Render
- Check Node.js version compatibility
- Verify all dependencies are in package.json
- Check build logs for specific errors

## License

ISC

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues and questions, please open an issue on the repository.

---

**Built with ❤️ for monitoring microservices and job resilience**

*Inspired by Dynatrace and Grafana - A professional monitoring solution for production environments*
# AI-driven-App-Monitoring-Dashboard-for-Microservices
