from app.models.investigation import Investigation
SAMPLE_INVESTIGATIONS = [
    Investigation(
        id="inv-001",
        title="Alameda Investigation",
        description="Investigation tracking events and evidence related to the Alameda case.",
	 event_ids=["event-001", "event-002"],
	 status="active"
    )
]
