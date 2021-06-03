#---------------------------------------------------------------------------------------------------------------------------#
# REPLICA SET:
#---------------------------------------------------------------------------------------------------------------------------#
# El replica set es el encargado de mantener las creaciones de Pods (y su cantidad de réplicas) y se establecerse como
# propietario de los mismos. Para ello los Replica Set utilizan los labels de un Pod para su control de Ownership.
# Si un Pod muere, el replica set es quien se encarga de crear uno nuevo en su lugar con las características definidas.
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
#Crear un Replica Set desde un archivo de manifiesto:
#Si no existe el Replica Set lo crea y si ya existe lo actualiza en base al manifiesto.
kubectl apply -f nombre_archivo.yaml

#Eliminar un Replica Set desde un archivo de manifiesto:
kubectl delete -f nombre_archivo.yaml

#Contenido de nombre_archivo.yaml:--------------------------------------------------#
#DEFINICIÓN DEL REPLICA SET:
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: nombre_replicaset
  labels:
    app: nombre_app
spec:
  replicas: 3 #Cantidad de réplicas (Pods)
  selector:
    matchLabels:
      app: nombre_app #Cuantificará todos los que cumplan con el label (Condición).
  #DEFINICIÓN DEL POD:
  template:
    metadata:
      labels:
        app: nombre_app
    spec:
      containers:
      - name: nombre_contenedor
        image: nombrez_imagen
#-----------------------------------------------------------------------------------#

#Mostrar los Replica Set del clúster de kubernetes:
kubectl get replicaset #Shortname: rs
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
# CARACTERÍSTICAS A TENER EN CUENTA DE UN REPLICA SET:
#---------------------------------------------------------------------------------------------------------------------------#
# La capacidad de adopción de pods que poseen los replica set puede ser peligrosa ya que los Pods adopatos (quienes
# cumplan la condición del label) no necesariamente respeten el template, es decir, pueden ser contenedores
# completamente distintos.
# No permiten actualizar los contenedores de forma automática, había que eliminar todas las replicas para que se
# vea reflejado el cambio en todas las replicas. Si cambiamos el manifiesto del Replica Set ningún Pod recibirá el
# cambio, solo las nuevas replicas a partir de ese cambio poseeran los cambios reflejados.
#---------------------------------------------------------------------------------------------------------------------------#
