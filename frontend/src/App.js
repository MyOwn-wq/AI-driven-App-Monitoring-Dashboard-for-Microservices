import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MetricCard from './components/MetricCard';
import ServiceStatusCard from './components/ServiceStatusCard';
import JobResilienceCard from './components/JobResilienceCard';
import AboutView from './components/AboutView';
import SettingsView from './components/SettingsView';
import { fetchCPU, fetchMemory, fetchLatency, fetchStatus, fetchJobs } from './services/api';

function App() {
  const [activeView, setActiveView] = useState('dashboard');
  const [cpuData, setCpuData] = useState(null);
  const [memoryData, setMemoryData] = useState(null);
  const [latencyData, setLatencyData] = useState(null);
  const [statusData, setStatusData] = useState(null);
  const [jobsData, setJobsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAllData = async () => {
    try {
      setError(null);
      const [cpu, memory, latency, status, jobs] = await Promise.all([
        fetchCPU(),
        fetchMemory(),
        fetchLatency(),
        fetchStatus(),
        fetchJobs()
      ]);

      setCpuData(cpu.data);
      setMemoryData(memory.data);
      setLatencyData(latency.data);
      setStatusData(status.data);
      setJobsData(jobs.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Failed to fetch data. Make sure the backend is running.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
    // Refresh data every 30 seconds
    const interval = setInterval(fetchAllData, 30000);
    return () => clearInterval(interval);
  }, []);

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center h-screen">
          <div className="text-white text-xl">Loading...</div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex items-center justify-center h-screen">
          <div className="text-status-critical text-xl">{error}</div>
        </div>
      );
    }

    switch (activeView) {
      case 'dashboard':
        return (
          <>
            {/* Dashboard Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Microservices Monitoring Dashboard</h2>
              <p className="text-dark-textSecondary">
                Real-time monitoring for popular app microservices (Instagram, WhatsApp, Facebook, Google, YouTube, Netflix) • 
                AI-powered anomaly detection • 
                <span className="text-status-healthy ml-2">●</span> Auto-refresh every 30s
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {cpuData && (
                <MetricCard
                  title="CPU Usage"
                  current={cpuData.current}
                  unit={cpuData.unit}
                  data={cpuData.data}
                  status={cpuData.status}
                  anomalies={cpuData.anomalies}
                  server={cpuData.server}
                />
              )}
              {memoryData && (
                <MetricCard
                  title="Memory Usage"
                  current={memoryData.current}
                  unit={memoryData.unit}
                  data={memoryData.data}
                  status={memoryData.status}
                  anomalies={memoryData.anomalies}
                  server={memoryData.server}
                />
              )}
              {latencyData && (
                <MetricCard
                  title="API Latency"
                  current={latencyData.current}
                  unit={latencyData.unit}
                  data={latencyData.data}
                  status={latencyData.status}
                  anomalies={latencyData.anomalies}
                  server={latencyData.server}
                  endpoint={latencyData.endpoint}
                />
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {statusData && (
                <ServiceStatusCard
                  services={statusData.services}
                  summary={statusData.summary}
                />
              )}
              {jobsData && (
                <JobResilienceCard
                  jobs={jobsData.jobs}
                  metrics={jobsData.metrics}
                  status={jobsData.status}
                />
              )}
            </div>
          </>
        );

      case 'services':
        return (
          <>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Services</h2>
              <p className="text-dark-textSecondary">
                Monitor health status of all microservices
              </p>
            </div>
            {statusData && (
              <ServiceStatusCard
                services={statusData.services}
                summary={statusData.summary}
              />
            )}
          </>
        );

      case 'metrics':
        return (
          <>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Metrics</h2>
              <p className="text-dark-textSecondary">
                Real-time performance metrics
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cpuData && (
                <MetricCard
                  title="CPU Usage"
                  current={cpuData.current}
                  unit={cpuData.unit}
                  data={cpuData.data}
                  status={cpuData.status}
                  anomalies={cpuData.anomalies}
                  server={cpuData.server}
                />
              )}
              {memoryData && (
                <MetricCard
                  title="Memory Usage"
                  current={memoryData.current}
                  unit={memoryData.unit}
                  data={memoryData.data}
                  status={memoryData.status}
                  anomalies={memoryData.anomalies}
                  server={memoryData.server}
                />
              )}
              {latencyData && (
                <MetricCard
                  title="API Latency"
                  current={latencyData.current}
                  unit={latencyData.unit}
                  data={latencyData.data}
                  status={latencyData.status}
                  anomalies={latencyData.anomalies}
                  server={latencyData.server}
                  endpoint={latencyData.endpoint}
                />
              )}
            </div>
          </>
        );

      case 'jobs':
        return (
          <>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Jobs</h2>
              <p className="text-dark-textSecondary">
                Background jobs and scheduled tasks
              </p>
            </div>
            {jobsData && (
              <JobResilienceCard
                jobs={jobsData.jobs}
                metrics={jobsData.metrics}
                status={jobsData.status}
              />
            )}
          </>
        );

      case 'settings':
        return <SettingsView />;

      case 'about':
        return <AboutView />;

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg flex">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <div className="flex-1 lg:ml-64 p-4 lg:p-8">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;

