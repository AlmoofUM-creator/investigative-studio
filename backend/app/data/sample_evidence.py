from app.models.evidence import Evidence 

SAMPLE_EVIDENCE = [
    Evidence(
        id="ev-001",
        title="Test Evidence",
        description="Initial evidence record",
        latitude=34.426,
        longitude=-117.301,
        timestamp="2026-06-04T12:00:00Z",
        media_type="video",
        verification_status="unverified",
    ),
    Evidence(
        id="ev-002",
        title="Second Evidence Record",
        description="Additional test point",
        latitude=34.430,
        longitude=-117.295,
        timestamp="2026-06-04T13:00:00Z",
        media_type="photo",
        verification_status="verified",
    ),
]
