# Setup Guide

## Prerequisites

- **Docker** (version 20.10+)
- **Docker Compose** (version 1.29+)
- **Git**
- Mac M4 (or compatible system)

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/AlmoofUM-creator/investigative-studio.git
cd investigative-studio
```

### 2. Configure Environment Variables

Copy the example environment file:

```bash
cp backend/.env.example backend/.env
```

Edit `backend/.env` with your configuration (change the database password):

```
DATABASE_URL=postgresql://studio_user:your_secure_password@db:5432/investigative_studio
FLASK_ENV=development
FLASK_APP=app.py
API_PORT=5000
```

### 3. Start Docker Containers

```bash
docker-compose up --build
```

This will:
- Build the Python backend
- Build the React frontend
- Start PostgreSQL with PostGIS
- Initialize the database schema

### 4. Access the Application

Once all services are running:

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Database**: localhost:5432

## Verify Installation

### Check Backend Health

```bash
curl http://localhost:5000/health
```

Expected response:
```json
{
  "status": "healthy",
  "service": "investigative-studio-backend"
}
```

### Check Database Connection

```bash
docker exec investigative-db psql -U studio_user -d investigative_studio -c "\dt"
```

This should list all tables created by the initialization script.

## Common Issues

### Docker Build Fails

**Solution**: Ensure Docker is running and you have sufficient disk space:

```bash
docker system prune -a
docker-compose up --build
```

### Port Already in Use

If port 3000, 5000, or 5432 is already in use:

Edit `docker-compose.yml` and change the port mappings:

```yaml
ports:
  - "3001:3000"  # Change left number
```

### Database Connection Error

**Solution**: Wait for database to be ready (usually 10-15 seconds). Check logs:

```bash
docker-compose logs db
```

## Development Workflow

### Running Tests

```bash
docker-compose exec backend python -m pytest
```

### Viewing Logs

```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f backend
docker-compose logs -f frontend
```

### Stopping Services

```bash
docker-compose down
```

### Database Access

Connect directly to PostgreSQL:

```bash
docker-compose exec db psql -U studio_user -d investigative_studio
```

## Next Steps

- Read [Data Verification Workflow](verification.md)
- Explore [AI Agents Documentation](agents.md)
- Learn about [3D Visualization](3d-visualization.md)
