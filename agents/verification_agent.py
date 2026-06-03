"""
Verification Agent
Tracks data sources and maintains verification status
"""

from typing import Dict, List, Any
from datetime import datetime

class VerificationAgent:
    """AI agent for data verification and source tracking"""
    
    def __init__(self):
        self.name = "Verification Agent"
        self.version = "0.1.0"
    
    def create_source_record(self, source_name: str, source_type: str, source_url: str = "", description: str = "") -> Dict[str, Any]:
        """
        Create a new data source record
        
        Args:
            source_name: Name of the source
            source_type: Type of source (e.g., 'open-data', 'news-outlet', 'social-media', 'government')
            source_url: URL to the source (optional)
            description: Description of the source
        
        Returns:
            Dictionary with source record
        """
        return {
            'source_name': source_name,
            'source_type': source_type,
            'source_url': source_url,
            'description': description,
            'created_at': datetime.now().isoformat(),
            'verified': False,
            'verification_notes': '',
            'confidence_score': 0.0
        }
    
    def verify_source(self, source_record: Dict[str, Any], verification_notes: str, confidence_score: float) -> Dict[str, Any]:
        """
        Mark a source as verified
        
        Args:
            source_record: Source record dictionary
            verification_notes: Notes on verification process
            confidence_score: Confidence score (0.0 to 1.0)
        
        Returns:
            Updated source record
        """
        source_record['verified'] = True
        source_record['verification_notes'] = verification_notes
        source_record['confidence_score'] = max(0.0, min(1.0, confidence_score))
        source_record['verified_at'] = datetime.now().isoformat()
        
        return source_record
    
    def cross_reference_sources(self, sources: List[Dict[str, Any]], data_point: str) -> Dict[str, Any]:
        """
        Cross-reference a data point across multiple sources
        
        Args:
            sources: List of source records
            data_point: Data point to verify across sources
        
        Returns:
            Cross-reference analysis
        """
        verified_sources = [s for s in sources if s.get('verified', False)]
        
        return {
            'data_point': data_point,
            'total_sources': len(sources),
            'verified_sources': len(verified_sources),
            'verification_percentage': (len(verified_sources) / len(sources) * 100) if sources else 0,
            'average_confidence': sum(s.get('confidence_score', 0) for s in verified_sources) / len(verified_sources) if verified_sources else 0
        }
    
    def generate_source_timeline(self, sources: List[Dict[str, Any]]) -> Dict[str, Any]:
        """
        Generate a timeline of source verification
        
        Args:
            sources: List of source records
        
        Returns:
            Timeline of verification activities
        """
        timeline = {
            'total_sources': len(sources),
            'verified_count': sum(1 for s in sources if s.get('verified', False)),
            'unverified_count': sum(1 for s in sources if not s.get('verified', False)),
            'verification_status': {
                'high_confidence': sum(1 for s in sources if s.get('confidence_score', 0) >= 0.8),
                'medium_confidence': sum(1 for s in sources if 0.5 <= s.get('confidence_score', 0) < 0.8),
                'low_confidence': sum(1 for s in sources if s.get('confidence_score', 0) < 0.5)
            }
        }
        
        return timeline
    
    def flag_suspicious_source(self, source_record: Dict[str, Any], reason: str) -> Dict[str, Any]:
        """
        Flag a source as suspicious
        
        Args:
            source_record: Source record
            reason: Reason for flagging
        
        Returns:
            Updated source record with flag
        """
        source_record['flagged'] = True
        source_record['flag_reason'] = reason
        source_record['flagged_at'] = datetime.now().isoformat()
        
        return source_record
