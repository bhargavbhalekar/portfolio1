from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import BlogViewSet, LocationWeatherView, SpotifyNowPlayingView

router = DefaultRouter()
router.register('blogs', BlogViewSet, basename='blog')

urlpatterns = [
    path('', include(router.urls)),
    path('location-weather/', LocationWeatherView.as_view(), name='location-weather'),
    path('spotify/', SpotifyNowPlayingView.as_view(), name='spotify-now-playing'),
]
