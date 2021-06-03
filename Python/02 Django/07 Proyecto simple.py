#---------------------------------------------------------------------------------------------------------------------------#
#Crear proyecto:
django-admin startproject inventario

#Crear aplicación dentro del proyecto (inventario/):
#Versiones de django <3: django-admin startapp equipos
python manage.py startapp equipos

#Crear migración inicial (inventario/):
#Versiones de django <3: python manage.py syncdb
python manage.py migrate

#Crear modelo (equipos/models.py)
class PC (models.Model):
    #Definir opciones para el campo de estado:
    ESTADOS = (('Activo', 'Activo'), ('Disponible', 'Disponible'), ('Baja', 'Baja'))

    #Definir atributos de la clase:
    codigo = models.CharField('Código', blank=False, primary_key=True, max_length=10)
    etiqueta = models.BooleanField()
    estado = models.CharField('Estado', max_length=10, choices=ESTADOS)
    ubicacion = models.CharField('Ubicación', blank=False, max_length=20)
    descripcion = models.CharField('Descripción', max_length=30)
    notas = models.TextField('Notas')

#Activar modelo (inventario/settings.py):
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'equipos',
]

#Crear archivo de migraciones para el modelo nuevo (inventario/):
python manage.py makemigrations

#Ejecutar migraciones:
python manage.py migrate

#Crear super usuario para administrar el sitio (inventario/):
python manage.py createsuperuser

#Correr el servidor de Django (inventario/):
python manage.py runserver

#Dar acceso a la aplicación equipos desde para el sitio de administración de Django (equipos/admin.py):
from django.contrib import admin

from .models import PC

admin.site.register(PC)
#---------------------------------------------------------------------------------------------------------------------------#

#Cambiar elementos del listado de la aplicación (equipos/admin.py):
from django.contrib import admin

# Register your models here.
from .models import PC

class PCAdmin(admin.ModelAdmin):
    #Personalizar listado del administrador:
    list_display = (
        'codigo',
        'estado',
        'descripcion',
    )

    #Agregar un campo de busqueda al listado (criterios de busqueda):
    search_fields = ('codigo', 'descripcion',)

    #Agregar un filtro de un campo del modelo/clase:
    list_filter = ('codigo', 'descripcion',)

admin.site.register(PC, PCAdmin)
#---------------------------------------------------------------------------------------------------------------------------#
