from pydantic import BaseModel
from typing import List 


class Event(BaseModel):
    id: str
    title: str
    description: str
   
    latitude: float
    longitude: float

    timestamp: str
   
    evidence_ids: List[str]

    narrative: str

