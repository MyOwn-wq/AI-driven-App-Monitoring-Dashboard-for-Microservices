import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const MetricCard = ({ title, current, unit, data, status, anomalies = [], server, endpoint }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'healthy': return 'text-status-healthy';
      case 'warning': return 'text-status-warning';
      case 'critical': return 'text-status-critical';
      default: return 'text-dark-textSecondary';
    }
  };

  const getStatusBgColor = (status) => {
    switch (status) {
      case 'healthy': return 'bg-status-healthy/10 border-status-healthy/30';
      case 'warning': return 'bg-status-warning/10 border-status-warning/30';
      case 'critical': return 'bg-status-critical/10 border-status-critical/30';
      default: return 'bg-dark-card border-dark-border';
    }
  };

  // Format time for chart
  const chartData = data.map(item => ({
    ...item,
    time: new Date(item.timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
  }));

  return (
    <div className={`bg-dark-card border border-dark-border rounded-lg p-6 ${getStatusBgColor(status)}`}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-dark-text">{title}</h3>
          {server && (
            <div className="text-xs text-dark-textSecondary mt-1">
              📍 {server}
            </div>
          )}
          {endpoint && (
            <div className="text-xs text-dark-textSecondary mt-0.5">
              🔗 {endpoint}
            </div>
          )}
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(status)} bg-current/10`}>
          {status}
        </span>
      </div>
      
      <div className="mb-4">
        <div className="flex items-baseline space-x-2">
          <span className="text-3xl font-bold text-white">{current}</span>
          <span className="text-dark-textSecondary">{unit}</span>
        </div>
        {anomalies.length > 0 && (
          <div className="mt-2 text-xs text-status-critical">
            ⚠️ {anomalies.length} anomaly/anomalies detected
          </div>
        )}
      </div>

      <div className="h-32">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" />
            <XAxis 
              dataKey="time" 
              stroke="#a0aec0"
              fontSize={10}
              tick={{ fill: '#a0aec0' }}
            />
            <YAxis 
              stroke="#a0aec0"
              fontSize={10}
              tick={{ fill: '#a0aec0' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1a1f2e', 
                border: '1px solid #2d3748',
                borderRadius: '6px',
                color: '#e2e8f0'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke={status === 'critical' ? '#ef4444' : status === 'warning' ? '#f59e0b' : '#10b981'}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MetricCard;

