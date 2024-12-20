from rest_framework import serializers
from .models import Category, Author, Post

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'description', 'created_at']

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ['id', 'name', 'email', 'bio', 'created_at']

class PostSerializer(serializers.ModelSerializer):
    author = AuthorSerializer(read_only=True)  # Anidar datos del autor
    category = CategorySerializer(read_only=True)  # Anidar datos de la categoría

    class Meta:
        model = Post
        fields = [
            'id', 'title', 'slug', 'content', 'author', 
            'category', 'status', 'published_at', 
            'created_at', 'updated_at'
        ]

class PostCreateSerializer(serializers.ModelSerializer):
    """
    Serializer para la creación/actualización de Posts
    Permite enviar solo IDs para relaciones.
    """
    class Meta:
        model = Post
        fields = [
            'id', 'title', 'slug', 'content', 'author', 
            'category', 'status', 'published_at'
        ]
