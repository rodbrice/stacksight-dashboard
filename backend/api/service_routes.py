from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from database import get_db
from crud import service as crud_service
from schemas import service as schema

router = APIRouter()

@router.post("/services", response_model=schema.ServiceOut)
async def create_service(service: schema.ServiceCreate, db: AsyncSession = Depends(get_db)):
    return await crud_service.create_service(db, service)

@router.get("/services", response_model=list[schema.ServiceOut])
async def read_services(db: AsyncSession = Depends(get_db)):
    return await crud_service.get_services(db)
