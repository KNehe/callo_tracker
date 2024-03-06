from django.urls import path
from .views import TokenObtainPairView, sign_up

urlpatterns = [
    path("sign_in/",TokenObtainPairView.as_view(), name='sign_in'),
    path("sign_up/", sign_up, name="sign_up")
]