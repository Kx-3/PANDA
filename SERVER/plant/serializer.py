from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Site, Tree, PlantOrder

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
        
class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlantOrder
        fields = [
            "tree_species",
            "site_name",
        ]
        
    def create(self, validated_data):
       validated_data['user'] = self.context['request'].user
       return super().create(validated_data)