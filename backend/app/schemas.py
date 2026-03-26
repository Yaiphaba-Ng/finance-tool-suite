from pydantic import BaseModel, EmailStr, Field
from typing import Dict, Any, Optional, List
from enum import Enum
from datetime import datetime
import uuid

# --- Lead Schemas ---
class LeadType(str, Enum):
    PL = "PL"
    BL = "BL"
    CURRENCY = "Currency"
    CALC_DROP = "Calculator_Drop"

class LeadBase(BaseModel):
    name: Optional[str] = None
    phone: Optional[str] = None
    email: Optional[EmailStr] = None
    type: LeadType
    details: Dict[str, Any]

class LeadCreate(LeadBase):
    user_id: Optional[str] = None

class Lead(LeadBase):
    id: str
    created_at: datetime
    status: str = "New"

    class Config:
        from_attributes = True

# --- User Schemas ---
class UserBase(BaseModel):
    name: str
    email: EmailStr
    phone: str

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: str
    is_phone_verified: bool
    created_at: datetime

    class Config:
        from_attributes = True

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    user_id: Optional[str] = None

# --- Goal Schemas ---
class GoalBase(BaseModel):
    goal_name: str
    target_amount: float
    target_year: int
    inflation_rate: float = 6.0
    suggested_sip: float

class GoalCreate(GoalBase):
    pass

class Goal(GoalBase):
    id: str
    user_id: str
    created_at: datetime

    class Config:
        from_attributes = True
