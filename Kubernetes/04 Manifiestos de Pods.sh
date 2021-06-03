#---------------------------------------------------------------------------------------------------------------------------#
# MANIFIESTOS DE PODS:
#---------------------------------------------------------------------------------------------------------------------------#
#Crear o actualizar un pod desde un archivo de manifiesto:
#Si no existe el pod lo crea y si ya existe lo actualiza en base al manifiesto.
kubectl apply -f nombre_archivo.yaml

#Eliminar un pod desde un archivo de manifiesto:
kubectl delete -f nombre_archivo.yaml

#Contenido de nombre_archivo.yaml:--------------------------------------------------#
apiVersion: v1
kind: Pod
metadata:
  name: nombre_pod
spec:
  containers:
  - name: nombre_contenedor
    image: nombre_imagen
#-----------------------------------------------------------------------------------#
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# MULTIPLE PODS:
#---------------------------------------------------------------------------------------------------------------------------#
# Podemos definir multiples Pods dentro de un solo archivo de manifiesto:
#---------------------------------------------------------------------------------------------------------------------------#

#Contenido de nombre_archivo.yaml:--------------------------------------------------#
apiVersion: v1
kind: Pod
metadata:
  name: nombre_pod_uno
spec:
  containers:
  - name: nombre_contenedor
    labels:
      app: frontend
      env: dev
    image: nombrez_imagen
    #IfNotPresent: Este parametro nos permite que k8 busque primero en la base de
    # datos local de imágenes en lugar de DockerHub (Always por default).
    imagePullPolicy: IfNotPresent
    command: ['sh', '-c', 'echo Hola Mundo!']
---
apiVersion: v1
kind: Pod
metadata:
  name: nombre_pod_dos
spec:
  #También podemos definir varios contenedores dentro de un solo Pod:
  containers:
  - name: contenedor_uno
    image: nombre_imagen
  - name: contenedor_dos
    image: nombre_imagen
#-----------------------------------------------------------------------------------#

#Ver logs de un contenedor dentro de un pod:
kubectl logs nombre_pod -c nombre_contenedor

#Ingresar a la consola de un contenedor dentro de un pod:
kubectl exec -ti nombre_pod -c nombre_contenedor -- sh
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# LABELS:
#---------------------------------------------------------------------------------------------------------------------------#
# Nos permiten filtrar objetos para administrar de forma eficiente cada pieza de la arquitectura de kubernetes.
#---------------------------------------------------------------------------------------------------------------------------#
#Filtrar por labels:
kubectl get pods -l app=frontend
#---------------------------------------------------------------------------------------------------------------------------#
