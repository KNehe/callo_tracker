from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class FoodItem(models.Model):
    name = models.CharField(max_length=100, unique=True)
    calorie_count  = models.DecimalField(max_digits=10,decimal_places=2)
    quantity = models.CharField(max_length=5,)
    created = models.DateTimeField(auto_now=True)
    updated = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.name

# class Meal(models.Model):
#     food_item = models.ManyToManyField(FoodItem, on_delete=models.CASCADE)
#     name = models.CharField(max_length=100)
#     created = models.DateTimeField(auto_now=True)
#     updated = models.DateTimeField(auto_now_add=True)
#     created_by = models.ForeignKey(User, on_delete=models.CASCADE)

#     def __str__(self) -> str:
#         return self.name
