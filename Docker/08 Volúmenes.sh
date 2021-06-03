#---------------------------------------------------------------------------------------------------------------------------#
# VOLÚMENES:
#---------------------------------------------------------------------------------------------------------------------------#
#Los volúmenes permiten almacenar datos persistentes del contenedor.
#---------------------------------------------------------------------------------------------------------------------------#
#MOSTRAR LOS VOLUMENES DE CONTENEDORES EN EJECUCIÓN:
docker volume ls

#ELIMINAR UN VOLUMEN:
docker volume rm NombreVolumen

#---------------------------------------------------------------------------------------------------------------------------#
#VOLUMENES DE HOST:
#Definidos en el sistema de archivos del equipo anfitrión.

#CASO PRÁCTICO MYSQL:
docker run -d --name NombreContainer -p 3360:3306 -e "MYSQL_ROOT_PASSWORD=pass" -v /directorio_local/:/var/lib/mysql mysql:tag

#CASO PRÁCTICO MONGODB:
docker run -d --name NombreContenedor -p 27017:27017 -v /directorio_local/:/data/db mongo:tag

#---------------------------------------------------------------------------------------------------------------------------#
#VOLUMENES ANONYMUS:
#Definidos automaticamente por docker.
#Si no defino el directorio local donde mapear el volumen docker asignara uno de forma aleatoria dentro del directorio root
#de docker (/var/lib/docker) en el directorio de Volumes.
#Sin persistencia de datos.
docker run -d --name NombreContainer -p 3360:3306 -e "MYSQL_ROOT_PASSWORD=pass" -v /var/lib/mysql mysql:tag

#---------------------------------------------------------------------------------------------------------------------------#
#VOLUMENES NAMED:
#Creadas previamente por el usuario en docker.
#Puede ser util para tener acceso a un volumen desde multiples conenedores y no perderlo al momento de destruir uno de estos contenedores.

#Crear un volumen nombrado:
docker volume create mysql_data
docker run -d --name NombreContainer -p 3360:3306 -e "MYSQL_ROOT_PASSWORD=pass" -v mysql_data:/var/lib/mysql mysql:tag

#---------------------------------------------------------------------------------------------------------------------------#
#VER VOLUMENES HUERFANOS:
docker volume ls -f dangling=true

#Eliminar volumenes huerfanos por lote:
#-q solo retorna los IDs de los volumenes.
docker volume ls -f dangling=true -q | xargs docker volume rm
#---------------------------------------------------------------------------------------------------------------------------#
