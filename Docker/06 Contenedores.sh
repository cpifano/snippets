#---------------------------------------------------------------------------------------------------------------------------#
# CONTENEDORES:
#---------------------------------------------------------------------------------------------------------------------------#
#LISTAR CONTENEDORES CORRIENDO:
docker ps

#LISTAR CONTENEDORES CORRIENDO Y CONTENEDORES DETENIDOS/CAIDOS:
docker ps -a

#CREAR CONTENEDOR EN BASE A IMAGEN:
#-d para que corra en modo demonio (segundo plano)
docker run -d --name NombreContenedor NombreImagen

#-p redirecciona puerto de la maquina anfitrion al puerto del contenedor
docker run -d --name NombreContenedor -p 80:80 NombreImagen

#-e crea variables de entorno
docker run -d -e "NombreVariable=Valor" --name NombreContenedor -p 80:80 NombreImagen

#-ti permite que no muera una ejecución ya que ejecuta en el CMD la una terminal.
docker run -dti --name NombreContenedor -p 80:80 NombreImagen

#Si no se especifica nombre al contenedor Docker le asigna uno automaticamente.

#RENOMBRAR CONTENEDOR:
docker rename NombreActual NombreNuevo

#DETENER CONTENEDOR:
docker stop IDContenedor/NombreContenedor

#INICIAR CONTENEDOR:
docker start IDContenedor/NombreContenedor

#REINICIAR CONTENEDOR:
docker restart IDContenedor/NombreContenedor

#ELIMINAR CONTENEDOR:
docker stop NombreContenedor && docker rm NombreContenedor

#-f force
#-v eliminar volumenes anonimos asociados al container.
docker rm -fv NombreContenedor

#Eliminar contenedores por lote:
docker ps -q | xargs docker rm -f

#VER EL LOG DE UN CONTENEDOR:
docker logs -f NombreContenedor

#INGRESAR A UN CONTENEDOR:
#-t terminal
#-i interactivo
#bash para determinar tipo de terminal
docker exec -ti IDContenedor/NombreContenedor bash

#-u especifica usuario
docker exec -u root -ti IDContenedor/NombreContenedor bash

#-c ejecuta un comando directamente y retorna la salida a el bash de host:
docker exec IDContenedor/NombreContenedor bash -c "ping 10.66.33.1"

#REVISAR CONFIGURACION DE CONTENEDOR:
docker inspect IDContenedor/NombreContenedor

#REVISAR LOGS DE UN CONTENEDOR:
docker logs -f IDContenedor/NombreContenedor

#VER CONSUMOS DE UN CONTENEDOR:
docker stats IDContenedor/NombreContenedor

#LIMITAR RECURSOS DEL CONTENEDOR:
#-m determina la cantidad de memoria a asignar al contendor.
#-cpuset-cpus determina la cantidad de cores (0 a N) a asignar al contendor.
docker run -d -m "5gb" -cpuset-cpus 0-1 --name NombreContenedor NombreImagen

#COPIAR ARCHIVOS A UN CONTENEDOR EN EJECUCIÓN:
docker cp ORIGEN_LOCAL NombreContenedor:DESTINO

#COPIAR ARCHIVOS DESDE UN CONTENEDOR EN EJECUCIÓN AL EQUIPO ANFITRION:
docker cp NombreContenedor:ORIGEN DESTINO_LOCAL

#CREAR UNA IMAGEN EN BASE A UN CONTENEDOR EN EJECUCIÓN:
#No es considerado una buena practica para el armado de imagenes, en ocasiones pierde el CMD y los contenidos de los volumenes definidos en el Dockerfile.
docker commit NombreContenedor NombreImagen

#CAMBIAR CMD DE IMAGEN EN EJECUCION DE CONTENEDOR:
docker run -d --name NombreContenedor NombreImagen echo "Hola mundo"

#CREAR UN CONTENEDOR TEMPORAL QUE SE AUTO DESTRUYA AL SALIR:
docker run --rm -ti NombreImagen

#---------------------------------------------------------------------------------------------------------------------------#
