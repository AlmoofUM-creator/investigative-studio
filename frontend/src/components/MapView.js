import React from 'react';
import './MapView.css';

function MapView() {
  return (
    <div className="map-view">
      <h2>Geospatial Analysis</h2>
      
      <div className="map-container">
        <div className="map-placeholder">
          <p>🗺️ Interactive map will load here</p>
          <p style={{ fontSize: '0.9rem', marginTop: '1rem' }}>Powered by Leaflet + PostGIS</p>
        </div>
      </div>

      <div className="map-info">
        <h3>Features</h3>
        <ul>
          <li>Interactive mapping with Leaflet</li>
          <li>PostgreSQL PostGIS for geospatial queries</li>
          <li>Real-time location tracking</li>
          <li>Heat map generation</li>
          <li>Distance and area analysis</li>
          <li>Export analysis results</li>
        </ul>
      </div>
    </div>
  );
}

export default MapView;
