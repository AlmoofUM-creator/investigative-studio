from app.models.event import Event

SAMPLE_EVENTS = [
    Event(
        id="event-001",
        title="Initial Alameda Event",
        description="First event in the investigation timeline",
        latitude=34.426,
        longitude=-117.301,
        timestamp="2026-06-04T12:00:00Z",
        evidence_ids=["ev-001", "ev-002"],
        narrative="Initial event connecting multiple evidence records."
    ),

    Event(
        id="event-002",
        title="Follow-up Investigation Event",
        description="Second event in the investigation timeline",
        latitude=34.430,
        longitude=-117.295,
        timestamp="2026-06-04T13:00:00Z",
        evidence_ids=["ev-002"],
        narrative="Follow-up event documenting additional findings."
    )
]
