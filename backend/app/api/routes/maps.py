from fastapi import APIRouter

router = APIRouter()

@router.get("/maps")
def get_maps():
    return {"maps": []}
