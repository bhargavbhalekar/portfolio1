# Bhargav Bhalekar — Portfolio (React + Django)

A playful, interactive, and production-ready personal portfolio built with React + Vite + Tailwind + Framer Motion on the frontend, and Django REST Framework on the backend.

## Tech Stack
- Frontend: React 18, Vite, TailwindCSS, Framer Motion, Axios
- Backend: Django 4.2+, DRF, Gunicorn, Python 3.11+
- Database: SQLite (local), PostgreSQL-ready (via env)
- Hosting: Wrap.dev (Dockerized multi-service)

## Quick Start (Local)
1. Clone and enter the repo
2. Backend
   - Copy env: `cp backend/.env.example backend/.env`
   - Install deps: `pip install -r backend/requirements.txt`
   - Migrate: `python backend/manage.py migrate`
   - Run: `python backend/manage.py runserver`
3. Frontend
   - `cd frontend && npm install`
   - `npm run dev`
4. Open http://localhost:5173

See docs/SETUP_GUIDE.md for full details and Docker instructions.
