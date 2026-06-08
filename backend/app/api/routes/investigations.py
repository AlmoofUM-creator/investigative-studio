from fastapi import APIRouter, HTTPException

from app.services.investigation_service import (
    get_all_investigations,
    get_investigation_by_id,
)

router = APIRouter()

@router.get("/investigations")
def read_all_investigations():
    return get_all_investigations()

@router.get("/investigations/{investigation_id}")
def read_investigation_by_id(investigation_id: str):
    investigation = get_investigation_by_id(investigation_id)

    if investigation is None:
       raise HTTPException(
           status_code= 404,
           detail="Investigation not found"

       )

    return investigation
