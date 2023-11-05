from rest_framework import serializers
from .models import *


class CategorySerializer(serializers.Serializer):
    name = serializers.CharField()

class ExpenseSerializer(serializers.Serializer):
    category = serializers.CharField()
    name = serializers.CharField(required = False)
    sum_of_money = serializers.FloatField()
    date = serializers.DateTimeField()