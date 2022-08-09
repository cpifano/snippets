#---------------------------------------------------------------------------------------------------------------------------#
# COPIA DE ARCHIVOS ENTRE EQUIPO ANFITRIÓN Y CONTENEDOR:
#---------------------------------------------------------------------------------------------------------------------------#
docker cp nombre_container:/directorio/archivo /path_destino
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# MYSQL DUMP:
#---------------------------------------------------------------------------------------------------------------------------#
#Backup:
docker exec IDContenedor/NombreContenedor bash -c "mysql -u root --password=root NombreBD" > BackupBD.sql

#Restore:
cat BackupBD.sql | docker exec IDContenedor/NombreContenedor bash -c "mysql -u root --password=root NombreBD"
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# MONGODB DUMP:
#---------------------------------------------------------------------------------------------------------------------------#
#Backup:
#No Auth:
docker exec NOMBRECONTENEDOR sh -c 'mongodump --archive' > nombre_archivo.dump

#Authenticated:
docker exec NOMBRECONTENEDOR sh -c 'mongodump --authenticationDatabase admin -u USUARIO -p PASSWORD --db NOMBRE_DB --archive' > nombre_archivo.dump



#Restore:
#No Auth:
docker exec -i NOMBRECONTENEDOR sh -c 'mongorestore --archive' < nombre_archivo.dump

#Authenticated:
docker exec -i NOMBRECONTENEDOR sh -c 'mongorestore --authenticationDatabase admin -u USUARIO -p PASSWORD --db NOMBRE_DB --archive' < db.dump
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# AÑADIR/INSTALAR APP A UN CONTENEDOR DE FORMA SENCILLA:
#---------------------------------------------------------------------------------------------------------------------------#
#Agregar una app de forma sencilla desde dentro de un container:
#Ejemplo curl no suele estar presente en varias imagenes,
apk add -U curl
#---------------------------------------------------------------------------------------------------------------------------#
