# 3D Visualization & Animation Guide

Create 3D reconstructions of events and generate animations for investigative reports.

## Overview

The 3D visualization system integrates:

- **Three.js**: Web-based 3D rendering
- **Blender**: Professional 3D modeling and animation
- **Geospatial Data**: Real-world location integration
- **Timeline System**: Temporal synchronization of events

## Quick Start

### 1. Web-Based 3D Viewer

Simple 3D scene rendering in React:

```javascript
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Scene() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}

export default Scene;
```

### 2. Using Blender

Install Blender (free, open-source):
```bash
brew install blender
```

### 3. Geospatial Integration

Convert real-world locations to 3D coordinates:

```python
from agents import GeospatialAgent

agent = GeospatialAgent()

locations = [
    {'lat': 40.7128, 'lon': -74.0060, 'name': 'Event A'},
    {'lat': 40.7230, 'lon': -74.0050, 'name': 'Event B'}
]

# Analyze movement
movement = agent.analyze_movement_pattern(locations)
print(f"Total distance: {movement['total_distance_km']} km")
```

## Best Practices

1. **Use Real Data**: Base 3D models on verified geospatial data
2. **Document Assumptions**: Clearly state any reconstructed elements
3. **Scale Appropriately**: Maintain geographic scale accuracy
4. **Add Legends**: Include labels and explanations
5. **Version Control**: Keep different animation versions

## Resources

- **Three.js Documentation**: https://threejs.org/docs/
- **Blender Manual**: https://docs.blender.org/
- **QGIS**: https://www.qgis.org/
- **FFmpeg**: https://ffmpeg.org/documentation.html
