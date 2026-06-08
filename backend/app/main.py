from fastapi import FastAPI
from app.api.routes import health, evidence, maps, events, investigations

app = FastAPI(title="field System")

app.include_router(health.router)
app.include_router(evidence.router)
app.include_router(maps.router)
app.include_router(events.router)
app.include_router(investigations.router)


