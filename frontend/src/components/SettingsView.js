import React, { useState } from 'react';

const SettingsView = () => {
  const [refreshInterval, setRefreshInterval] = useState(30);
  const [theme, setTheme] = useState('dark');

  return (
    <div className="bg-dark-card border border-dark-border rounded-lg p-8">
      <h2 className="text-2xl font-bold text-white mb-6">Settings</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-white font-medium mb-2">
            Auto-refresh Interval (seconds)
          </label>
          <input
            type="number"
            min="10"
            max="300"
            value={refreshInterval}
            onChange={(e) => setRefreshInterval(e.target.value)}
            className="w-full px-4 py-2 bg-dark-bg border border-dark-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-xs text-dark-textSecondary mt-1">
            Dashboard will refresh every {refreshInterval} seconds
          </p>
        </div>

        <div>
          <label className="block text-white font-medium mb-2">
            Theme
          </label>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="w-full px-4 py-2 bg-dark-bg border border-dark-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="dark">Dark</option>
            <option value="light" disabled>Light (Coming Soon)</option>
          </select>
        </div>

        <div className="pt-4 border-t border-dark-border">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsView;

