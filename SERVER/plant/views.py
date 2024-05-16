from django.shortcuts import render
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework import status
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.response import Response

# Create your views here.
@api_view(["POST"])
def login_user(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(request, username, password)
    
    if user is not None:
        token = Token.objects.get_or_create(user)
        return Response({
            "message":"User logged in successfully.",
            "session":token.key
        })
    else:
        return Response({
            "message":"Invalid login credentials"
        }, status=status.HTTP_400_BAD_REQUEST)
        
@api_view(["POST"])
def register_user(request):
    username = request.data.get('username')
    email = request.data.get('email')
    password = request.data.get('password')
    first_name = request.data.get('first_name')
    last_name = request.data.get('last_name')
    
    user = User.objects.filter(username=username)
    
    if user.exists():
        return Response({"message":"User already exists."})
    user = User.objects.create_user(
        username=username,
        email=email,
        first_name=first_name,
        last_name=last_name,
    )
    user.set_password(password)
    user.save()
    token = Token.objects.create(user= user)
    return Response ({
        "message":"User created sucessfully.",
        "session":token.key
    })