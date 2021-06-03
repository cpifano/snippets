#---------------------------------------------------------------------------------------------------------------------------#
# PAQUETES:
#---------------------------------------------------------------------------------------------------------------------------#
# Carpeta que contenga todos los módulos/archivos que necesitemos según nuestro criterio de programación.
#
#   modelo #Carpeta_contenedora_de_paquete
#       __init__.py #Necesario para que el directorio se considere y reconozca como un paquete en python.
#       usuario.py  #Módulo/Archivo
#
#       En la primer ejecucion se creara __pycache__
#---------------------------------------------------------------------------------------------------------------------------#
#Importar paquete:
from modelo.usuario import *
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
#Contenido del archivo __init__.py:
#Nos permite importar de una forma más eficiente y ordenada los archivos que se encuentren dentro del paquete.
from .usuario import *

#También se utiliza para definir constantes:
constante = 'test'

#Contenido del archivo main.py:
from modelo import *
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
# SUB-PAQUETES:
#---------------------------------------------------------------------------------------------------------------------------#
#   Ejemplo:
#       main.py
#       usuarios (carpeta)
#            __init__.py
#           alumnos (carpeta)
#               __init__.py
#               clase_alum.py
#           docentes (carpeta)
#               __init__.py
#               clase_doce.property
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
#Contenido del archivo __init__.py dentro de alumnos:
from .clase_alum import *

#Contenido del archivo __init__.py dentro de usuarios:
from .usuarios import *

#Contenido de main:
from usuarios import *
#---------------------------------------------------------------------------------------------------------------------------#
