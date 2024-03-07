from rest_framework_simplejwt.views import  TokenObtainPairView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status

from .models import User


@api_view(['POST'])
def sign_up(request):

    email = request.data.get("email")
    password = request.data.get("password")

    user = User.objects.filter(email=email).first()
    if user:
        message = {"detail": "User with email exists"}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)
    
    user = User.objects.create(email=email)
    user.set_password(password)
    user.save()

    token = RefreshToken.for_user(user)

    message = {
        "refresh": str(token),
        "access": str(token.access_token)
    }

    return Response(message, status=status.HTTP_201_CREATED)


@api_view(['GET'])
def home(request):
    return Response("Welcome to Cohort 14 Calorie API")