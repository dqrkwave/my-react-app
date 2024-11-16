from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
from rest_framework import viewsets
from .models import Threat, ForumPost
from .serializers import ThreatSerializer, ForumPostSerializer

class ThreatViewSet(viewsets.ModelViewSet):
    queryset = Threat.objects.all()
    serializer_class = ThreatSerializer

class ForumPostViewSet(viewsets.ModelViewSet):
    queryset = ForumPost.objects.all()
    serializer_class = ForumPostSerializer

def home(request):
    return HttpResponse("Welcome to the Threats to Humanity Website!")