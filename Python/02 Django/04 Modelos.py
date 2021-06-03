#---------------------------------------------------------------------------------------------------------------------------#
# MODELOS:
#---------------------------------------------------------------------------------------------------------------------------#
# Un modelo es la representación de los datos de nuestra aplicación.
# Contiene los campos básicos y el comportamiento de los datos que serán almacenados.
#---------------------------------------------------------------------------------------------------------------------------#
#Archivo models.py:
#Todos los modelos en Django extienden de django.db.models.Model
from django.db import models

class Usuario (models.Model):
    #Si no especifico ID Django asigna automaticamente un id autoincrementable.
    #pk = models.CharField(primary_key=True, max_length=10)

    #Atributos:                                        #Nombre es como le especificamos a Django a como queremos referirnos a este dato.
    nombre = models.CharField('Nombre', max_length=50) #Determino el largo máximo admitido.
    edad = models.IntegerField()
    fecha_nac = models.DateField()
    correo = models.EmailField()
    direccion = models.TextField()  #Descripción de texto más extensa.

    #Relaciones:
    #Para hacer uso de los modelos a relacionar deben ser importados previamente en el modelo actual.
    #from apps.nombre_proyecto.models import Nombre_clase_modelo

    #FooreignKey (N a 1):
    fk = models.FooreignKey(Nombre_clase_modelo, null=True, blank=True, on_delete=models.CASCADE)

    #OneToOneField (1 a 1):
    padre = models.OneToOneField(Nombre_clase_modelo, null=True, blank=True, on_delete=models.CASCADE)

    #ManyToManyField (N a N):
    hijo = models.ManyToManyField(Nombre_clase_modelo)

    #Retorno para referencia del objeto:
    #Cada vez que se refieran al objeto Usuario retornará el nombre actual y la descripcion entre parentesis:
    #En python 3 en adelante la funcion se llama __unicode__
    def __str__(self):
        return self.nombre + " (" + self.descripcion + ")"

#---------------------------------------------------------------------------------------------------------------------------#
#Dentro de settings.py se deberá definir las nuevas aplicaciones que creemos:
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'apps.nombre_app', #Especifico la ruta de mi app para que Django la detecte lea los modelos y cree las tablas necesarias.
]
#---------------------------------------------------------------------------------------------------------------------------#
