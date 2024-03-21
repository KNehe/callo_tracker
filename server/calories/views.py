from rest_framework import viewsets, status
from .serializers import FoodItemSerializer
from .models import FoodItem
from rest_framework.permissions import IsAuthenticated

class FoodItemViewSet(viewsets.ModelViewSet):
    serializer_class = FoodItemSerializer
    queryset = FoodItem.objects.all()
    permission_classes = [IsAuthenticated]
    
    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)


