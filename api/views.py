from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework import status
from .models import *
from .serializers import *
from .utils import *
import json
import datetime
# Create your views here.


class DeleteCategory(APIView):

    serializer_class = CategorySerializer

    def delete(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            name = serializer.data.get('name')
            category = Category.objects.filter(name=name)
            if category.exists():
                category[0].delete()
                return Response({"Category deleted": "Successfully"}, status=status.HTTP_200_OK)
            return Response({"Category": "Not found"}, status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)


class CreateExpense(APIView):
    serializer_class = ExpenseSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            category = serializer.data.get('category')
            name = serializer.data.get('name')
            sum_of_money = serializer.data.get('sum_of_money')
            date = serializer.data.get('date')
            category = create_category_or_get_existing(category)
            if category is not None:
                expense = Expense(category=category, name=name,
                                sum_of_money=sum_of_money, date=date)
                expense.save()
                return Response(ExpenseSerializer(expense).data, status=status.HTTP_201_CREATED)
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)


class GetExpenses(APIView):
    def get(self, request):
        expenses = Expense.objects.all().values()
        return JsonResponse(list(expenses), safe=False)
