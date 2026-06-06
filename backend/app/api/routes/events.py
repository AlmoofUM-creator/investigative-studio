from fastapi import APIRouter, HTTPException

from app.services.event_service import (
    get_all_events,
    get_event_by_id,
)

router = APIRouter()

@router.get("/events")
def read_all_events():
    return get_all_events()

@router.get("/events/{event_id}")
def read_event_by_id(event_id: str):
    event = get_event_by_id(event_id)

    if event is None:
       raise HTTPException(
           status_code=404,
           detail="Event not found"
 
       )
    return event 


