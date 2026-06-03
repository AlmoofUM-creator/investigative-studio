"""
Geospatial Analysis Agent
Performs geospatial analysis on location data
"""

from typing import Dict, List, Tuple, Any
import geopandas as gpd
from shapely.geometry import Point, LineString, Polygon
import math

class GeospatialAgent:
    """AI agent for geospatial analysis"""
    
    def __init__(self):
        self.name = "Geospatial Agent"
        self.version = "0.1.0"
    
    def calculate_distance(self, lat1: float, lon1: float, lat2: float, lon2: float) -> float:
        """
        Calculate distance between two points using Haversine formula
        
        Args:
            lat1, lon1: First point (latitude, longitude)
            lat2, lon2: Second point (latitude, longitude)
        
        Returns:
            Distance in kilometers
        """
        R = 6371  # Earth radius in kilometers
        
        lat1_rad = math.radians(lat1)
        lat2_rad = math.radians(lat2)
        delta_lat = math.radians(lat2 - lat1)
        delta_lon = math.radians(lon2 - lon1)
        
        a = math.sin(delta_lat/2)**2 + math.cos(lat1_rad) * math.cos(lat2_rad) * math.sin(delta_lon/2)**2
        c = 2 * math.atan2(math.sqrt(a), math.sqrt(1-a))
        
        return R * c
    
    def create_location_buffer(self, lat: float, lon: float, radius_m: float) -> Polygon:
        """
        Create a buffer polygon around a location
        
        Args:
            lat, lon: Center point
            radius_m: Radius in meters
        
        Returns:
            Shapely Polygon representing the buffer
        """
        point = Point(lon, lat)
        # Rough conversion to degrees (approximate)
        radius_degrees = radius_m / 111000
        return point.buffer(radius_degrees)
    
    def check_point_in_polygon(self, lat: float, lon: float, polygon: Polygon) -> bool:
        """
        Check if a point is inside a polygon
        
        Args:
            lat, lon: Point to check
            polygon: Shapely Polygon
        
        Returns:
            Boolean indicating if point is inside polygon
        """
        point = Point(lon, lat)
        return polygon.contains(point)
    
    def analyze_movement_pattern(self, locations: List[Dict[str, float]]) -> Dict[str, Any]:
        """
        Analyze movement pattern from a series of locations
        
        Args:
            locations: List of dicts with 'lat' and 'lon' keys, ordered by time
        
        Returns:
            Dictionary with movement analysis
        """
        if len(locations) < 2:
            return {'error': 'Need at least 2 locations'}
        
        total_distance = 0
        segment_distances = []
        
        for i in range(len(locations) - 1):
            dist = self.calculate_distance(
                locations[i]['lat'], locations[i]['lon'],
                locations[i+1]['lat'], locations[i+1]['lon']
            )
            total_distance += dist
            segment_distances.append(dist)
        
        return {
            'total_distance_km': round(total_distance, 3),
            'num_segments': len(segment_distances),
            'average_segment_distance_km': round(total_distance / len(segment_distances), 3),
            'max_segment_distance_km': round(max(segment_distances), 3),
            'min_segment_distance_km': round(min(segment_distances), 3)
        }
    
    def identify_clusters(self, locations: List[Dict[str, float]], radius_km: float = 0.5) -> Dict[str, Any]:
        """
        Identify clusters of locations
        
        Args:
            locations: List of location dicts
            radius_km: Clustering radius in kilometers
        
        Returns:
            Dictionary with cluster information
        """
        if not locations:
            return {'clusters': []}
        
        clusters = []
        visited = set()
        
        for i, loc in enumerate(locations):
            if i in visited:
                continue
            
            cluster = [loc]
            visited.add(i)
            
            for j in range(i+1, len(locations)):
                if j not in visited:
                    dist = self.calculate_distance(
                        loc['lat'], loc['lon'],
                        locations[j]['lat'], locations[j]['lon']
                    )
                    if dist <= radius_km:
                        cluster.append(locations[j])
                        visited.add(j)
            
            clusters.append({
                'size': len(cluster),
                'center_lat': sum(l['lat'] for l in cluster) / len(cluster),
                'center_lon': sum(l['lon'] for l in cluster) / len(cluster),
                'locations': cluster
            })
        
        return {'clusters': clusters, 'num_clusters': len(clusters)}
