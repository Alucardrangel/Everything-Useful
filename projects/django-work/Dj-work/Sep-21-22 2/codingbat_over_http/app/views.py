from django.shortcuts import render
from django.http.response import HttpResponse
from django.http.request import HttpRequest
# Create your views here.
def lone_sum(request,a, b, c):
  if a==b==c:
    return HttpResponse(0)
  if b==c:
    return HttpResponse(a)
  if a==c:
    return HttpResponse(b)
  if a==b:
   return HttpResponse(c)
  return HttpResponse(a+b+c)



def near_hundred(request,n):
    return HttpResponse((abs(100-n) <= 10) or (abs(200-n) <=10))

def string_splosion(request, str):
    result = ""
    for i in range(len(str)):
        result = result + str[:i+1]
    return HttpResponse(result)

def cat_dog(request, str):
    return HttpResponse(str.count("cat") == str.count("dog"))






