#---------------------------------------------------------------------------------------------------------------------------#
# ACLARACIÓN INICIAL:
#---------------------------------------------------------------------------------------------------------------------------#
#Todos los procesos detallados a continuación requeriran de privilegios de administrador sobre el equipo.
#Por ende se asume que el usuario que esté sesionado es 'root'.
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# INSTALAR KUBECTL:
#---------------------------------------------------------------------------------------------------------------------------#
#Descargar binario (latest):
curl -LO "https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl"

#Habilitar permisos de ejecución:
chmod +x ./kubectl

#Mover el archivo binario al directorio de aplicaciones binarias de usuarios:
mv ./kubectl /usr/local/bin/kubectl

#Comprobar la version:
kubectl version --client
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# INSTALACIÓN MINIKUBE:
# Nos permite emular un cluster de Kubernetes de forma local.
# Minikube se centra en facilitar el aprendizaje y el desarrollo para Kubernetes.
#---------------------------------------------------------------------------------------------------------------------------#
#Descargar instalador binario:
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-arm64

#Habilitar permisos de ejecución:
chmod +x ./minikube

#Mover el binario al directorio de aplicaciones binarias del usuario:
mv ./minikube /usr/local/bin/minikube

#O Ejecutar instalador:
install minikube-linux-arm64 /usr/local/bin/minikube
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# INICIAR UN CLUSTER:
#---------------------------------------------------------------------------------------------------------------------------#
minikube start --vm-driver=<DRIVER>

#Intentará iniciar un cluster de K8 en la tecnología indicada utilizando el driver especificado.
#Drivers soportados:
# docker
# hyperv
# hyperkit
# kvm2
# parallels
# virtualbox
# podman
# vmware

#Establecer Driver predeterminado:
minikube config set driver <DRIVER>

#En caso de no especificar cual será el driver o especificarlo de forma explícita como "none",
#Minikube intentará iniciar el cluster de kubernetes en Docker.

#Ejemplos:
minikube start --vm-driver=none

#O
minikube start
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# COMANDOS BÁSICOS DE MINIKUBE:
#---------------------------------------------------------------------------------------------------------------------------#
#Chequear status:
minikube status

#Iniciar cluster kubernetes:
minikube start

#Detener cluster kubernetes:
minikube stop

#Eliminar el cluster actual:
minikube delete
#---------------------------------------------------------------------------------------------------------------------------#
