#---------------------------------------------------------------------------------------------------------------------------#
# HOLA MUNDO:
#---------------------------------------------------------------------------------------------------------------------------#
print('Hola mundo')

variable = "Hola mundo"
print(variable)
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
# OPERADORES MATEMÁTICOS:
#---------------------------------------------------------------------------------------------------------------------------#
num1 = 9
num2 = 3

resultado = num1 + num2
print("Suma", resultado)

resultado = num1 - num2
print("Resta", resultado)

resultado = num1 * num2
print("Multiplicación", resultado)

resultado = num1 / num2
print("División", resultado)

resultado = num1 // num2
print("División con resultado entero", resultado)

resultado = num1 ** num2
print("Exponencial", resultado)
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
# STRINGS / CADENAS:
#---------------------------------------------------------------------------------------------------------------------------#
saltos_de_linea_01 = ''' Este
String tiene
saltos de linea'''

saltos_de_linea_02 = "Salto de linea \n convencional"

concatenacion_01 = saltos_de_linea_01 + saltos_de_linea_02
concatenacion_02 = "Primer variable: " + saltos_de_linea_01 + "y Segunda variable: " + saltos_de_linea_02
concatenacion_03 = "Primer variable: %s y Segunda variable: %s" %(saltos_de_linea_01, saltos_de_linea_02)
concatenacion_04 = "Primer variable: {} y Segunda variable: {}".format(saltos_de_linea_01, saltos_de_linea_02) #Método de objeto string
concatenacion_05 = "Primer variable: {a} y Segunda variable: {b}".format(b = saltos_de_linea_02, a = saltos_de_linea_01) #Método de objeto string con referencia (No importa orden)

print(concatenacion_05)

#Manejo de strings como arreglos:
mensaje = "Hola mundo"
print(mensaje[0:4]) #Desde 0 y menor a 4 (substr Devuelve parte de una cadena)
print(mensaje[0:4:2]) #Desde 0, menor a 4 y con valor de 2 de incremento (salta de 2 en 2)
print(mensaje[::-1]) #Dar vuelta string

#Métodos de formato de strings:
mensaje.lower() #Metodo to lower
mensaje.upper() #Metodo to upper
mensaje.title() #Metodo titulo (Camel case)

#Métodos de busqueda de strings:
mensaje.find('a') #Devuelve la primer posicion en la que encuentra la letra 'a'.
mensaje.count('o') #Cuenta la cantidad de apariciones de la letra 'c'.

#Metodos de sustitución:
mensaje.replace('a', 'e') #Reemplaza todas las letras 'a' por letras 'e'.
mensaje.split(' ') #Divide un string en varios string dentro de un array segun el separador definido ' ' (Explode).
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
# ARREGLOS:
#---------------------------------------------------------------------------------------------------------------------------#
arreglo_01 = ['Hola', 15, 16.5, True]
print(arreglo_01) #El metodo print realiza el volcado del array por completo (var_dump).

arreglo_01.append('juan') #Agrega un elemento al final del arreglo.
arreglo_01.insert(0, 'Primer elemento') #Agrega un elemento en la posición indicada del arreglo ('0').
arreglo_01.remove(1) #Elimina un elemento segun la posición indicada del arreglo ('1').
ultimo = arreglo_01.pop() #Retorna el último elemento del arreglo y lo elimina del array.

arreglo_02 = [1, 2, 3]

arreglo_02.sort() #Ordena el contenido del array ASC
arreglo_02.sort(reverse = True) #Ordena el contenido del array DESC

arreglo_01.extend(arreglo_02) #Agrega el contenido de arreglo_02 al final de arreglo_01 (Merge).
arreglo_01.append(arreglo_02) #Agrega el arreglo_02 en la última posición del arreglo_01.

#La tupla es un array que no se puede modificar durante la ejecución del programa.
tupla = (1, False, "Mundo")
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
# DICCIONARIOS (ARREGLOS MULTIDIMENSIONALES):
#---------------------------------------------------------------------------------------------------------------------------#
diccionario_01 = {
    'a' : 55,
    'b' : True,
    'c' : 'Juan',
    'd' : [1, 2, 3, 4]
}

diccionario_01['e'] = "Hola"
diccionario_01[1] = 'Test'

print(diccionario_01)

# elemento = diccionario['z'] #Si no existe el elemento retorna error.
elemento = diccionario_01.get('z', False) #Si no existe el elemento retorna lo que definamos como retorno (False).

#Eliminar un elemento del diccionario:
del diccionario_01[1]

#Retorna las claves del diccionario:
claves_obj = diccionario_01.keys() #Objeto iterable.
claves_array = list(diccionario_01.keys()) #Lista (array).
claves_tuple = tuple(diccionario_01.keys()) #Tupla (array constante).

diccionario_02 = {'z': 1, 'y:6'}

diccionario_01.update(diccionario_02) #Extender o agregar el diccionario_02 en el diccionario_01.

#---------------------------------------------------------------------------------------------------------------------------#
