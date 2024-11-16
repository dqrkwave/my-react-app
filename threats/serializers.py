from rest_framework import serializers
from .models import Threat, ForumPost

class ThreatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Threat
        fields = '__all__'

class ForumPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = ForumPost
        fields = '__all__'

