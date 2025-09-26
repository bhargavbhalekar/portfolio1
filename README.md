# Bhargav Bhalekar — Portfolio (React + Django)

A playful, interactive, and production-ready personal portfolio built with React + Vite + Tailwind + Framer Motion on the frontend, and Django REST Framework on the backend.

## Quick Start (Local)
1. Copy env: `cp backend/.env.example backend/.env`
2. Backend:
   - `python -m pip install -r backend/requirements.txt`
   - `python backend/manage.py migrate`
   - `python backend/manage.py runserver`
3. Frontend:
   - `cd frontend && npm install`
   - `npm run dev`
4. Open http://localhost:5173

## Deploy
- Frontend → GitHub Pages: push to `main`. A workflow builds `frontend/dist` with base `/portfolio1/` and deploys via GitHub Actions.
- Backend → Render: use `render.yaml` as a Blueprint (New → Blueprint). Configure env vars in Render (SECRET_KEY, ALLOWED_HOSTS, etc.).

## Docker (local)
```
docker-compose up --build
```
