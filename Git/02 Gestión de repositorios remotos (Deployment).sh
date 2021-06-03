#---------------------------------------------------------------------------------------------------------------------------#
# TRAER CAMBIOS A PRODUCCION:
#---------------------------------------------------------------------------------------------------------------------------#
#'Traer' commits nuevos desde el remote 'origin':
#Actualizar las ramas 'origin/<rama>'.
git fetch origin

#Mostrar lista de commits (en una linea, mostrar 10):
git log --pretty=oneline -10

#Mostrar diferencia de commits (los que estan en 'origin/master' y no en 'master'):
git log master..origin/master --pretty=oneline

#Combinar cambios de 'origin/master' a la rama atual:
git merge origin/master

#Ver ramas (asterisco en rama actual, '-a' incluye todas las ramas):
git branch -A
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
# VOLVER HACIA ATRÁS:
#---------------------------------------------------------------------------------------------------------------------------#
#Obtener <SHA-1> del commit anterior:
git log

#Volver a un commit anterior:
git checkout <SHA-1>
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
# RESOLVER CONFLICTO CON ARCHIVOS MODIFICADOS MANUALMENTE EN EL SERVIDOR:
#---------------------------------------------------------------------------------------------------------------------------#
git diff ARCHIVO.php
git checkout -- ARCHIVO.php
#---------------------------------------------------------------------------------------------------------------------------#
