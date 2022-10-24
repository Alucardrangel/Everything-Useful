
from django.contrib import admin
from django.urls import path

from app.views import *

urlpatterns = [
    path("hey/<name>", hello_view),
    path("age-in/<int:end>/<int:birthyear>", age_in),
    path("order-total/<int:burgers>/<int:fries>/<int:drinks>", order_total),
    path('admin/', admin.site.urls),
]
