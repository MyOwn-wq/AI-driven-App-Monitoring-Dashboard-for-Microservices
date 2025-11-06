import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-dark-card border-b border-dark-border px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">N</span>
          </div>
          <h1 className="text-2xl font-bold text-white">NeuraWatch</h1>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-dark-textSecondary text-sm">AI-Powered Monitoring</span>
          <div className="w-2 h-2 bg-status-healthy rounded-full animate-pulse"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

