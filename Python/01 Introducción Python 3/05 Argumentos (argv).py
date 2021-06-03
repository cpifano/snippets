#---------------------------------------------------------------------------------------------------------------------------#
# ARGV:
#---------------------------------------------------------------------------------------------------------------------------#
# Permite pasar parametros a nuestro script.
#---------------------------------------------------------------------------------------------------------------------------#
#Ejecutar un script de python con argumentos:
python3 nombre_archivo.py suma 2 3

#Ver parametros:
#Los parametros se gestionan dentro del array/lista de parametros definido en sys.argv
import sys

if __name__ == '__main__':
    if len(sys.argv) == 1: #El primer argumento siempre es el nombre del archivo.
        print("No hay argumentos")
    else:
        print(sys.argv) #Mostrar array de argumentos/parametros.
#---------------------------------------------------------------------------------------------------------------------------#
