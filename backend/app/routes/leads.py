from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app import models, schemas
from typing import List

router = APIRouter()

@router.post("/", response_model=schemas.Lead, status_code=201)
async def create_lead(lead_in: schemas.LeadCreate, db: Session = Depends(get_db)):
    db_lead = models.Lead(**lead_in.model_dump())
    db.add(db_lead)
    db.commit()
    db.refresh(db_lead)
    return db_lead

@router.get("/", response_model=List[schemas.Lead])
async def get_leads(user_id: str = None, db: Session = Depends(get_db)):
    query = db.query(models.Lead)
    if user_id:
        query = query.filter(models.Lead.user_id == user_id)
    return query.all()

@router.get("/health")
async def health_check():
    return {"status": "ok", "service": "leads-v1"}
