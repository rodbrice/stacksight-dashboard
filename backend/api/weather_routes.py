from fastapi import APIRouter
from services.weather import get_weather_by_city
from schemas.weather import WeatherOut

router = APIRouter(prefix="/weather", tags=["weather"])

@router.get("/{city}", response_model=WeatherOut)
async def fetch_weather(city: str):
    return await get_weather_by_city(city)
