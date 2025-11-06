# Sidebar Implementation Plan

## Objective
Transform NeuraWatch dashboard to have a professional Grafana/Dynatrace-like sidebar with working navigation buttons and remove the educational project note.

## Changes Required

### 1. Remove Educational Project Note
- Remove the italic educational note from dashboard header
- Keep the main description but make it more professional

### 2. Create Sidebar Component
**Features:**
- Fixed left sidebar (similar to Grafana/Dynatrace)
- Logo and branding at top
- Navigation menu items:
  - 🏠 Dashboard (default view)
  - 📊 Services (filter to show only services)
  - 📈 Metrics (filter to show only metrics)
  - 🔄 Jobs (filter to show only jobs)
  - ⚙️ Settings (placeholder for future)
  - 📱 About (shows app info)
- Active state highlighting
- Hover effects
- Icons for each menu item
- Dark theme matching current design

### 3. Layout Changes
- Move from full-width layout to sidebar + content layout
- Sidebar: Fixed width (~240px), full height
- Content area: Flexible width with proper spacing
- Remove top navbar or integrate logo into sidebar
- Keep responsive design (sidebar collapses on mobile)

### 4. Working Navigation
- State management for active view
- Filter/display different sections based on selected menu:
  - Dashboard: Show all cards (current view)
  - Services: Show only Service Status Card (full width)
  - Metrics: Show only CPU, Memory, Latency cards
  - Jobs: Show only Job Resilience Card (full width)
  - Settings: Show placeholder settings page
  - About: Show app information

### 5. Visual Design
- Sidebar background: Dark card color (#1a1f2e)
- Active item: Highlighted with accent color
- Hover effects: Subtle background change
- Icons: Use emoji or simple SVG-like design
- Smooth transitions

## Implementation Steps
1. Create Sidebar.js component
2. Update App.js to include sidebar and manage active view state
3. Remove educational note from header
4. Update layout to accommodate sidebar
5. Add filtering logic for different views
6. Test all navigation buttons

