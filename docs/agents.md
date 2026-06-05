# AI Agents Documentation

Investigative Studio includes specialized AI agents for different analysis tasks.

## Agent Architecture

All agents follow these principles:

- **Deterministic**: Same input produces same output
- **Verifiable**: Logic is clear and can be audited
- **Documented**: All methods are well-documented
- **Non-proprietary**: No black-box algorithms

## Data Analyzer Agent

Analyzes datasets for patterns and anomalies.

### Usage

```python
from agents import DataAnalyzer
import pandas as pd

analyzer = DataAnalyzer()

# Load your data
df = pd.read_csv('investigation_data.csv')

# Statistical analysis
results = analyzer.analyze_dataset(df, analysis_type="statistical")

# Anomaly detection
anomalies = analyzer.detect_anomalies(df, threshold=2.0)
```

## Geospatial Agent

Performs location-based analysis and mapping.

### Usage

```python
from agents import GeospatialAgent

agent = GeospatialAgent()

# Calculate distance
dist = agent.calculate_distance(40.7128, -74.0060, 51.5074, -0.1278)

# Analyze movement
locations = [
    {'lat': 40.7128, 'lon': -74.0060},
    {'lat': 40.7230, 'lon': -74.0050}
]
pattern = agent.analyze_movement_pattern(locations)
```

## Verification Agent

Tracks data sources and maintains verification status.

### Usage

```python
from agents import VerificationAgent

agent = VerificationAgent()

# Create source record
source = agent.create_source_record(
    "Reuters",
    "news-outlet",
    "https://www.reuters.com",
    "News reporting"
)

# Verify source
verified = agent.verify_source(
    source,
    "Cross-referenced with AP News",
    0.9
)
```

## Best Practices

1. **Always Document Sources**: Use the Verification Agent to track all data
2. **Cross-Reference**: Use multiple data sources when possible
3. **Check Anomalies**: Investigate unusual data points
4. **Audit Trail**: Keep records of all analysis steps
5. **Export Results**: Save analysis for reporting
