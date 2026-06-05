from app.data.sample_evidence import SAMPLE_EVIDENCE

def get_all_evidence():
    return SAMPLE_EVIDENCE

def get_evidence_by_id(evidence_id: str):
    for item in SAMPLE_EVIDENCE:
        if item.id == evidence_id:
            return item

    return None

