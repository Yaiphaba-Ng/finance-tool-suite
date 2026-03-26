from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import leads, auth, goals
from app.core.config import settings
from app.database import engine, Base

# Create tables for SQLite if they don't exist (MVP fallback)
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json"
)

# Set all CORS enabled origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix=f"{settings.API_V1_STR}/auth", tags=["auth"])
app.include_router(leads.router, prefix=f"{settings.API_V1_STR}/leads", tags=["leads"])
app.include_router(goals.router, prefix=f"{settings.API_V1_STR}/goals", tags=["goals"])

@app.get("/health")
async def root_health():
    return {"status": "API is alive"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
