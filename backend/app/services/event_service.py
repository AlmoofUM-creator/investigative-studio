from app.data.sample_events import SAMPLE_EVENTS

def get_all_events():
    return SAMPLE_EVENTS

def get_event_by_id(event_id: str):
    for event in SAMPLE_EVENTS:
        if event.id == event_id:
            return event

    return None 
