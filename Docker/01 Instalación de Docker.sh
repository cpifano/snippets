#---------------------------------------------------------------------------------------------------------------------------#
# ARCHIVO DE CONFIGURACION DOCKER:
#---------------------------------------------------------------------------------------------------------------------------#
docker info
/lib/systemd/system/docker.service

#Directorio root docker:
docker info | grep -i root
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# CENTOS:
#---------------------------------------------------------------------------------------------------------------------------#
#INSTALAR UTILIDADES:
sudo yum install -y yum-utils device-mapper-persistent-data lvm2

#AGREGAR REPOSITORIOS:
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

#INSTALAR DOCKER:
sudo yum install docker-ce -y

#INICIAR SERVICIO:
sudo systemctl start docker

#PREDETERMINAR INICIO DE DOCKER EN ARRANQUE DEL SISTEMA:
sudo systemctl enable docker

#AGREGAR USUARIO AL GRUPO DE DOCKER:
sudo usermod -aG docker NombreUsuario

#CERRAR SESION:
exit

#INICIAR NUEVAMENTE Y PROBAR:
docker run hello-world
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# FEDORA:
#---------------------------------------------------------------------------------------------------------------------------#
#INSTALAR UTILIDADES:
sudo yum install -y yum-utils device-mapper-persistent-data lvm2

#AGREGAR REPOSITORIOS:
sudo yum-config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo

#INSTALAR DOCKER:
sudo yum install docker-ce -y

#PREDETERMINAR INICIO DE DOCKER EN ARRANQUE DEL SISTEMA:
sudo systemctl enable docker

#AGREGAR USUARIO AL GRUPO DE DOCKER:
sudo usermod -aG docker NombreUsuario

#CERRAR SESION:
exit

#INICIAR NUEVAMENTE Y PROBAR:
docker run hello-world
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# UBUNTU:
#---------------------------------------------------------------------------------------------------------------------------#
#ACTUALIZAR LISTA DE REPOSITORIOS:
sudo apt-get update

#INSTALAR UTILIDADES:
sudo apt-get install apt-transport-https ca-certificates curl software-properties-common -y

#AGREGAR GPG:
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

#AGREGAR REPOSITORIOS:
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic test"

#ACTUALIZAR LISTA DE REPOSITORIOS:
sudo apt-get update

#INSTALAR DOCKER:
sudo apt-get install docker-ce

#PREDETERMINAR INICIO DE DOCKER EN ARRANQUE DEL SISTEMA:
sudo systemctl enable docker

#AGREGAR USUARIO AL GRUPO DE DOCKER:
sudo usermod -aG docker NombreUsuario

#CERRAR SESION:
exit

#INICIAR NUEVAMENTE Y PROBAR:
docker run hello-world
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# DEBIAN:
#---------------------------------------------------------------------------------------------------------------------------#
#ACTUALIZAR LISTA DE REPOSITORIOS:
sudo apt-get update

#INSTALAR UTILIDADES:
sudo apt-get install apt-transport-https ca-certificates curl gnupg2 software-properties-common -y

#AGREGAR GPG:
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -

#AGREGAR REPOSITORIOS:
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable"

#ACTUALIZAR LISTA DE REPOSITORIOS:
sudo apt-get update

#INSTALAR DOCKER:
sudo apt-get install docker-ce

#PREDETERMINAR INICIO DE DOCKER EN ARRANQUE DEL SISTEMA:
sudo systemctl enable docker

#AGREGAR USUARIO AL GRUPO DE DOCKER:
sudo usermod -aG docker NombreUsuario

#CERRAR SESION:
exit

#INICIAR NUEVAMENTE Y PROBAR:
docker run hello-world
#---------------------------------------------------------------------------------------------------------------------------#
