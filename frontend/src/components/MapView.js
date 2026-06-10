import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapView.css';

function MapView() {

const evidence = [
  {
   id: 1,
   title: "Test Evidence Record",
   lat: 34.0522,
   lng: -118.2437
  }
];

return (

  <div className="map-view">

  <h2>FIELD SYSTEM MAP</h2>

  <div className="map-container">

    <MapContainer
      center={[34.0522, -118.2437]}
      zoom={10}
      style={{ height: '500px', width: '100%' }}
    >

     <TileLayer
       attribution='&copy; OpenStreetMap contributors'
       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
     />
     
     {evidence.map(record => (
      <Marker
        key={record.id}
        position={[record.lat, record.lng]}
      >
        <Popup>
          {record.title}
        </Popup>
      </Marker>
))}     

  </MapContainer>
 
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
