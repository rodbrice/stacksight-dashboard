# Stacksight Dashboard

A clean and responsive dashboard that displays real-time weather data and connected services, powered by FastAPI on the backend and React + Tailwind CSS on the frontend.

Built as a portfolio project to demonstrate full-stack development skills with a focus on system integration and user experience.

---

## Tech Stack

### Backend
- Python 3.11
- FastAPI
- SQLAlchemy + PostgreSQL
- Docker & Docker Compose
- OpenWeather API

### Frontend
- React (Vite)
- Tailwind CSS
- Axios

---

## Features

- Search weather by city (real-time from OpenWeather)
- Displays temperature, feels-like, and weather description
- Lists connected services (mocked or stored in the database)
- Responsive and clean UI using Tailwind CSS
- Error handling and loading states
- Logic separated into reusable React hooks

---

## Getting Started

### Prerequisites
- Node.js
- Docker
- Git

### 1. Clone the repository

```bash
git clone https://github.com/your-username/stacksight-dashboard.git
cd stacksight-dashboard


### 2. Start the backend (FastAPI + Postgres)

cd backend
cp .env.example .env  # or create your own .env with your OpenWeather API key
docker compose up --build

### 3. Start the backend (FastAPI + Postgres)

cd ../frontend
npm install
npm run dev
