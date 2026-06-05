from pydantic import BaseModel
from typing import Optional

class Evidence(BaseModel):
    id: str
    title: str
    description: str 

    latitude: float
    longitude: float

    timestamp: str 

    source_url: Optional[str] = None

    media_type: str
    verification_status: str

