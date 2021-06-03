#---------------------------------------------------------------------------------------------------------------------------#
# CONDICIONALES:
#---------------------------------------------------------------------------------------------------------------------------#
condicion = 'Verdadero'

#Operadores de comparación:
# >  <  >=  <=  !=  ==  and  or

#If:
if condicion == 'Verdadero':
    print('Sentencias dentro del if') #Identadas

print('Sentencias fuera del If') #Sin identar

#Else:
if condicion == 'Falso':
    print('Sentencias dentro del if') #Identadas
else:
    print('Sentencias dentro del else') #Identadas

print('Sentencias fuera del if y else') #Sin identar

#Else if:
if condicion == 'Falso':
    print('Sentencias dentro del if') #Identadas
elif condicion == 'Verdadero':
    print('Sentencias dentro del else') #Identadas

print('Sentencias fuera del if y else') #Sin identar

#Caso particular (Una sola linea)
mensaje = 'Valor si es verdadero' if condicion == 'Verdadero' else 'Valor si es falso'
print(mensaje)
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
# ESTRUCTURA REPETITIVA SIN CONTROL PREVIO (WHILE):
#---------------------------------------------------------------------------------------------------------------------------#
contador = 0
while contador < 10:
    contador+=1 #contador++
    print('Contador:', contador)
else:
    print('While ha terminado!')
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
# ESTRUCTURA REPETITIVA CON CONTROL PREVIO (FOR):
#---------------------------------------------------------------------------------------------------------------------------#
lista = [1,2,3,4,5,6,7,8,9,10]

for valor_actual in lista:
    print(valor_actual)

for clave_actual, valor_actual in enumerate(lista):
    print(clave_actual)

rango_01 = range(1,11) #Genera un elementos de rango 1 al 10.
rango_02 = range(11) #Genera un elementos de rango 0 al 10.
rango_02 = range(0,20,2) #Genera un elementos de rango 0 al 18 incrementando de a 2.

for valor_actual in rango_01:
    print(valor_actual)

#For convencional:
for valor_actual in range(0,100,1): #(i=0;i<100;i++)
    print(valor_actual)

#Recorrer un string:
for valor_actual in 'Hola mundo':
    print(valor_actual)

#Recorrer un diccionario:
diccionario = {'a':10, 'b':20, 'c':30}

for clave_actual, valor_actual in diccionario.items():
    print('Clave:', clave_actual, '- Valor:', valor_actual)

#List Comprehension:
#Crear una lista (array), de forma dinámica:
#El primer 'valor' es lo que se guardará en cada una de las posiciones del array.
lista = [valor for valor in range(0,101)]
print(lista)

#Con condicional (Solo retener numeros pares):
lista = [valor for valor in range(0,101) if valor % 2 == 0]
print(lista)
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
# SWITCH CASE:
#---------------------------------------------------------------------------------------------------------------------------#
# La sentencia switch no existe en Python.
# Los arquitectos del lenguaje no lo consideraron necesario al igual que sucede con do / while.
#---------------------------------------------------------------------------------------------------------------------------#
