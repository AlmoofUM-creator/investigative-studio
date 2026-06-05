import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Welcome to Investigative Studio</h2>
      
      <div className="dashboard-grid">
        <div className="card">
          <h3>📊 Data Analysis</h3>
          <p>Import, analyze, and visualize verified data sources with AI-assisted pattern detection.</p>
        </div>
        
        <div className="card">
          <h3>🗺️ Geospatial Mapping</h3>
          <p>Map locations with PostGIS integration for precise geospatial analysis.</p>
        </div>
        
        <div className="card">
          <h3>🤖 AI Agents</h3>
          <p>Automated analysis using intelligent agents for pattern recognition and verification.</p>
        </div>
        
        <div className="card">
          <h3>🎬 3D Visualization</h3>
          <p>Create 3D reconstructions of events using verified geospatial data.</p>
        </div>
        
        <div className="card">
          <h3>📝 Report Generation</h3>
          <p>Generate comprehensive investigative reports with animations and visualizations.</p>
        </div>
        
        <div className="card">
          <h3>✓ Verification Workflow</h3>
          <p>Track data sources and maintain verification status for all analysis.</p>
        </div>
      </div>

      <div className="getting-started">
        <h3>Getting Started</h3>
        <ol>
          <li>Create a new investigation</li>
          <li>Import verified data sources</li>
          <li>Add geospatial locations</li>
          <li>Run AI analysis agents</li>
          <li>Visualize and generate reports</li>
        </ol>
      </div>
    </div>
  );
}

export default Dashboard;
