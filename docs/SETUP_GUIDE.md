# Setup Guide

## Prerequisites
- Node.js 18+
- Python 3.11+
- (Optional) Docker and Docker Compose

## Local Development
1. Backend
   - `cp backend/.env.example backend/.env`
   - `pip install -r backend/requirements.txt`
   - `python backend/manage.py migrate`
   - `python backend/manage.py runserver`
2. Frontend
   - `cd frontend && npm install`
   - `npm run dev`
3. Open http://localhost:5173

## Docker (Wrap.dev compatible)
```
docker-compose up --build
```
- Frontend: http://localhost:5173
- Backend: http://localhost:8000

## Environment Variables (backend/.env)
- SECRET_KEY, DEBUG, ALLOWED_HOSTS
- OPENMETEO_API_URL, DEFAULT_CITY
- SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN
- Optional PostgreSQL: POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_HOST, POSTGRES_PORT
