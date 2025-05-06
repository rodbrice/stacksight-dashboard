import os
import httpx

OPENWEATHER_API_KEY = os.getenv("OPENWEATHER_API_KEY")
print("🔑 API KEY FOUND:", OPENWEATHER_API_KEY)

async def get_weather_by_city(city: str):
    base_url = "https://api.openweathermap.org/data/2.5/weather"
    params = {
        "q": city,
        "appid": OPENWEATHER_API_KEY,
        "units": "metric",
        "lang": "en"
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(base_url, params=params)
        response.raise_for_status()
        data = response.json()

    return {
        "city": data["name"],
        "temperature": data["main"]["temp"],
        "feels_like": data["main"]["feels_like"],
        "description": data["weather"][0]["description"]
    }
