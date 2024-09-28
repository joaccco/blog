# blog/views.py

from django.http import HttpResponse

def welcome(request):
    return HttpResponse("¡Bienvenido a mi Blog!")