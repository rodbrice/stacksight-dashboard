from fastapi import FastAPI
from api import service_routes, weather_routes
from database import engine
from models.service import Base
from contextlib import asynccontextmanager
from fastapi.middleware.cors import CORSMiddleware


import os
print("✅ API KEY VINDO DO DOCKER:", os.getenv("OPENWEATHER_API_KEY"))

@asynccontextmanager
async def lifespan(app: FastAPI):
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    yield

app = FastAPI(lifespan=lifespan)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # em produção, especifique seu domínio
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(service_routes.router)
app.include_router(weather_routes.router)
