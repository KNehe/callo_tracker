from rest_framework import viewsets, status
from .serializers import FoodItemSerializer
from .models import FoodItem
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

class FoodItemViewSet(viewsets.ModelViewSet):
    serializer_class = FoodItemSerializer
    queryset = FoodItem.objects.all()
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        data = request.data
        fooditem = FoodItem.objects.create(created_by=request.user, name=data.get("name"), calorie_count=data.get("calorie_count"), quantity=data.get("quantity"))
        serializer = FoodItemSerializer(fooditem)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


