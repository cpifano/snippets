#---------------------------------------------------------------------------------------------------------------------------#
# VISTAS:
#---------------------------------------------------------------------------------------------------------------------------#
# La vista se presenta en forma de clases y funciones en Python, su propósito es determinar que datos serán visualizados.
# El 'controlador' en Django se llama Vista (MTV - Model Template View) [Controlador del modelo vista controlador].
# El ORM de Django permite escribir código Python en lugar de SQL para hacer las consultas que necesita la vista.
#---------------------------------------------------------------------------------------------------------------------------#
#Archivo de vista views.py de la aplicación:
def index(request):
    return render(request, 'ruta_template/index.html')

#---------------------------------------------------------------------------------------------------------------------------#
#Archivo url.py de la aplicación:
from django.conf.urls import url, include

#Importar vistas:
from apps.nombre_app.views import index

urlpatterns = [
    url(r'^$', index, name='index'),

#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# TEMPLATES:
#---------------------------------------------------------------------------------------------------------------------------#
# Django tiene su propio sistema de templates en el cual podremos generar nuestras propias platillas para poder cargar
# dentro de una vista.
# Estas plantillas nos permiten el uso de diferentes herramientas como variables, tags y herencia de templates.
# La 'vista' en Django se llama Plantilla (Template), (MTV - Model Template View) [Vista del modelo vista controlador].
# La plantilla recibe los datos de la vista y luego los organiza para la presentación al navegador web.
# Django, en si no solamente crea contenido en HTML (también XML, CSS, Javascript, CSV, etc).
#---------------------------------------------------------------------------------------------------------------------------#
#USO DE VARIABLES Y ESTRUCTURAS (TAGS) DENTRO DE UN TEMPLATE .HTML:
#If:
{% if condicion %}
    <p>Cumple</p>
{% endif %}

#For & empty:
{% for i in lista_elementos %}
    {{ i }}
{% empty %}
    #empty: es usado en caso de que no existan elementos.
    <p>No existen registros</p>
{% endfor %}

#With:
#Permite poner la cantidad de elementos de alguna respuesta y puede ser usado para mostrar palabras en plurales, dependiendo de la circunstancia.
{% with total=lista_elementos.count %}
    {{ total }} elemento{{total|pluralize}}
{% endwith %}

#Transformación y formatos:
{{ dato.username | capfirst }} #Capitalizar el nombre del usuario (primera letra en mayúscula).
{{ dato.tiempo | date:’SHORT_DATETIME_FORMAT’ }} #Configura el formato de fecha como dd/mm/aaaa hh:mm.

#Tag staticfiles:
#Sirve para servir archivos estáticos.
{% load staticfiles %}
<link href='{% static "css/bootstrap.css" %}' rel="stylesheet">

#Collect static files:
#Para que Django pueda reconocer los archivos estáticos es necesario explicitarlo con la herramienta manage.py collectstatic.
#Recolectará los archivos estáticos de todas las app y los ubicará en un solo directorio.
python manage.py collectstatic

#---------------------------------------------------------------------------------------------------------------------------#
#Para cargar archivos estáticos tenemos el parametro STATICFILES_DIR dentro del archivo settings.py:
STATICFILES_DIR = (os.path.join(BASE_DIR, 'static'),)

#Indicar en settings.py nuestras platillas:
#Se deberá especificar dentro del archivo settings.py de la aplicación el directorio de los templates.
#Templates dentro de settings.py de nombre_app:
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')], #Especificamos el directorio templates para alojar nombre_app/index.html
        'APP_DIRS': True, #Esta opción hara que Django tambien busque templates dentro del directorio de cada app, no solo de forma global en el proyecto.
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# HERENCIA DE PLANTILLAS:
#---------------------------------------------------------------------------------------------------------------------------#
#Nos permite reducir la duplicación y redundancia de elementos comunes de los templates (Header, Sidebar, Content, Footer).

#base.html (Dentro de un directorio templates):
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>{% block title %} Document {% endblock %}</title>

        #Especificar que se cargaran archivos estaticos en el template:
        {% load staticfiles %}
        <link rel="stylesheet" href="{% static 'css/core.css' %}" />
    </head>
    <body>
        {% block header %}
            {% include 'header.html' %}
        {% endblock %}

        {% block navbar %}  ... {% endblock %}
        {% block content %} ... {% endblock %}
        {% block footer %}  ... {% endblock %}
    </body>
</html>

#Herencia en otro template nombre_app.html:
{% extends 'base.html' %}

{% block content %} Otro contenido {% endblock %} #Sobreescribir un bloque:
#---------------------------------------------------------------------------------------------------------------------------#
