#---------------------------------------------------------------------------------------------------------------------------#
# REDES:
#---------------------------------------------------------------------------------------------------------------------------#
#VER RED DE DOCKER:
docker network ls

#VER DETALLES DE UNA RED EN PARTICULAR:
docker network inspect NombreRed/IDRed

#---------------------------------------------------------------------------------------------------------------------------#
# RED DE TIPO BRIDGE:
#---------------------------------------------------------------------------------------------------------------------------#
# Red por defecto de docker.
# En la red bridge los containers se pueden ver por IP, pero no por nombre.
#---------------------------------------------------------------------------------------------------------------------------#
#CREAR UNA RED:
#Si no se especifican los parametros docker los establece automaticamente al azar.
docker network create NombreRed

#DEFINIR CARACTERISTICAS DE UNA RED:
docker network create -d bridge --subnet 192.168.2.0/24 --gateway 192.168.2.1 NombreRed

#ASIGNAR UNA RED ESPECIFICA EN LA CREACION DE UN CONTENEDOR:
docker run -d -name docker_container --network NombreRed/IDRed ID/Nombre_Imagen

#ESPECIFICAR UNA DIRECCIÓN IP  EN LA CREACION DE UN CONTENEDOR:
docker run -d -name docker_container --network NombreRed/IDRed --ip 192.168.2.11 ID/Nombre_Imagen

#Docker posee un dns y dhcp que permite la asignación automatica de direcciones IP y asociar sus nombres de contenedor a
#respectivas IPs.
docker exec nombre_container_01 bash -c "ping nombre_container_02"

#CONECTAR UNA RED EXISTENTE A UN CONTENEDOR:
#Agrega una interfaz de red al contenedor dentro de la red existente.
docker network connect nombre_red nombre_container

#DESCONECTAR A UN CONTENEDOR DE UNA RED:
#Quita interfaz de red al contenedor.
docker network disconnect nombre_red nombre_container

#ELIMINAR UNA RED:
#La red para ser eliminada no debe tener contenedor asignados a la misma.
docker network rm nombre_red
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# RED DE TIPO HOST:
# Utiliza la interfaz del equipo anfitrion con la configuración que esta ya tenga asignada.
#---------------------------------------------------------------------------------------------------------------------------#
#Conectar un contenedor a la red host.
docker run -d -name docker_container --network host ID/Nombre_Imagen
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# RED DE TIPO NONE:
#---------------------------------------------------------------------------------------------------------------------------#
# Sirve para crear un contenedor sin acceso a redes, aislado.
#---------------------------------------------------------------------------------------------------------------------------#
#Conectar un contenedor a la red none.
docker run -d -name docker_container --network none ID/Nombre_Imagen
#---------------------------------------------------------------------------------------------------------------------------#
