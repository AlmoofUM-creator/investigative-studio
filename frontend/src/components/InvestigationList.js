import React, { useState } from 'react';
import './InvestigationList.css';

function InvestigationList({ investigations }) {
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const handleCreate = (e) => {
    e.preventDefault();
    // TODO: Send POST request to backend
    console.log('Creating investigation:', { title: newTitle, description: newDescription });
    setNewTitle('');
    setNewDescription('');
  };

  return (
    <div className="investigation-list">
      <h2>Investigations</h2>

      <div className="create-form">
        <h3>Create New Investigation</h3>
        <form onSubmit={handleCreate}>
          <input
            type="text"
            placeholder="Investigation Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Description (optional)"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            rows="4"
          />
          <button type="submit">Create Investigation</button>
        </form>
      </div>

      <div className="investigations">
        {investigations && investigations.length > 0 ? (
          investigations.map((inv, idx) => (
            <div key={idx} className="investigation-card">
              <h3>{inv.title}</h3>
              <p>{inv.description}</p>
              <div className="status-badge">{inv.status || 'active'}</div>
            </div>
          ))
        ) : (
          <p className="no-investigations">No investigations yet. Create one to get started!</p>
        )}
      </div>
    </div>
  );
}

export default InvestigationList;
