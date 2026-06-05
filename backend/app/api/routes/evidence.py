from fastapi import APIRouter, HTTPException
from typing import Optional
from app.services.evidence_service import (
    get_all_evidence,
    get_evidence_by_id,
    get_evidence_near,
)

router = APIRouter()

@router.get("/evidence")
def read_all_evidence(media_type: Optional[str] = None):
    evidence = get_all_evidence()

    if media_type:
        evidence = [
            item for item in evidence
            if item.media_type == media_type
        ]
    return evidence

@router.get("/evidence/near")
def read_evidence_near(
    lat: float,
    lng: float,
    radius_km: float = 5
):
    return get_evidence_near(
        lat,
        lng,
        radius_km
    )

@router.get("/evidence/{evidence_id}")
def read_evidence_by_id(evidence_id: str):
    result = get_evidence_by_id(evidence_id)

    if result is None:
        raise HTTPException(status_code=404, detail="Evidence not found")

    return result
