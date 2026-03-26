from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app import models, schemas
from typing import List

router = APIRouter()

@router.post("/", response_model=schemas.Goal, status_code=201)
def create_goal(goal_in: schemas.GoalCreate, user_id: str, db: Session = Depends(get_db)):
    db_goal = models.FinancialGoal(**goal_in.model_dump(), user_id=user_id)
    db.add(db_goal)
    db.commit()
    db.refresh(db_goal)
    return db_goal

@router.get("/", response_model=List[schemas.Goal])
def get_goals(user_id: str, db: Session = Depends(get_db)):
    return db.query(models.FinancialGoal).filter(models.FinancialGoal.user_id == user_id).all()

@router.delete("/{goal_id}")
def delete_goal(goal_id: str, user_id: str, db: Session = Depends(get_db)):
    db_goal = db.query(models.FinancialGoal).filter(
        models.FinancialGoal.id == goal_id, 
        models.FinancialGoal.user_id == user_id
    ).first()
    if not db_goal:
        raise HTTPException(status_code=404, detail="Goal not found")
    db.delete(db_goal)
    db.commit()
    return {"message": "Goal deleted"}
