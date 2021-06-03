#---------------------------------------------------------------------------------------------------------------------------#
#Crear proyecto:
django-admin startproject apatlab

#Crear aplicación dentro del proyecto (apatlab/):
python manage.py startapp laboratorio

#Crear migración inicial (apatlab/):
python manage.py migrate

#Importar configuracion de modelo, admin y settings.

#Crear archivo de migraciones para el modelo nuevo (apatlab/):
python manage.py makemigrations

#Ejecutar migraciones:
python manage.py migrate

#Crear super usuario para administrar el sitio (apatlab/):
python manage.py createsuperuser

#Correr el servidor de Django (apatlab/):
python manage.py runserver
