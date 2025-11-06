import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const JobResilienceCard = ({ jobs, metrics, status }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'healthy': return 'text-status-healthy';
      case 'warning': return 'text-status-warning';
      case 'critical': return 'text-status-critical';
      default: return 'text-dark-textSecondary';
    }
  };

  const getJobStatusColor = (status) => {
    switch (status) {
      case 'running': return 'text-status-healthy';
      case 'failed': return 'text-status-critical';
      default: return 'text-dark-textSecondary';
    }
  };

  const getJobStatusDot = (status) => {
    switch (status) {
      case 'running': return 'bg-status-healthy';
      case 'failed': return 'bg-status-critical';
      default: return 'bg-dark-textSecondary';
    }
  };

  // Format time for chart
  const chartData = metrics.successRateHistory.map(item => ({
    ...item,
    time: new Date(item.timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
  }));

  return (
    <div className="bg-dark-card border border-dark-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-dark-text">Job Resilience</h3>
        <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(status)} bg-current/10`}>
          {status}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-white">{metrics.running}</div>
          <div className="text-xs text-status-healthy">Running</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-white">{metrics.failed}</div>
          <div className="text-xs text-status-critical">Failed</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-white">{metrics.averageSuccessRate}%</div>
          <div className="text-xs text-dark-textSecondary">Avg Success</div>
        </div>
      </div>

      <div className="h-32 mb-6">
        <div className="text-xs text-dark-textSecondary mb-2">Success Rate History</div>
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
              domain={[90, 100]}
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

      <div className="space-y-3">
        {jobs.map((job, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-dark-bg rounded-lg">
            <div className="flex items-center space-x-3">
              <div className={`w-2 h-2 rounded-full ${getJobStatusDot(job.status)}`}></div>
              <div>
                <div className="text-sm font-medium text-white">{job.name}</div>
                <div className="text-xs text-dark-textSecondary">
                  {job.server && `📍 ${job.server} • `}Success: {job.successRate}% | Failures: {job.failures}
                </div>
              </div>
            </div>
            <span className={`text-xs font-medium capitalize ${getJobStatusColor(job.status)}`}>
              {job.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobResilienceCard;

