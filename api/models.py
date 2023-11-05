from django.db import models

# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=256, unique=True)

    def __str__(self):
        return self.name

class Expense(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=256, blank=True, null=True)
    sum_of_money = models.FloatField()
    date = models.DateTimeField(auto_now_add=True) 

