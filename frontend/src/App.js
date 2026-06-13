import React, { useState, useEffect } from 'react';
import './App.css';
import MapView from './components/MapView';


function App() {
  const [currentPage, setCurrentPage] = useState('welcome');
  const [investigations, setInvestigations] = useState([]);
  const [activeInvestigation, setActiveInvestigation] = useState(null);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [mapEvent, setMapEvent] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const investigationData = {

   id: "LA-PROTEST-001",

   records: [
     {
       id: 1,
       title: "Test Evidence Record",
       category: "Evidence",
       date: "2026-06-10",
       description: "Initial evidence marker used for testing."
    },
      
     {
       id: 2,
       title: "Witness Interview",
       category: "Testimony",
       date: "2026-06-09",
       description: "Recorded witness statement."
    },

     {
       id: 3,
       title: "Video",
       category: "Video",
       date: "2026-06-08",
       description: "Field footage collected during investigation."
    },
     
     {
       id: 4,
       title: "Document Archive",
       category: "Document Archive",
       date: "2026-06-07",
       description: "Archived supporting documents."
    }
  ],

  timeline: [
    {
      id: 1,
      title: "Initial Evidence Collection",
      date: "2026-06-07",
      description: "Document archive entered into investigation.",
      lat: 34.0522,
      lng: -118.2437
    }, 

    {
      id: 2,
      title: "Video Captured",
      date: "2026-06-08",
      description: "Field footage collected.",
      lat: 34.0523,
      lng: -118.2440
    },

    {
      id: 3,
      title: "Witness Interview",
      date: "2026-06-09",
      description: "Witness statement recorded.",
      lat: 34.0524,
      lng: -118.2439
    },

    {
      id: 4,
      title: "Evidence Review",
      date: "2026-06-10",
      description: "Evidence record reviewed.",
      lat: 34.0525,
      lng: -118.2440
    }
  ]     
};

 const currentTimelineEvent =
    investigationData.timeline[currentEventIndex];

  const evidence = [
    {
      id: 1,
      title: "Test Evidence Record",
      lat: 34.0522,
      lng: -118.2437,
      category: "Evidence" 
    },
    {
     id: 2,
     title: "Witness Interview",
     lat: 34.0600,
     lng: -118.2500,
     category: "Testimony" 
    },
    {
     id: 3,
     title: "Video Evidence",
     lat:34.0450,
     lng: -118.2350,
     category: "Video"
    },
    {
     id: 4,
     title: "Document Archive",
     lat: 34.0700,
     lng: -118.2600,
     category: "Document"
   }
];

  useEffect(() => {
    // Fetch investigations from backend
    fetchInvestigations();
  }, []);

  const fetchInvestigations = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/investigations');
      const data = await response.json();
      setInvestigations(data);
    } catch (error) {
      console.error('Error fetching investigations:', error);
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>🔍 Investigative Studio</h1>
        <p>Open-source journalism analysis platform</p>
      </header>

      <nav className="app-nav">
        <button
          className={currentPage === 'welcome' ? 'active' : ''}
          onClick={() => setCurrentPage('welcome')}
        >
          Welcome
        </button>
        <button
          classo
Name={currentPage === 'map' ? 'active' : ''}
          onClick={() => setCurrentPage('map')}
        >
          Map
        </button>

          <button
           className={currentPage === 'archive' ? 'active' : ''}
           onClick={() => setCurrentPage('archive')}
          >
            Archive 
          </button>

          <button
            className={currentPage === 'credits' ? 'active' : ''}
            onClick={() => setCurrentPage('credits')}
          >
            Credits
          </button>
      </nav>
      
      <main className="app-main">
        {currentPage === 'welcome' && (
          <div>
            <h2>FIELD SYSTEM</h2>
            
            <p>
              FIELD SYSTEM is an investigative journalism platform designed to present evidence through geographic, temporal, and archival records. 
            </p>
              
            <h3> Methodology</h3> 
            
            <p>
              All evidence is organized by location, timestamp, and source. Materials are preserved in their original context whenever possible.      
            </p>

          <h3> Controls</h3>
          <ul>  
            <li>Map tab: Explore locations and events.</li>
            <li>Archive tab: Review evidence and documents.</li>
            <li>Credits tab: View sources, citations, and disclosures.</li>
          </ul>

          <button onClick={() => setCurrentPage('map')}>
            Enter Map
          </button>
        </div>
        )}
        {currentPage === 'investigation' && (
         <div>
           <h2>{activeInvestigation}</h2>
 
           <p>Investigation Dashboard</p>

           <p>Records: 4</p>
           <p>Evidence: 1</p>
           <p>Testimony: 1</p>
           <p>Video: 1</p>
           <p>Documents: 1</p>

           <button onClick={() => setCurrentPage('map')}>
             Open Map
           </button>
 
           <button onClick={() => setCurrentPage('evidence')}>
            Evidence
           </button>

           <button onClick={() => setCurrentPage('timeline')}>
            Timeline
           </button>

           <button onClick={() => setCurrentPage('documents')}>
             Documents
           </button>
        
         </div>
        )}
        {currentPage === 'map' && (
          <MapView 
            activeInvestigation={activeInvestigation} 
            mapEvent={mapEvent}
          />
        )}
        {currentPage === 'evidence' && (
          <div>

            <h2>Evidence</h2>

            <p>
              Investigation: <strong>{activeInvestigation}</strong>
            </p>

            <ul>

              {investigationData.records.map(record => (
               
               <li key={record.id}>
                       
                 <button onClick={() => setSelectedRecord(record)}>
                   {record.title}
                 </button>
               </li>
 
              ))}

            </ul>

        {selectedRecord && (
          <div>
         
            <h3>Selected Record</h3>

           <p>
             <strong>Title:</strong> {selectedRecord.title}
           </p>
      
           <p>
             <strong>Category:</strong> {selectedRecord.category}
           </p>

           <p>
             <strong>Date:</strong> {selectedRecord.date}
           </p>

           <p>
             <strong>Description:</strong> {selectedRecord.description}
           </p>

  </div>
)}

            <button onClick={() => setCurrentPage('investigation')}>
             Back to Dashboard
            </button>

          </div>
          )}

        {currentPage === 'timeline' && (
         <div>

           <h2>Timeline</h2>

           <p>
            Investigation: <strong>{activeInvestigation}</strong>
           </p>

           <div>

             <button
               onClick={() => {
                 if (currentEventIndex > 0) {
                   setCurrentEventIndex(
                     currentEventIndex - 1
                   );
                 }
               }}
             >
               Previous Event 
             </button>

              <button
                onClick={() => {
                  if (
                    currentEventIndex <
                    investigationData.timeline.length - 1
                  ) {
                    setCurrentEventIndex(
                      currentEventIndex + 1
                    );
                  }
                }}
              >
                Next Event
              </button>

           </div>

           <div>

             <h3>Current Event</h3>

             <p>
               {currentTimelineEvent.title}
             </p>

             <button
               onClick={() => {
                setMapEvent(currentTimelineEvent);
                setCurrentPage('map');
              }}
            >
              View Current Event On Map
            </button>
                
          </div> 

           <ul>

             {investigationData.timeline.map(event => (
              
              <li key={event.id}>

                <button onClick={() => setSelectedEvent(event)}>
                  {event.title}
                </button>
             </li>
           
            ))}
            
          </ul>
          
          {selectedEvent && (
            <div>
                
              <h3>Selected Event</h3>

              <p>
                <strong>Title:</strong> {selectedEvent.title}
              </p>

              <p>
                 <strong>Date:</strong> {selectedEvent.date}
              </p>

              <p>
                <strong>Description:</strong> {selectedEvent.description}
              </p>

              <button 
                onClick={() => {
                  setMapEvent(selectedEvent);
                  setCurrentPage('map');
                }}
              >                      
                View On Map
              </button>
              
            </div>
        )}

           <button onClick={() => setCurrentPage('investigation')}>
             Back to Dashboard
           </button>

         </div>
        )}

        {currentPage === 'documents' && (
          <div>
            <h2>Documents</h2>
            <p>Document archive coming soon.</p>
          </div>
        )}

        {currentPage === 'archive' && (
          <div>
            <h2>Archive Screen</h2>
          <div className="archive-card">
            <h3>LA-PROTEST-001</h3>

            <p>Records: 4</p>
            <p>Evidence: 1</p>
            <p>Testimony: 1</p>
            <p>Video: 1</p>
            <p>Documents: 1</p>

            <button
              onClick={() => {
                setActiveInvestigation('LA-PROTEST-001');
                setCurrentPage('investigation');
              }}
            >
              Open Investigation
            </button>
          </div>
            <p>
              Respository of all collected evidence, documents, imegry, video, geospatial references, and supporting records.
            </p>

            <h3>Evidence Categories</h3>
            <ul>
              <li>Documents: Official records, reports, and publications.</li>
              <li>Media: Photos, videos, and audio recordings.</li>
              <li>Geospatial: Maps, satellite imagery, and location data.</li>
              <li>Testimonies: Interviews, statements, and witness accounts.</li>
            </ul>

            <h3>Navigation</h3>
            <p>
              Materials will be indexed by timestamp, location, and source.
            </p>
          </div>
        )}  
        {currentPage === 'credits' && (
          <div>
            <h2>Credits</h2>

            <p>
              FIELD SYSTEM was developed as an investigative journalism platform for geographic, temporal, and archival evidence presentation.
            </p>

            <h3>Source & Evidence</h3>
            <p>
              All source materials, documents, imagery, video, testimony, and records will be cited and preserved within the archive.
            </p>

            <h3>AI Assistance Disclosure</h3>
            <p>
              AI tools were used to assist with software development, research organization, and platform construction. All investigative findings, evidence review, and editorial decisions remain under human control.
            </p>

            <h3>Project Notes</h3>
            <p>
             This platform is intended to provide transparant access to evidence, context, and supporting documentation.
            </p>
          </div>
)}
      </main>

      <footer className="app-footer">
        <p>Built with integrity. Powered by open-source. Serving truth.</p>
      </footer>
    </div>
  );
}

export default App;
