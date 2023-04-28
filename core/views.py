import requests
from django.shortcuts import render

# Create your views here.

def indexPage(request):

    url = "https://638cc70fd2fc4a058a5fbbdc.mockapi.io/s"

    servicios = requests.request("GET", url)
    servicios = servicios.json()

    dato = {
        'servicios': servicios
    }
    return render(request,'core/index.html',dato)