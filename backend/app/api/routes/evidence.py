from fastapi import APIRouter
from app.services.evidence_service import get_all_evidence

router = APIRouter()

@router.get("/evidence")
def get_evidence():
    return get_all_evidence()

