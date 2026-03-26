from sqlalchemy import Column, String, Boolean, DateTime, ForeignKey, Numeric, Integer, JSON
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
import uuid
from datetime import datetime
from .database import Base

class User(Base):
    __tablename__ = "users"
    
    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    name = Column(String, nullable=False)
    phone = Column(String, unique=True, index=True, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    is_phone_verified = Column(Boolean, default=False)
    created_at = Column(DateTime, default=datetime.utcnow)

    leads = relationship("Lead", back_populates="user")
    goals = relationship("FinancialGoal", back_populates="user")

class Lead(Base):
    __tablename__ = "leads"

    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    user_id = Column(String, ForeignKey("users.id"), nullable=True)
    guest_name = Column(String, nullable=True)
    guest_phone = Column(String, nullable=True)
    type = Column(String, nullable=False)  # PL | BL | Currency | Calculator_Drop
    details = Column(JSON, nullable=False)
    status = Column(String, default="New")
    created_at = Column(DateTime, default=datetime.utcnow)

    user = relationship("User", back_populates="leads")

class FinancialGoal(Base):
    __tablename__ = "financial_goals"

    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    user_id = Column(String, ForeignKey("users.id"), nullable=False)
    goal_name = Column(String, nullable=False)
    target_amount = Column(Numeric(15, 2), nullable=False)
    target_year = Column(Integer, nullable=False)
    inflation_rate = Column(Numeric(4, 2), default=6.0)
    suggested_sip = Column(Numeric(15, 2), nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)

    user = relationship("User", back_populates="goals")
