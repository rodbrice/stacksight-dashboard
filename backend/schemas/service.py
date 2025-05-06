from pydantic import BaseModel

class ServiceCreate(BaseModel):
    name: str
    description: str

class ServiceOut(ServiceCreate):
    id: int

    class Config:
        orm_mode = True
