from django.urls import path
from .views import indexPage ,productos

urlpatterns = [
    path('',indexPage,name='indexPage'),
    path('productos/',productos,name='productos'),
]