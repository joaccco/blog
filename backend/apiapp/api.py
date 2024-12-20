from rest_framework import viewsets, permissions
from .models import Category, Author, Post
from .serializers import CategorySerializer, AuthorSerializer, PostSerializer, PostCreateSerializer

# ViewSet para Category
class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    permission_classes = [permissions.AllowAny]  # Aquí puedes cambiar la clase de permisos si necesitas autenticación
    serializer_class = CategorySerializer

# ViewSet para Author
class AuthorViewSet(viewsets.ModelViewSet):
    queryset = Author.objects.all()
    permission_classes = [permissions.AllowAny]  # Aquí también puedes cambiar la clase de permisos si lo necesitas
    serializer_class = AuthorSerializer

# ViewSet para Post
class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    permission_classes = [permissions.AllowAny]  # Cambiar los permisos según sea necesario
    serializer_class = PostSerializer

# ViewSet para la creación de Posts (si quieres un serializer diferente para crear o actualizar)
class PostCreateViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    permission_classes = [permissions.AllowAny]  # Cambiar los permisos según sea necesario
    serializer_class = PostCreateSerializer
