# Quick Start Guide

Get Investigative Studio running in 5 minutes.

## Prerequisites

- Docker & Docker Compose installed
- Git installed
- Mac M4 (or any macOS/Linux system)

## Installation

### 1. Clone & Navigate

```bash
git clone https://github.com/AlmoofUM-creator/investigative-studio.git
cd investigative-studio
```

### 2. Start Everything

```bash
docker-compose up --build
```

**First time?** This will take 2-3 minutes to download images and build containers.

### 3. Access the Studio

Once you see "Listening on" messages:

- **Frontend**: http://localhost:3000
- **API**: http://localhost:5000
- **Database**: localhost:5432

**That's it!** You're ready to start investigating.

## First Steps

### Create an Investigation

1. Go to http://localhost:3000
2. Click "Investigations" tab
3. Fill in title and description
4. Click "Create Investigation"

### Add Data

```python
# Python example (in Docker)
from agents import DataAnalyzer
import pandas as pd

# Load your data
df = pd.read_csv('your_data.csv')

# Analyze
analyzer = DataAnalyzer()
results = analyzer.analyze_dataset(df)
```

### Map Your Data

1. Click "Map View" tab
2. Add location data
3. View on interactive map

## Common Commands

### View Logs

```bash
docker-compose logs -f
```

### Stop Services

```bash
docker-compose down
```

### Reset Database

```bash
docker-compose down -v
docker-compose up
```

### Access Database

```bash
docker-compose exec db psql -U studio_user -d investigative_studio
```

## Next Steps

- Read [Full Setup Guide](docs/setup.md)
- Learn about [AI Agents](docs/agents.md)
- Explore [Data Verification](docs/verification.md)
- Check out [3D Visualization](docs/3d-visualization.md)

## Troubleshooting

**Port already in use?**
```bash
# Change port in docker-compose.yml
# Example: change "3000:3000" to "3001:3000"
```

**Database connection error?**
```bash
# Wait 30 seconds and try again
# Check logs: docker-compose logs db
```

**Want to start fresh?**
```bash
docker-compose down -v
docker-compose up --build
```

## Getting Help

- Check docs folder for detailed guides
- Review examples in agents/ directory
- Open an issue on GitHub
- Read CONTRIBUTING.md for development

---

**Happy investigating!** 🔍
