# serializers.py
from django.contrib.auth import authenticate
from rest_framework import serializers
from .models import User

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(username=data.get('username'), password=data.get('password'))
        if user and user.is_active:
            return {'user': user}
        raise serializers.ValidationError("Incorrect Credentials")