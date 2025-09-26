# API Reference
Base URL: http://localhost:8000/api

## GET /location-weather/
- Query: `city` (optional) — defaults to DEFAULT_CITY
- Response: `{ city, latitude, longitude, current, raw }`

## GET /blogs/
- Paginated list of blogs
- Response: `results: [{ id, title, slug, content, excerpt, created_at }], next, previous, count`

## GET /spotify/
- Shows current Spotify “Now Playing”
- Requires backend env credentials and refresh token
- Response: `{ is_playing, name, artists, album, image, progress_ms, external_url, preview_url }`
