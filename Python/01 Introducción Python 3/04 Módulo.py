#---------------------------------------------------------------------------------------------------------------------------#
# DEFINICIÓN:
#---------------------------------------------------------------------------------------------------------------------------#
# Dentro del archivo a importar como 'Módulo' de funciones se debe especificar el interprete con el que se va a ejecutar
# el script.
# !/usr/bin/python3
#---------------------------------------------------------------------------------------------------------------------------#
"""
...Documentar el módulo...
"""

#Metadata:
__author__ = "Camilo Pifano"
__copyright__ = "Copyright 2020, Olimac"
__credits__ = "Olimac"

__licence__ = "GPL"
__version__ = "1.0.1"
__maintainer__ = "Camilo Pifano"
__email__ = "camilopifano@gmail.com"
__status__ = "Developer"

# help(nombre_archivo)
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# USO:
#---------------------------------------------------------------------------------------------------------------------------#
#Importar un archivo (Módulo):
import nombre_archivo

resultado = nombre_archivo.suma()
resultado = nombre_archivo.resta()

#__pycache__
# .pyc Genera un archivo compilado para reducir el tiempo de ejecución de cada modulo importado en el directorio de cache.

#Importar una funcion en particular:
from nombre_archivo import suma, resta

resultado = suma()
resultado = resta()

#Cambiar el nombre de una funcion:
from nombre_archivo import suma as mi_suma

#Multiples lineas (Saltos de linea):
from nombre_archivo import (suma,
                            resta,
                            multiplicacion,
                            division)

#Importar todo el contenido del archivo facilitando el uso de nombres de funciones:
from nombre_archivo import *
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# __NAME__:
#---------------------------------------------------------------------------------------------------------------------------#
#__name__ contiene el nombre del script principal (__main__).
print(__name__)
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# LIBRERIAS:
#---------------------------------------------------------------------------------------------------------------------------#
#Python ya posee módulos para importar.
import random
numero = random.randint(0, 10) #Numero entero aleatorio entre 0 hasta 10.

lista = [True, "String", 11, False]
valor = random.choice(lista) #Seleccionar aleatoriamente un elemento de una lista.

random.shuffle(lista) #Mezclar elementos de una lista.

import datetime
print(datetime.datetime.now())

import sys
import time

for i in range(100):
    time.sleep(0.5)
    sys.stdout.write("\r%d %%" %i) #Porcentaje de progreso de ejecución.
    sys.stdout.flush()
#---------------------------------------------------------------------------------------------------------------------------#
