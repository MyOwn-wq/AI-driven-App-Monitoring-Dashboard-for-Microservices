import React, { useState } from 'react';

const Sidebar = ({ activeView, setActiveView }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '🏠' },
    { id: 'services', label: 'Services', icon: '📊' },
    { id: 'metrics', label: 'Metrics', icon: '📈' },
    { id: 'jobs', label: 'Jobs', icon: '🔄' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
    { id: 'about', label: 'About', icon: 'ℹ️' }
  ];

  const handleMenuClick = (id) => {
    setActiveView(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-dark-card border border-dark-border rounded-lg text-white"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-64 bg-dark-card border-r border-dark-border flex flex-col z-40 transform transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
      {/* Logo Section */}
      <div className="p-6 border-b border-dark-border">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">N</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">NeuraWatch</h1>
            <p className="text-xs text-dark-textSecondary">Monitoring</p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleMenuClick(item.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              activeView === item.id
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-dark-textSecondary hover:bg-dark-bg hover:text-white'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-dark-border">
        <div className="flex items-center space-x-2 text-xs text-dark-textSecondary">
          <div className="w-2 h-2 bg-status-healthy rounded-full animate-pulse"></div>
          <span>System Online</span>
        </div>
      </div>
    </div>
    </>
  );
};

export default Sidebar;

