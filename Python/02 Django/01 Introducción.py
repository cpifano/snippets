#---------------------------------------------------------------------------------------------------------------------------#
# DJANGO:
#---------------------------------------------------------------------------------------------------------------------------#
# Django promueve el desarrollo rápido, se construyen aplicaciones en cuestión de días y con el conocimiento suficiente esos
# días se pueden reducir a horas.
# Django sigue el principio DRY y utiliza una modificación de la arquitectura Modelo-Vista-Controlador (MVC), llamada MTV
# (Model – Template – View).
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
# INTRODUCCIÓN:
#---------------------------------------------------------------------------------------------------------------------------#
#Instalar Django:
pip install django==version

#Ver versión actual:
python -m django --version

#CREAR UN PROYECTO EN DJANGO:
#django-admin: Utilidad de línea de comandos de Django.

#Crear un proyecto Django (Crea un directorio con el proyecto):
django-admin startproject nombre_proyecto

#---------------------------------------------------------------------------------------------------------------------------#
#Contenido del proyecto:
nombre_proyecto/
    manage.py
    nombre_proyecto/
        __init__.py
        settings.py
        urls.py
        asgi.py
        wsgi.py
#---------------------------------------------------------------------------------------------------------------------------#
#manage.py:
#Utilidad de la línea de comandos que le permite interactuar con este proyecto Django de diferentes formas.

#__init__.py:
#Archivo vacío que le indica a Python que este directorio debería ser considerado como un paquete Python.

#settings.py:
#Ajustes/configuración para este proyecto Django.

#urls.py:
#Declaraciones URL para este proyecto Django; una «tabla de contenidos» de su sitio basado en Django.

#asgi.py:
#Punto de entrada para que los servidores web compatibles con ASGI puedan servir su proyecto.

#wsgi.py:
#Punto de entrada para que los servidores web compatibles con WSGI puedan servir su proyecto.
#---------------------------------------------------------------------------------------------------------------------------#
