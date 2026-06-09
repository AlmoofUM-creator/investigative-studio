import React, { useState, useEffect } from 'react';
import './App.css';
import MapView from './components/MapView';


function App() {
  const [currentPage, setCurrentPage] = useState('welcome');
  const [investigations, setInvestigations] = useState([]);

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
          className={currentPage === 'map' ? 'active' : ''}
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
        {currentPage === 'map' && <MapView />}
        {currentPage === 'archive' && <h2>Archive Screen</h2>}
        {currentPage === 'credits' && <h2>Credits Screen</h2>}
      </main>

      <footer className="app-footer">
        <p>Built with integrity. Powered by open-source. Serving truth.</p>
      </footer>
    </div>
  );
}

export default App;
