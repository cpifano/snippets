#---------------------------------------------------------------------------------------------------------------------------#
#Crear proyecto:
django-admin startproject informatica_dapps

#Crear aplicación dentro del proyecto (informatica_dapps/):
python manage.py startapp inventario

#Crear migración inicial (informatica_dapps/):
#Versiones de django <3: python manage.py syncdb
python manage.py migrate

#Agregar archivos de apps (settings, models, admin, apps).

#Crear archivo de migraciones para el modelo nuevo (informatica_dapps/):
python manage.py makemigrations

#Ejecutar migraciones:
python manage.py migrate

#Crear super usuario para administrar el sitio (informatica_dapps/):
python manage.py createsuperuser

#Correr el servidor de Django (informatica_dapps/):
python manage.py runserver
#---------------------------------------------------------------------------------------------------------------------------#
