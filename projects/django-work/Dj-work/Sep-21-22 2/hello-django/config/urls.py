
from django.contrib import admin
from django.urls import path
from app.views import *



urlpatterns = [
    path("hello/<name>/",hello_views),
    path("admin/", admin.site.urls),
]
