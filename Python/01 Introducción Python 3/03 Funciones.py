#---------------------------------------------------------------------------------------------------------------------------#
# INTRODUCCION A FUNCIONES:
#---------------------------------------------------------------------------------------------------------------------------#
def suma(numero_1, numero_2):
    resultado = numero_1 + numero_2
    return resultado

print(suma(5,6))

#Definir valores por defecto:
def saludo(mensaje = 'Hola mundo'):
    print(mensaje)

saludo()

#Retorno multiple:
def multiples_valores():
    return 'Uno', 2, True #Retornará una tupla con los valores definidos.

print(multiples_valores())

#Asignacion múltiple:
cadena, entero, booleano = multiples_valores()

#Pasar funciones como paramentros:
saludo(suma(1,2))
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# ENTORNO DE VARIABLES:
#---------------------------------------------------------------------------------------------------------------------------#
def palindromo(frase):
    #Metodo para reemplazar una aparicion por otra:
    frase = frase.replace(' ','') #Variable local.

    #Retornará la cadena de caracteres al revés:
    return frase == frase[::-1]

def mostrar_resultado():
    #No es necesario especificar el uso de una variable global para la lectura.
    #Solo lectura:
    print('El resultado es:', resultado)

    #Editar variables globales:
    global variable_global #Si no existe la variable global la crea.
    variable_global = 5

    print('El nuevo contenido de la variable es:', variable_global)

#Variable global:
variable_global = 1
resultado = palindromo('anita lava la tina')
mostrar_resultado()
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# ARGUMENTOS DINÁMICOS:
#---------------------------------------------------------------------------------------------------------------------------#
def suma_dinamica(*args): #Crea una tupla argumento donde se alojaran todos los paramentros ingresados.
    resultado = 0
    for valor_actual in args:
        resultado = resultado + valor_actual
    return resultado

print(suma_dinamica(10,15,30))

#Argumentos dinámicos con claves:
def muestreo_diccionario(**kwargs):
    for valor_actual in kwargs:
        print(kwargs.get(valor_actual))

muestreo_diccionario(nombre='Juan', x=3, y=6, booleano=True)

#---------------------------------------------------------------------------------------------------------------------------#
# ACLARACIÓN:
# * N valores con tuplas.
# ** N valores con diccionarios.
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# LAMBDA:
#---------------------------------------------------------------------------------------------------------------------------#
# Lambda nos permite la creacion de funciones anónimas on demand.
# Las expresiones lambda pueden ser utilizadas para contener funcionalidades que no necesitan ser nombradas y normalmente
# se utilizan en un tiempo corto.
#---------------------------------------------------------------------------------------------------------------------------#
suma_one_line = lambda numero_1, numero_2 : numero_1 + numero_2
formato = lambda sentencia : '¿{}?'.format(sentencia)

print(suma_one_line(2,3))
print(formato('Transformar en interrogación'))
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# DECORADORES:
#---------------------------------------------------------------------------------------------------------------------------#
# Permiten sumar funcionalidades a funciones ya existentes sin modificar el código de la funcion en sí.
#---------------------------------------------------------------------------------------------------------------------------#
def decorador(funcion):
    def nueva_funcion():
        print('Pre-ejecución de funcion')
        funcion()
        print('Post-ejecución de funcion')

    return nueva_funcion

@decorador
def saludo():
    print('Hola mundo')

#Al ejecutar la funcion decorada tendrá todas las funcionalidades nuevas:
saludo()

#Los decoradores son útiles para sumar solo el mismo decorador a varias funciones.
@decorador
def saludo_dos():
    print('Hola mundo dos')

saludo_dos()
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# GENERADORES (YIELD):
#---------------------------------------------------------------------------------------------------------------------------#
#Yield permite retornar multiples ejecuciones sin cortar como lo haría el return.
def generador(*args):
    for valor_actual in args:
        yield valor_actual

for valor_actual in generador(1,2,3):
    print(valor_actual)
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# DOCUMENTACIÓN:
#---------------------------------------------------------------------------------------------------------------------------#
def prueba():
    """
    Docstring: Por convenvión las funciones deben ser documentadas de esta manera con la finalidad de que python pueda detectar la misma.
    """
    print('Test')

print(prueba.__doc__)
#---------------------------------------------------------------------------------------------------------------------------#
