#---------------------------------------------------------------------------------------------------------------------------#
# MYSQL DUMP:
#---------------------------------------------------------------------------------------------------------------------------#
#Backup
docker exec IDContenedor/NombreContenedor bash -c "mysql -u root --password=root NombreBD" > BackupBD.sql

#Restore
cat BackupBD.sql | docker exec IDContenedor/NombreContenedor bash -c "mysql -u root --password=root NombreBD"
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# AÑADIR/INSTALAR APP A UN CONTENEDOR DE FORMA SENCILLA:
#---------------------------------------------------------------------------------------------------------------------------#
#Agregar una app de forma sencilla desde dentro de un container:
#Ejemplo curl no suele estar presente en varias imagenes,
apk add -U curl
#---------------------------------------------------------------------------------------------------------------------------#
