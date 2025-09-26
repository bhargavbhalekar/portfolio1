# Project Overview

This project is a personal portfolio for Bhargav Bhalekar featuring:
- Animated React frontend (Vite + Tailwind + Framer Motion)
- Django REST API backend with three endpoints:
  - GET /api/location-weather/ — Live weather via Open-Meteo
  - GET /api/blogs/ — Paginated blogs
  - GET /api/spotify/ — Now Playing via Spotify API
- Dockerized services and Wrap.dev-ready configuration.

## Architecture
- Frontend served as static site (nginx) in production.
- Backend served with gunicorn.
- Local development uses Vite dev server and Django runserver.
