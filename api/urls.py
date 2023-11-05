from django.urls import path
from .views import *


urlpatterns = [
   path('delete-category', DeleteCategory.as_view(), name = "delete-categorys"),
   path('create-expense', CreateExpense.as_view(), name = 'create-expense'),
   path('get-expenses', GetExpenses.as_view(), name = 'get-expenses')
]