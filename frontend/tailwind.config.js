/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0f1419',
          card: '#1a1f2e',
          border: '#2d3748',
          text: '#e2e8f0',
          textSecondary: '#a0aec0',
        },
        status: {
          healthy: '#10b981',
          warning: '#f59e0b',
          critical: '#ef4444',
          degraded: '#f59e0b',
          down: '#ef4444',
        }
      }
    },
  },
  plugins: [],
}

