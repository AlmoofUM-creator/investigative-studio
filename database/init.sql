-- Create PostGIS extension
CREATE EXTENSION IF NOT EXISTS postgis;
CREATE EXTENSION IF NOT EXISTS postgis_topology;

-- Investigations table
CREATE TABLE investigations (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(50) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Events table
CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    investigation_id INTEGER NOT NULL REFERENCES investigations(id),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    event_time TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (investigation_id) REFERENCES investigations(id) ON DELETE CASCADE
);

-- Geospatial data table
CREATE TABLE locations (
    id SERIAL PRIMARY KEY,
    investigation_id INTEGER NOT NULL,
    event_id INTEGER,
    name VARCHAR(255),
    description TEXT,
    geometry GEOMETRY(Point, 4326),
    altitude FLOAT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (investigation_id) REFERENCES investigations(id) ON DELETE CASCADE,
    FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE SET NULL
);

-- Spatial index for performance
CREATE INDEX idx_locations_geometry ON locations USING GIST (geometry);

-- Data sources table (for tracking verification)
CREATE TABLE data_sources (
    id SERIAL PRIMARY KEY,
    investigation_id INTEGER NOT NULL,
    source_name VARCHAR(255),
    source_type VARCHAR(100),
    source_url TEXT,
    description TEXT,
    verified BOOLEAN DEFAULT FALSE,
    verification_notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (investigation_id) REFERENCES investigations(id) ON DELETE CASCADE
);

-- Analysis results table
CREATE TABLE analysis_results (
    id SERIAL PRIMARY KEY,
    investigation_id INTEGER NOT NULL,
    analysis_type VARCHAR(100),
    result_data JSONB,
    confidence_score FLOAT,
    analyst_notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (investigation_id) REFERENCES investigations(id) ON DELETE CASCADE
);

-- Media/Evidence files table
CREATE TABLE media_files (
    id SERIAL PRIMARY KEY,
    investigation_id INTEGER NOT NULL,
    file_name VARCHAR(255),
    file_path TEXT,
    file_type VARCHAR(50),
    file_size INTEGER,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (investigation_id) REFERENCES investigations(id) ON DELETE CASCADE
);

-- Create indexes for common queries
CREATE INDEX idx_investigations_status ON investigations(status);
CREATE INDEX idx_events_investigation ON events(investigation_id);
CREATE INDEX idx_analysis_investigation ON analysis_results(investigation_id);
