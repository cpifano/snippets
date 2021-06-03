#---------------------------------------------------------------------------------------------------------------------------#
# REPOSITORIOS:
#---------------------------------------------------------------------------------------------------------------------------#
#Instalar paquetes de los repositorios de Python (PyPi):
easy_install nombre_de_paquete
pip install nombre_de_paquete

#Ver paquetes instalados en el equipo:
pip freeze

#Desinstalar todos los paquetes instalados:
pip freeze > requirements.txt
pip uninstall -r requirements.txt -y
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
#RAISE:
#---------------------------------------------------------------------------------------------------------------------------#
#Crear una excepción:
class TinyIntError(Exception):
    pass

def tiny_int(valor):
    return valor >= 0 and valor <= 255

try:
    numero = 400
    if tiny_int(numero):
        print('El número es correcto')
    else:
        raise TinyIntError('El valor no es tiny_int') #Ascender a la excepción
except TinyIntError as error:
    print (error)
#---------------------------------------------------------------------------------------------------------------------------#
