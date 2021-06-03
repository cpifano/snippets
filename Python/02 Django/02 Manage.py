#---------------------------------------------------------------------------------------------------------------------------#
# MANAGE:
#---------------------------------------------------------------------------------------------------------------------------#
# Utilidad de la línea de comandos que le permite interactuar con este proyecto Django de diferentes formas.
# (Es creado una vez que haya sido creado el proyecto).
#---------------------------------------------------------------------------------------------------------------------------#
#Correr servidor interno que provee Django:
#De forma predeterminada, el comando runserver inicia el servidor de desarrollo en la IP interna en el puerto 8000.
python manage.py runserver

#Cambiar el puerto del servidor a 8080:
python manage.py runserver 8080

#Cambiar la IP del servidor:
python manage.py runserver 0:8000   #0 es un atajo para 0.0.0.0
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
# CREAR UNA APLICAIÓN EN DJANGO:
#---------------------------------------------------------------------------------------------------------------------------#
#Crear una aplicacion (paquete):
#Cada aplicación en Django consiste en un paquete de Python que sigue una determinada convención.
python manage.py startapp nombre_app

#Contenido de la aplicación (paquete):
nombre_app/
    __init__.py
    admin.py
    apps.py
    migrations/
        __init__.py
    models.py
    tests.py
    views.py
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
#Revisa los modelos definidos en las apps dentro del documento settings.py y crea un archivo de migración (creación de esquema de BD):
python manage.py makemigrations

#Ejecuta los archivos de migraciones para la base de datos:
python manage.py migrate

#Crear super usuario para el proyecto de Django:
python manage.py createsuperuser

# Username: nombre_usuario
# Email address: nombre_usuario@correo.com
# Password: **********
# Password (again): *********
# Superuser created successfully.
#---------------------------------------------------------------------------------------------------------------------------#
