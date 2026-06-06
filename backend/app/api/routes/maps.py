from fastapi import APIRouter

from app.services.event_service import get_all_events

router = APIRouter()

@router.get("/map/events")
def get_map_events():
    events = get_all_events()

    return [
        {
            "id": event.id,
            "title": event.title,
            "latitude": event.latitude,
            "longitude": event.longitude,
            "timestamp": event.timestamp,
        }
        for event in events 
     ]

