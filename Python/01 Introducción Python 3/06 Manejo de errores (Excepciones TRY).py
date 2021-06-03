#---------------------------------------------------------------------------------------------------------------------------#
# EXCEPCIONES:
#---------------------------------------------------------------------------------------------------------------------------#
# Errores que se presentan en nuestro script durante su ejecución.
#---------------------------------------------------------------------------------------------------------------------------#
#Manejo de errores:
try:
    #Generamos un error (Nada es divisible en 0):
    print(2/0)
except Exception as ex:
    print("Error:", ex)
    print("Esto se ejecutará solo si falla la ejecución dentro del try.")
finally:
    print("Este bloque no es necesario pero se va a ejecutar pase lo que pase (Si o si).")

#Sin el try except nunca hubiera ejecutado esta linea:
print("Script finalizado")
#---------------------------------------------------------------------------------------------------------------------------#
