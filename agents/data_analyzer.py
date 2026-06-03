"""
Data Analysis Agent
Processes and analyzes verified data for patterns and anomalies
"""

import pandas as pd
import numpy as np
from typing import Dict, List, Any

class DataAnalyzer:
    """AI agent for analyzing investigative data"""
    
    def __init__(self):
        self.name = "Data Analyzer"
        self.version = "0.1.0"
    
    def analyze_dataset(self, data: pd.DataFrame, analysis_type: str = "statistical") -> Dict[str, Any]:
        """
        Analyze a dataset for patterns and anomalies
        
        Args:
            data: Pandas DataFrame with data to analyze
            analysis_type: Type of analysis ('statistical', 'temporal', 'spatial')
        
        Returns:
            Dictionary with analysis results
        """
        results = {
            'analysis_type': analysis_type,
            'timestamp': pd.Timestamp.now(),
            'data_shape': data.shape,
            'data_summary': {}
        }
        
        if analysis_type == "statistical":
            results['data_summary'] = {
                'mean': data.mean().to_dict() if len(data.select_dtypes(include=[np.number])) > 0 else {},
                'std': data.std().to_dict() if len(data.select_dtypes(include=[np.number])) > 0 else {},
                'count': len(data)
            }
        
        return results
    
    def detect_anomalies(self, data: pd.DataFrame, threshold: float = 2.0) -> Dict[str, Any]:
        """
        Detect anomalies in data using statistical methods
        
        Args:
            data: Pandas DataFrame
            threshold: Standard deviation threshold for anomaly detection
        
        Returns:
            Dictionary with anomaly detection results
        """
        numeric_data = data.select_dtypes(include=[np.number])
        
        anomalies = {}
        for column in numeric_data.columns:
            mean = numeric_data[column].mean()
            std = numeric_data[column].std()
            z_scores = np.abs((numeric_data[column] - mean) / std)
            anomaly_mask = z_scores > threshold
            anomalies[column] = {
                'count': int(anomaly_mask.sum()),
                'percentage': float((anomaly_mask.sum() / len(data)) * 100),
                'indices': anomaly_mask.index[anomaly_mask].tolist()
            }
        
        return {
            'anomalies': anomalies,
            'threshold': threshold,
            'total_anomalies': sum(a['count'] for a in anomalies.values())
        }
    
    def compare_datasets(self, data1: pd.DataFrame, data2: pd.DataFrame) -> Dict[str, Any]:
        """
        Compare two datasets for differences
        
        Args:
            data1: First DataFrame
            data2: Second DataFrame
        
        Returns:
            Dictionary with comparison results
        """
        return {
            'data1_shape': data1.shape,
            'data2_shape': data2.shape,
            'common_columns': list(set(data1.columns) & set(data2.columns)),
            'unique_to_data1': list(set(data1.columns) - set(data2.columns)),
            'unique_to_data2': list(set(data2.columns) - set(data1.columns))
        }
