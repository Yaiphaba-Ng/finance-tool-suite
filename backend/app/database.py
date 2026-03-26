from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from app.core.config import settings

# For MVP, we allow falling back to SQLite if Postgres isn't ready
if settings.DATABASE_URL and settings.DATABASE_URL.startswith("postgresql"):
    engine = create_engine(settings.DATABASE_URL)
else:
    engine = create_engine(
        "sqlite:///./app.db", connect_args={"check_same_thread": False}
    )

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
