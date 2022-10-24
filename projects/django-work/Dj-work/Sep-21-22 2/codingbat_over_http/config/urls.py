
from django.contrib import admin
from django.urls import path
from app.views import *


urlpatterns = [
    path("lone_sum/<int:a>/<int:b>/<int:c>",lone_sum),
    path("lstring_splosion/<str:str>",string_splosion),
    path("near_hundred/<int:n>",near_hundred),
    path("cat_dog/<str:str>",cat_dog),

    path("admin/", admin.site.urls),
]
