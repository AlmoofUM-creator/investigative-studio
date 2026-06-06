from app.data.sample_events import SAMPLE_EVENTS
from app.services.evidence_service import get_evidence_by_id

def get_all_events():
    return SAMPLE_EVENTS

def get_event_by_id(event_id: str):
    for event in SAMPLE_EVENTS:
        if event.id == event_id:
            return event

    return None 

def get_event_with_evidence(event_id: str): 
    event = get_event_by_id(event_id)

    if event is None:
        return None
    
    evidence = []

    for evidence_id in event.evidence_ids:
        item = get_evidence_by_id(evidence_id)

        if item:
            evidence.append(item)

    return {
       "event": event,
       "evidence": evidence
    }
