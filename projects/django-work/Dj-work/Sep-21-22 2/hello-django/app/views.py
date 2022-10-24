import random
from django.http.response import HttpResponse
from django.http.request import HttpRequest


def hello_views(request, name) -> HttpResponse:
   return HttpResponse("Hello World!")

