import base64
import os
from typing import Optional

import requests
from django.conf import settings
from rest_framework import viewsets, permissions
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Blog
from .serializers import BlogSerializer


class BlogViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Blog.objects.all().order_by('-created_at')
    serializer_class = BlogSerializer
    permission_classes = [permissions.AllowAny]


class LocationWeatherView(APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request):
        city = request.query_params.get('city') or settings.DEFAULT_CITY
        try:
            geo = self._geocode_city(city)
            if not geo:
                return Response({"error": "City not found"}, status=404)
            lat, lon, name = geo
            weather = self._fetch_forecast(lat, lon)
            return Response({
                "city": name,
                "latitude": lat,
                "longitude": lon,
                "current": weather.get("current_weather") or weather.get("current"),
                "raw": weather,
            })
        except Exception as e:
            return Response({"error": str(e)}, status=500)

    def _geocode_city(self, city: str) -> Optional[tuple]:
        url = "https://geocoding-api.open-meteo.com/v1/search"
        r = requests.get(url, params={"name": city, "count": 1, "language": "en", "format": "json"}, timeout=10)
        r.raise_for_status()
        data = r.json()
        results = data.get("results") or []
        if not results:
            return None
        item = results[0]
        return item.get("latitude"), item.get("longitude"), item.get("name")

    def _fetch_forecast(self, lat: float, lon: float) -> dict:
        url = settings.OPENMETEO_API_URL
        params = {
            "latitude": lat,
            "longitude": lon,
            "current_weather": True,
            "timezone": "auto",
        }
        r = requests.get(url, params=params, timeout=10)
        r.raise_for_status()
        return r.json()


class SpotifyNowPlayingView(APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request):
        try:
            token = self._get_access_token()
            if not token:
                return Response({"is_playing": False, "error": "Missing Spotify credentials"}, status=400)
            headers = {"Authorization": f"Bearer {token}"}
            r = requests.get("https://api.spotify.com/v1/me/player/currently-playing", headers=headers, timeout=10)
            if r.status_code == 204:
                return Response({"is_playing": False})
            r.raise_for_status()
            payload = r.json()
            item = (payload or {}).get("item") or {}
            artists = ", ".join(a.get("name") for a in item.get("artists", []))
            album_images = (item.get("album") or {}).get("images") or []
            image_url = album_images[0]["url"] if album_images else None
            return Response({
                "is_playing": payload.get("is_playing", False),
                "progress_ms": payload.get("progress_ms"),
                "name": item.get("name"),
                "artists": artists,
                "album": (item.get("album") or {}).get("name"),
                "image": image_url,
                "external_url": (item.get("external_urls") or {}).get("spotify"),
                "preview_url": item.get("preview_url"),
            })
        except Exception as e:
            return Response({"error": str(e)}, status=500)

    def _get_access_token(self) -> Optional[str]:
        client_id = settings.SPOTIFY_CLIENT_ID
        client_secret = settings.SPOTIFY_CLIENT_SECRET
        refresh_token = settings.SPOTIFY_REFRESH_TOKEN
        if not (client_id and client_secret and refresh_token):
            return None
        creds = f"{client_id}:{client_secret}".encode()
        b64 = base64.b64encode(creds).decode()
        headers = {"Authorization": f"Basic {b64}", "Content-Type": "application/x-www-form-urlencoded"}
        data = {"grant_type": "refresh_token", "refresh_token": refresh_token}
        r = requests.post("https://accounts.spotify.com/api/token", headers=headers, data=data, timeout=10)
        r.raise_for_status()
        return r.json().get("access_token")
