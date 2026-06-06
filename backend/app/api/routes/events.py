from fastapi import APIRouter, HTTPException

from app.services.event_service import (
    get_all_events,
    get_event_by_id,
    get_event_with_evidence,
)

router = APIRouter()

@router.get("/events")
def read_all_events():
    return get_all_events()

@router.get("/events/timeline")
def read_event_timeline():
    events = get_all_events()
    
    return sorted(
       events,
       key=lambda event: event.timestamp
    )

@router.get("/events/{event_id}/evidence")
def read_event_with_evidence(event_id: str):
    result = get_event_with_evidence(event_id)

    if result is None:
       raise HTTPException(
           status_code=404,
           detail="Event not found"
       )
    return result

@router.get("/events/{event_id}")
def read_event_by_id(event_id: str):
    event = get_event_by_id(event_id)

    if event is None:
       raise HTTPException(
           status_code=404,
           detail="Event not found"
 
       )
    return event 


