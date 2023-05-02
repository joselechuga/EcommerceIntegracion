import requests
from django.shortcuts import render

# Create your views here.

def indexPage(request):

    url = "https://636848caedc85dbc84e49015.mockapi.io/producto"

    productos = requests.request("GET", url)
    productos = productos.json()

    dato = {
        'productos': productos
    }
    
    return render(request,'core/index.html',dato)