import React from 'react';

const AboutView = () => {
  return (
    <div className="bg-dark-card border border-dark-border rounded-lg p-8">
      <h2 className="text-2xl font-bold text-white mb-6">About NeuraWatch</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">What is NeuraWatch?</h3>
          <p className="text-dark-textSecondary">
            NeuraWatch is a professional monitoring dashboard for microservices infrastructure. 
            It provides real-time monitoring for popular app microservices including Instagram, 
            WhatsApp, Facebook, Google, YouTube, and Netflix.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Features</h3>
          <ul className="list-disc list-inside space-y-2 text-dark-textSecondary">
            <li>Real-time CPU, Memory, and API Latency monitoring</li>
            <li>Service health status tracking</li>
            <li>Job resilience monitoring</li>
            <li>AI-powered anomaly detection</li>
            <li>Auto-refresh every 30 seconds</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Tech Stack</h3>
          <div className="grid grid-cols-2 gap-4 text-dark-textSecondary">
            <div>
              <p className="font-medium text-white mb-1">Frontend:</p>
              <p>React, TailwindCSS, Recharts</p>
            </div>
            <div>
              <p className="font-medium text-white mb-1">Backend:</p>
              <p>Node.js, Express</p>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-dark-border">
          <p className="text-sm text-dark-textSecondary">
            Built with ❤️ for monitoring microservices and job resilience
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutView;

