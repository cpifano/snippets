#---------------------------------------------------------------------------------------------------------------------------#
# MYSQL:
#---------------------------------------------------------------------------------------------------------------------------#
#DESCARGAR IMAGEN OFICIAL MYSQL:
docker pull mysql

#INICIAR CONTENEDOR:
docker run --name NombreContenedor -e MYSQL_ROOT_PASSWORD=my_password -d mysql:tag

#-p redirecciona puerto de la maquina anfitrion al puerto del contenedor
docker run --name NombreContenedor -p 3306:3306 -e MYSQL_ROOT_PASSWORD=my_password -d mysql:tag

#Nota: si no se especifica host en la ejecucion por mas que se haya redireccionado el puerto da error de socket.
#mysql -u root -pmy_password -h 127.0.0.1

#REVISAR CONFIGURACION DE CONTENEDOR:
#Podemos revisar la IP del contenedor y conectarnos desde la maquina anfitrion especificando la IP de host.
docker inspect IDContenedor/NombreContenedor

#La IP del contenedor es solo accesible desde el equipo anfitrion.
mysql -u root -pmy_password -h 10.66.33.1

#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
# MONGODB:
#---------------------------------------------------------------------------------------------------------------------------#
#DESCARGAR IMAGEN OFICIAL MONGODB:
docker pull mongo

#INICIAR CONTENEDOR:
docker run -d --name NombreContenedor -p 27017:27017 mongo:tag
#---------------------------------------------------------------------------------------------------------------------------#
