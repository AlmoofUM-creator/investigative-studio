from app.data.sample_evidence import SAMPLE_EVIDENCE
import math

def get_all_evidence():
    return SAMPLE_EVIDENCE

def get_evidence_by_id(evidence_id: str):
    for item in SAMPLE_EVIDENCE:
        if item.id == evidence_id:
            return item

    return None

#Haversine distane (Earthe distance formula in km)
def calculate_distance(lat1, lon1, lat2, lon2):
    R = 6371 # Earth radius in km

    phi1 = math.radians(lat1)
    phi2 = math.radians(lat2)

    d_phi = math.radians(lat2 - lat1)
    d_lambda = math.radians(lon2 -lon1)

    a = (
        math.sin(d_phi / 2) ** 2
        + math.cos(phi1)
        * math.cos(phi2)
        * math.sin(d_lambda / 2) ** 2
    )
    
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
    
    return R * c

def get_evidence_near(lat: float, lng: float, radius_km: float):
    results = []

    for item in SAMPLE_EVIDENCE:
        distance = calculate_distance(
            lat,
            lng,
            item.latitude,
            item.longitude
        )
        
        if distance <= radius_km:
            results.append({
                "data": item,
                "distance_km": round(distance, 3)
            })
     
    results.sort(key=lambda x: x["distance_km"])

    return results
