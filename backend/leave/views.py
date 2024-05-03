# views.py
from django.contrib.auth import login
from rest_framework import viewsets, status
from rest_framework.response import Response
from .serializers import LoginSerializer

class LoginViewSet(viewsets.ViewSet):
    def create(self, request):
        serializer = LoginSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        user = serializer.validated_data['user']
        login(request, user)
        return Response({"status": "Logged in"}, status=status.HTTP_200_OK)