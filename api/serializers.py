# api/serializers.py

from rest_framework import serializers
from .models import Articulo

class ArticuloSerializer(serializers.ModelSerializer):
    class Meta:
        model = Articulo
        fields = ['id', 'titulo', 'contenido', 'fecha_publicacion', 'autor', 'etiquetas']  # Especifica los campos que deseas incluir