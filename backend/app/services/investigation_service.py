from app.data.sample_investigations import SAMPLE_INVESTIGATIONS

def get_all_investigations():
    return SAMPLE_INVESTIGATIONS

def get_investigation_by_id(investigation_id: str):
    for investigation in SAMPLE_INVESTIGATIONS:
        if investigation.id == investigation_id:
            return investigation

    return None
