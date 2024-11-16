from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ThreatViewSet, ForumPostViewSet

router = DefaultRouter()
router.register(r'threats', ThreatViewSet)
router.register(r'forum_posts', ForumPostViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]

