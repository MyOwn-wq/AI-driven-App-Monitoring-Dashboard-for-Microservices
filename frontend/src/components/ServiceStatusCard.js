import React from 'react';

const ServiceStatusCard = ({ services, summary }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'healthy': return 'text-status-healthy';
      case 'degraded': return 'text-status-warning';
      case 'down': return 'text-status-critical';
      default: return 'text-dark-textSecondary';
    }
  };

  const getStatusDot = (status) => {
    switch (status) {
      case 'healthy': return 'bg-status-healthy';
      case 'degraded': return 'bg-status-warning';
      case 'down': return 'bg-status-critical';
      default: return 'bg-dark-textSecondary';
    }
  };

  return (
    <div className="bg-dark-card border border-dark-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-dark-text">Service Status</h3>
        <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(summary.overallStatus)} bg-current/10`}>
          {summary.overallStatus}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-white">{summary.healthy}</div>
          <div className="text-xs text-status-healthy">Healthy</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-white">{summary.degraded}</div>
          <div className="text-xs text-status-warning">Degraded</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-white">{summary.down}</div>
          <div className="text-xs text-status-critical">Down</div>
        </div>
      </div>

      <div className="space-y-3">
        {services.map((service, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-dark-bg rounded-lg">
            <div className="flex items-center space-x-3">
              <div className={`w-2 h-2 rounded-full ${getStatusDot(service.status)}`}></div>
              <div>
                <div className="text-sm font-medium text-white">{service.name}</div>
                <div className="text-xs text-dark-textSecondary">
                  {service.server && `📍 ${service.server} • `}Uptime: {service.uptime}%
                </div>
              </div>
            </div>
            <span className={`text-xs font-medium capitalize ${getStatusColor(service.status)}`}>
              {service.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceStatusCard;

