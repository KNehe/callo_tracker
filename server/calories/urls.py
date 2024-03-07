from rest_framework.routers import DefaultRouter
from .views import FoodItemViewSet
from django.urls import path, include

router = DefaultRouter()

router.register("fooditems", FoodItemViewSet, basename='fooditem')

urlpatterns = [
    path('', include(router.urls))
]