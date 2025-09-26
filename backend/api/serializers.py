from rest_framework import serializers
from .models import Blog

class BlogSerializer(serializers.ModelSerializer):
    excerpt = serializers.SerializerMethodField()

    class Meta:
        model = Blog
        fields = ["id", "title", "slug", "content", "excerpt", "created_at"]

    def get_excerpt(self, obj):
        text = obj.content or ""
        return (text[:160] + "…") if len(text) > 160 else text
