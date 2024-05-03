# urls.py
from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import LoginViewSet

router = DefaultRouter()
router.register(r'login', LoginViewSet, basename='login')

urlpatterns = [
    path('', include(router.urls)),
   
]