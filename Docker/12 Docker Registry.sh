#---------------------------------------------------------------------------------------------------------------------------#
# DOCKER REGISTRY:
#---------------------------------------------------------------------------------------------------------------------------#
# El Registro es una aplicación del lado del servidor que almacena y le permite distribuir imágenes de Docker.
# El registro es de código abierto, bajo la licencia permisiva de Apache.
#---------------------------------------------------------------------------------------------------------------------------#
#INICIAR TU PROPIO REGISTRO:
docker run -d -p 5000:5000 --name registry_container registry:2
docker run -d -p 5000:5000 --name registry_container -v $PWD/data:/var/lib/registry registry:2

#ASIGNAR UN TAG A UNA IMAGEN:
#Es necesario taggear la imagen antes de subirla a nuestro registro.
docker tag nombre_imagen:tag localhost:5000/nombre_imagen:tag

#SUBIR LA IMAGEN A NUESTRO REGISTRO:
docker push localhost:5000/nombre_imagen:tag

#DESCARGAR UNA IMAGEN DEL RIGSTRO:
docker pull localhost:5000/nombre_imagen:tag

#DESACTIVAR AUTENTICACION PARA PODER HACER PUSH DESDE DIFERENTES NODOS EN UNA RED:
nano /lib/systemd/system/docker.service

ExcecStart=/usr/bin/dockerd --insecure-registry IP_equipo:5000

#DETENER REGISTRO Y ELIMINAR TODOS LOS DATOS:
docker container stop registry && docker container rm -v registry
#---------------------------------------------------------------------------------------------------------------------------#
