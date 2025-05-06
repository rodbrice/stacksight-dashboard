from pydantic import BaseModel

class WeatherOut(BaseModel):
    city: str
    temperature: float
    feels_like: float
    description: str
