from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from models.service import Service
from schemas.service import ServiceCreate

async def create_service(db: AsyncSession, service: ServiceCreate):
    new_service = Service(name=service.name, description=service.description)
    db.add(new_service)
    await db.commit()
    await db.refresh(new_service)
    return new_service

async def get_services(db: AsyncSession):
    result = await db.execute(select(Service))
    return result.scalars().all()
