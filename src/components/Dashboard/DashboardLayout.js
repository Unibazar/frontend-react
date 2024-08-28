import React from 'react';

export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout">
      <div className="sidebar">{/* Sidebar navigation */}</div>
      <div className="main-content">{children}</div>
    </div>
  );
}