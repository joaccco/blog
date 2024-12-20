# api/urls.py

from rest_framework import routers
from .views import CategoryViewSet, AuthorViewSet, PostViewSet, PostCreateViewSet

# Crea un router para definir las rutas de la API
router = routers.DefaultRouter()

# Registra los ViewSets con las URLs correspondientes
router.register(r'api/categories', CategoryViewSet, basename='categories')
router.register(r'api/authors', AuthorViewSet, basename='authors')
router.register(r'api/posts', PostViewSet, basename='posts')
router.register(r'api/post-create', PostCreateViewSet, basename='post-create')

# La lista de URLs que se incluirán en las URLs del proyecto
urlpatterns = router.urls
