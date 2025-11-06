const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Helper function to generate random value in range
const randomInRange = (min, max) => Math.random() * (max - min) + min;

// Helper function to generate time series data
const generateTimeSeries = (points = 20, min = 0, max = 100) => {
  const data = [];
  const now = Date.now();
  for (let i = points - 1; i >= 0; i--) {
    data.push({
      timestamp: new Date(now - i * 60000).toISOString(),
      value: randomInRange(min, max)
    });
  }
  return data;
};

// AI Anomaly Detection
const detectAnomalies = (data, threshold, type = 'generic') => {
  const anomalies = [];
  data.forEach((point) => {
    // Simple anomaly detection: mark as anomaly if value exceeds threshold
    if (point.value > threshold) {
      anomalies.push({
        timestamp: point.timestamp,
        value: point.value,
        type: type,
        severity: 'critical'
      });
    }
  });
  return anomalies;
};

// GET /api/cpu - CPU usage metrics
app.get('/api/cpu', (req, res) => {
  const data = generateTimeSeries(20, 0, 100);
  const current = data[data.length - 1].value;
  const anomalies = detectAnomalies(data, 90, 'high_cpu');
  
  res.json({
    server: 'Instagram & Facebook Services Cluster',
    current: parseFloat(current.toFixed(2)),
    data: data,
    anomalies: anomalies,
    status: current > 90 ? 'critical' : current > 70 ? 'warning' : 'healthy',
    unit: '%'
  });
});

// GET /api/memory - Memory usage metrics
app.get('/api/memory', (req, res) => {
  const data = generateTimeSeries(20, 0, 100);
  const current = data[data.length - 1].value;
  const anomalies = detectAnomalies(data, 85, 'high_memory');
  
  res.json({
    server: 'WhatsApp & YouTube Services Cluster',
    current: parseFloat(current.toFixed(2)),
    data: data,
    anomalies: anomalies,
    status: current > 85 ? 'critical' : current > 75 ? 'warning' : 'healthy',
    unit: '%'
  });
});

// GET /api/latency - API Latency metrics
app.get('/api/latency', (req, res) => {
  const data = generateTimeSeries(20, 50, 800);
  const current = data[data.length - 1].value;
  const anomalies = detectAnomalies(data, 500, 'high_latency');
  
  res.json({
    server: 'Google Search API Gateway',
    endpoint: '/api/v1/search?q=BCA+projects',
    current: parseFloat(current.toFixed(2)),
    data: data,
    anomalies: anomalies,
    status: current > 500 ? 'critical' : current > 300 ? 'warning' : 'healthy',
    unit: 'ms'
  });
});

// GET /api/status - Service Status
// Microservices from popular apps - helping students understand microservices architecture
app.get('/api/status', (req, res) => {
  const services = [
    { name: 'Instagram Feed Service', server: 'aws-us-east-1', status: 'healthy', uptime: 99.9, lastCheck: new Date().toISOString() },
    { name: 'Instagram Stories Service', server: 'aws-us-east-1', status: 'healthy', uptime: 99.8, lastCheck: new Date().toISOString() },
    { name: 'WhatsApp Messaging Service', server: 'aws-us-east-1', status: Math.random() > 0.8 ? 'degraded' : 'healthy', uptime: 99.5, lastCheck: new Date().toISOString() },
    { name: 'WhatsApp Video Call Service', server: 'aws-us-west-2', status: 'healthy', uptime: 99.9, lastCheck: new Date().toISOString() },
    { name: 'Facebook Auth Service', server: 'aws-eu-west-1', status: 'healthy', uptime: 99.7, lastCheck: new Date().toISOString() },
    { name: 'Facebook News Feed Service', server: 'aws-us-east-1', status: Math.random() > 0.9 ? 'down' : 'healthy', uptime: 98.5, lastCheck: new Date().toISOString() },
    { name: 'Google Search API', server: 'aws-us-east-1', status: 'healthy', uptime: 99.9, lastCheck: new Date().toISOString() },
    { name: 'Google Maps Service', server: 'aws-us-east-1', status: 'healthy', uptime: 99.8, lastCheck: new Date().toISOString() },
    { name: 'YouTube Video Service', server: 'aws-us-west-2', status: 'healthy', uptime: 99.6, lastCheck: new Date().toISOString() },
    { name: 'Netflix Streaming Service', server: 'aws-eu-west-1', status: 'healthy', uptime: 99.9, lastCheck: new Date().toISOString() }
  ];
  
  const healthyCount = services.filter(s => s.status === 'healthy').length;
  const totalServices = services.length;
  
  res.json({
    services: services,
    summary: {
      total: totalServices,
      healthy: healthyCount,
      degraded: services.filter(s => s.status === 'degraded').length,
      down: services.filter(s => s.status === 'down').length,
      overallStatus: healthyCount === totalServices ? 'healthy' : healthyCount > totalServices * 0.7 ? 'degraded' : 'critical'
    }
  });
});

// GET /api/jobs - Job Resilience metrics
// Background jobs from popular apps - helping students understand scheduled tasks
app.get('/api/jobs', (req, res) => {
  const jobs = [
    { name: 'Instagram - Daily Feed Update', server: 'job-worker-01', status: 'running', successRate: 98.5, failures: 12, lastRun: new Date().toISOString() },
    { name: 'WhatsApp - Message Delivery Sync', server: 'job-worker-02', status: 'running', successRate: 99.2, failures: 5, lastRun: new Date().toISOString() },
    { name: 'Facebook - Weekly Analytics Report', server: 'job-worker-01', status: 'running', successRate: 97.8, failures: 18, lastRun: new Date().toISOString() },
    { name: 'Google - Search Index Update', server: 'job-worker-03', status: 'running', successRate: 99.9, failures: 1, lastRun: new Date().toISOString() },
    { name: 'YouTube - Video Processing Queue', server: 'backup-server-01', status: Math.random() > 0.85 ? 'failed' : 'running', successRate: 96.5, failures: 28, lastRun: new Date().toISOString() },
    { name: 'Netflix - Recommendation Engine', server: 'job-worker-02', status: 'running', successRate: 99.5, failures: 3, lastRun: new Date().toISOString() }
  ];
  
  const runningJobs = jobs.filter(j => j.status === 'running').length;
  const totalJobs = jobs.length;
  const avgSuccessRate = jobs.reduce((sum, j) => sum + j.successRate, 0) / totalJobs;
  
  // Generate time series for job success rate
  const successRateData = generateTimeSeries(20, 95, 100);
  
  res.json({
    jobs: jobs,
    metrics: {
      total: totalJobs,
      running: runningJobs,
      failed: jobs.filter(j => j.status === 'failed').length,
      averageSuccessRate: parseFloat(avgSuccessRate.toFixed(2)),
      successRateHistory: successRateData
    },
    status: runningJobs === totalJobs && avgSuccessRate > 95 ? 'healthy' : avgSuccessRate > 90 ? 'warning' : 'critical'
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

