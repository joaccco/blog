# api/views.py

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class YourAPIView(APIView):
    def get(self, request):
        # Lógica para manejar GET
        data = {"message": "Hello, world!"}
        return Response(data, status=status.HTTP_200_OK)

    def post(self, request):
        # Lógica para manejar POST
        return Response({"message": "Data received"}, status=status.HTTP_201_CREATED)