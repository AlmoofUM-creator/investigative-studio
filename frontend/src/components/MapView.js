import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapView.css';

function MapView() {

const evidence = [
  {
   id: 1,
   investigation: "LA-PROTEST-001",
   title: "Test Evidence Record",
   category: "Evidence",
   date: "2026-06-10",
   description: "Initial evidence marker used for testing.",
   lat: 34.0522,
   lng: -118.2437
  },

{
   id: 2,
   investigation: "LA-PROTEST-001",
   title:"Witness Interview",
   category: "Testimony",
   date: "2026-06-09",
   description: "Recorded witness statement.",
   lat: 34.0600,
   lng: -118.2500
},

{
   id: 3,
   investigation: "LA-PROTEST-001",
   title:"Video Evidence",
   category: "Video",
   date: "2026-06-08",
   description: "Field footage collected during investigation.",
   lat: 34.0450,
   lng:-118.2350
},

{
   id: 4,
   investigation: "LA-PROTEST-001",
   title: "Document Archive",
   category: "Document",
   date: "2026-06-07",
   description: "Archived supporting documents.",
   lat: 34.0700,
   lng: -118.2600
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
          <strong>{record.title}</strong>
          <br />
          Investigations: {record.investigation}
          <br />
          Category: {record.category}
          <br />
          Date: {record.date}
          <br />
          {record.description}
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
