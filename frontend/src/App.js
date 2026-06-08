import React, { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import InvestigationList from './components/InvestigationList';
import MapView from './components/MapView';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
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
          className={currentPage === 'dashboard' ? 'active' : ''} 
          onClick={() => setCurrentPage('dashboard')}
        >
          Dashboard
        </button>
        <button 
          className={currentPage === 'investigations' ? 'active' : ''} 
          onClick={() => setCurrentPage('investigations')}
        >
          Investigations
        </button>
        <button 
          className={currentPage === 'map' ? 'active' : ''} 
          onClick={() => setCurrentPage('map')}
        >
          Map View
        </button>
      </nav>

      <main className="app-main">
        {currentPage === 'dashboard' && <Dashboard />}
        {currentPage === 'investigations' && <InvestigationList investigations={investigations} />}
        {currentPage === 'map' && <MapView />}
      </main>

      <footer className="app-footer">
        <p>Built with integrity. Powered by open-source. Serving truth.</p>
      </footer>
    </div>
  );
}

export default App;
