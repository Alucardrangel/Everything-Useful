from django.shortcuts import render
from django.http.response import HttpResponse
from django.http.request import HttpRequest

import random

# Create your views here.

def hello_view(request, name):
    return HttpResponse(f"Hello, {name}!")

def age_in(request, end, birthyear):
    age = end - birthyear
    return HttpResponse(age)

def  order_total(request, burgers, fries, drinks):
    burger_total = burgers * 4.50
    fry_total = fries * 1.5
    drink_total = drinks * 1
    order_total = burger_total + fry_total + drink_total
    return HttpResponse(f"$" + str(order_total))
