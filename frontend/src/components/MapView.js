import React from 'react';
import './MapView.css';

function MapView() {
return (
  <div className="map-view">

  <h2>FIELD SYSTEM MAP</h2>

  <div className="map-container">
    <div className="map-placeholder">

      <h3>Evidence Map</h3>

      <p>
        Geographic and temporal evidence visualization will appear here.
      </p>

      <p>
        Events, documents, images, video, and testimony records will be
        displayed by location and timestamp.
      </p>

    </div>
  </div>

  <div className="map-info">

    <h3>Controls</h3>

    <ul>
      <li>← Previous timestamp</li>
      <li>→ Next timestamp</li>
      <li>↑ Layer up</li>
      <li>↓ Layer down</li>
      <li>Ctrl + Play = Timeline playback</li>
    </ul>

    <h3>Active Layers</h3>

    <ul>
      <li>Evidence</li>
      <li>Imagery</li>
      <li>Documents</li>
      <li>Video</li>
      <li>Historical Context</li>
    </ul>

  </div>

</div>

);
}

export default MapView;
