from django.db import models

class Order(models.Model):
    user = models.ForeignKey('users.User', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, choices=[('pending', 'Pending'), ('completed', 'Completed')])

class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name='items', on_delete=models.CASCADE)
    service = models.ForeignKey('services.Service', on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()