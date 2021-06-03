#---------------------------------------------------------------------------------------------------------------------------#
# URL:
#---------------------------------------------------------------------------------------------------------------------------#
# Django posee mapeo de URLs que permiten controlar el despliegue de las vistas, esta configuración es conocida como URLConf.
# El trabajo del URLConf es leer la URL que el usuario solicitó, encontrar la vista apropiada para la solicitud y pasar
# cualquier variable que la vista necesite para completar su trabajo.
#---------------------------------------------------------------------------------------------------------------------------#
#Archivo urls.py (Dentro del directorio del proyecto):
#En este archivo es donde se definen las URL Globales de cada proyecto y o aplicación.
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^', include('apps.nombre_app.urls')),
]
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
#Archivo urls.py (Dentro del directorio de la app):
#En este archivo es donde se definen las URL Globales de cada aplicación.
from django.urls import path, re_path
from . import views

#Nombre de acceso:
app_name="nombre_app"

#Definir URLs:
urlpatterns = [
    path('nombre_app', views.IndexView.as_view(), name="index"),
]
#---------------------------------------------------------------------------------------------------------------------------#
