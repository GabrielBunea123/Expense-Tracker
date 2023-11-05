from .models import *
from datetime import datetime

def create_category_or_get_existing(name):
    if name:
        category = Category.objects.filter(name = name)
        if category.exists():
            return category[0]
        else:
            category = Category(name = name)
            category.save()
            return category
    return None

def format_date(date):
    date_format = '%Y-%m-%d %H:%M:%S'

    date_obj = datetime.strptime(date, date_format)

    return date_obj