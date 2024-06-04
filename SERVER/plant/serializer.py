from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Site, Tree

class UserSerializer(serializers.Serializer):
    class Meta:
        model = User
        fields = [
            "id",
            "username",
            "email"
        ]
        
class TreeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tree
        fields = '__all__'
        
class SiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Site
        fields = '__all__'