#---------------------------------------------------------------------------------------------------------------------------#
# DEPLOYMENT:
#---------------------------------------------------------------------------------------------------------------------------#
# Es el dueño de un ReplicaSet y nos permite llevar a cabo la actualización automatizada de versiones de imágenes
# asegurando la alta disponibilidad del servicio.

# Rolling Update Strategy:
# Al momento de actualizar la versión de una imágen con Deployment, se crea un nuevo ReplicaSet donde se alojarán
# los pods con la nueva versión mientras se van eliminando los pods de la versión previa y su respectivo ReplicaSet.

# Para ello se manejan los siguientes parametros:
# - Max unavailable: Cuantos pods voy a permitir que mueran durante el proceso de cambio (25% Default).
# - Max surge: Cuantos pods voy a permitir adicionar durante el proceso de cambio (25% Default).

# Al momento de realizar un Rolling Update podemos ir chequeando el avance del mismo con 'get pods' (STATUS).
# Pero en realidad hay comandos que nos daran la posibilidad de chequear el proceso de Rolling Update en tiempo real
# de foma más eficiente que con get pods.
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
#Crear un Deployment desde un archivo de manifiesto:
#Si no existe el Deployment lo crea y si ya existe lo actualiza en base al manifiesto (Rolling update).
kubectl apply -f nombre_archivo.yaml

#Contenido de nombre_archivo.yaml:--------------------------------------------------#
#DEFINICIÓN DEL DEPLOYMENT:
apiVersion: apps/v1
kind: Deployment
metadata:
  annotations:
    #Esta anotación servirá como mensaje al momento de controlar versiones de cambios (Commit message).
    kubernetes.io/change-cause: "Initial deployment"
  name: nombre_deployment
  labels:
    app: nombre_app
#DEFINICIÓN DEL REPLICA SET:
spec:
  #Cantidad de réplicas (Pods)
  replicas: 3
  selector:
    matchLabels:
      #Cuantificará todos los que cumplan con el label (Condición).
      app: nombre_app
  #DEFINICIÓN DEL POD:
  template:
    metadata:
      labels:
        app: nombre_app
    spec:
      containers:
      - name: nginx
        image: nginx:alpine
        ports:
        - containerPort: 80 #Qué puertos está utilizando el contenedor.
#-----------------------------------------------------------------------------------#

#Mostrar los Deployments del clúster de kubernetes:
#--show-labels: muestra las etiquetas del elemento.
kubectl get deployment --show-labels #Shortname: ds

#Retornar estado del Deployment:
#Con este comando podremos chequear si el mismo fue creado de forma exitosa, o si el mismo realizó de forma correcta un Rolling Update.
#Este comando nos mostrará en tiempo real lo que va pasando durante un Rolling Update.
kubectl rollout status deployment nombre_deployment

#Ver información de un Deployment:
#Dentro de Event quedará registrado el proceso de Rolling Update de un Deployment.
kubectl describe deployment nombre_deployment
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# HISTÓRICO Y REVISIONES DE DESPLIEGUES:
#---------------------------------------------------------------------------------------------------------------------------#
# Al generar un Rolling Update se genera un nuevo ReplicaSet donde se alojarán los pods actualizados.
# Por contraparte, quedará un ReplicaSet vació que era quien alojaba originalmente los pods de la version anterior.
#---------------------------------------------------------------------------------------------------------------------------#
#Ver revisiones del deployment (Control de versiones):
kubectl rollout history deployment nombre_deployment

#History Limit:
#Por defecto el deployment va a mantener hasta 10 ReplicaSet para poder hacer Roll back de versiones.
#Contenido de nombre_archivo.yaml:--------------------------------------------------#
...
#DEFINICIÓN DEL REPLICA SET:
spec:
  revisionHistoryLimit: 5 #Definimos que la cantidad máxima de ReplicaSet a mantener ahora es 5 para este deployment.
  replicas: 3
...
#-----------------------------------------------------------------------------------#

#Elminar deployment:
kubectl delete -f nombre_archivo.yaml
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# ROLL BACK:
#---------------------------------------------------------------------------------------------------------------------------#
#Se deberá especificar a que numero de version se desea hacer el rollout.
kubectl rollout undo deployment nombre_deployment --to-revision=numero_de_revision
#---------------------------------------------------------------------------------------------------------------------------#
