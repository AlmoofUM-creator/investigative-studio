
from pydantic import BaseModel
from typing import List 

class Investigation(BaseModel):
    id: str
    title: str 
    description: str 
    
    event_ids: list[str]

    status: str
