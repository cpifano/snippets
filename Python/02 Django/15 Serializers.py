#---------------------------------------------------------------------------------------------------------------------------#
# SERIALIZERS:
#---------------------------------------------------------------------------------------------------------------------------#
# Django serializer:
#---------------------------------------------------------------------------------------------------------------------------#
#Archivo views.py de la app:
from django.http import HttpResponse
from django.core import serializers

def listadoUsuarios(request):
	#fields: nos permite definir que campos serán enviados a travéz del serializador:
	lista = serializers.serialize('json', User.objects.all(), fields=['username', 'first_name'])

	#Retornar el serializador como JSON:
	return HttpResponse(lista, content_type='application/json')

#---------------------------------------------------------------------------------------------------------------------------#
#Archivo de URLs de la app:

#Importamos la vista:
from apps.mascota.views import listadousuarios

urlpatterns = [
    #...#
    url(r'^listado', listadoUsuarios, name="listado"),
]
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# Django REST Framework - Model Serializer:
#---------------------------------------------------------------------------------------------------------------------------#
# pip install djangorestframework
# Facilita la creación de APIs RESTful desde Django.
#---------------------------------------------------------------------------------------------------------------------------#
#Archivo serializers.py dentro de la app:
from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User

class UserSerializer(ModelSerializer):
	class Meta:
		model = User
		fields = ('first_name', 'email')

#---------------------------------------------------------------------------------------------------------------------------#
#Archivo views.py de la app:
import json
from rest_framework.views import APIView

from django.http import HttpResponse
from django.contrib.auth.models import User

#Importar serializer:
from apps.usuario.serializers import UserSerializer

class UserAPI(APIView):
	#Especificar nuestro serializer:
	serializer = UserSerializer

	def get(self, request, format=None):
		lista = User.objects.all()
		response = self.serializer(lista, many=True)

		return HttpResponse(json.dumps(response.data), content_type='application/json')

#---------------------------------------------------------------------------------------------------------------------------#
#Archivo url.py de la app:
from django.conf.urls import url
from apps.usuario.views import UserAPI

urlpatterns = [
	url(r'^api', UserAPI.as_view(), name="api"),
]
#---------------------------------------------------------------------------------------------------------------------------#
