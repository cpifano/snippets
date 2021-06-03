#---------------------------------------------------------------------------------------------------------------------------#
# LIMITAR RECURSOS DE UN CONTENEDOR CON DOCKER COMPOSE:
#---------------------------------------------------------------------------------------------------------------------------#
#Archivo docker-compose.yml:
version: '2'
services:
	nombre_servicio:
		nombre_contenedor: nginx
		mem_limit: 20m
		cpuset: "0"
		image: nginx:alpine

#CORRER CONTENEDOR:
docker-compose -f docker-compose.yml up -d
#---------------------------------------------------------------------------------------------------------------------------#
