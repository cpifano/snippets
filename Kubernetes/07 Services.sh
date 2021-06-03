#---------------------------------------------------------------------------------------------------------------------------#
# SERVICIOS:
#---------------------------------------------------------------------------------------------------------------------------#
# Es un objeto aislado que se encarga de observar los pods que posean un label especificado.
# Este servicio nos va a proveer entre otras cosas una IP y DNS única para acceder a dichos pods a través del servicio en si
# y este mismo se encargará del balanceo de carga y la redirección segura en caso de falla de algún pod (tolerancia a fallas).

# Endpoints:
# Es creado automaticamente cuando creamos un servicio.
# Si un pod cumple con el tag especificado en el servicio la IP de ese pod es alojada en Endpoint.
# Endpoints basicamente es una lista de IPs de los pods de un servicio.
# Si un pod muere cualquiera sea el motivo el servicio eliminará al mismo del Endpoint.
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
#Crear un Servicio desde un archivo de manifiesto:
#Si no existe el Servicio lo crea y si ya existe lo actualiza en base al manifiesto.
kubectl apply -f nombre_archivo.yaml

#Creará el Deployment, el ReplicaSet, los Pods, y Creará el servicio asociado.

#Contenido de nombre_archivo.yaml:--------------------------------------------------#
#DEFINICIÓN DEL DEPLOYMENT:
apiVersion: apps/v1
kind: Deployment
metadata:
  annotations:
    kubernetes.io/change-cause: "Initial deployment"
  name: nombre_deployment
  labels:
    app: nombre_app
#DEFINICIÓN DEL REPLICA SET:
spec:
  replicas: 3
  selector:
    matchLabels:
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
        - containerPort: 80
---
#DEFINICIÓN DEL SERVICIO:
apiVersion: v1
kind: Service
metadata:
  name: nombre_servicio #El nombre de servicio creara un DNS local para acceder al mismo.
  labels:
    app: front  #Podemos especificar labels de service.
spec:
  type: ClusterIP #Tipo de servicio (ClusterIP por defecto).
  selector:
    app: nombre_app #Aqui se especifica cual será el tag selector, es decir el tag para asociar los pods a este servicio.
  ports:
    - protocol: TCP
      port: 8080      #Puerto que expondrá el servicio.
      targetPort: 80  #Puerto del pod/container (destino).
#-----------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
#Mostrar los Servicios del clúster de kubernetes:
kubectl get services

#Mostrar un servicio en particular segun su label:
kubectl get services -l app=front

#Ver información de un Servicio:
kubectl describe service nombre_servicio

#Elminar Servicio:
kubectl delete -f nombre_archivo.yaml
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
#Ver los Endpoints:
kubectl get endpoints

#Ver información de un Endpoint:
kubectl describe endpoints nombre_servicio
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# TIPOS DE SERVICIOS:
#---------------------------------------------------------------------------------------------------------------------------#
# ClusterIP:
# Tipo de servicio por defecto donde kubernetes genera un IP virtual (IP internal cluster, No esta asociada a una MAC física).

#Casos de uso solo dentro del Cluster:
curl nombre_servicio:8080 #DNS Local (Cluster).
curl IP_servicio:8080
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
# NodePort:
# Crea un ClusterIP pero nos permite exponer el servicio por fuera del cluster, exponiendo un puerto a través de un Nodo.
# NodePort expone un rango de puertos por defecto desde el 30000 al 32767.
...
spec:
  type: NodePort
...

#Casos de uso fuera del Cluster:
curl IP_Cluster/Nodo:puerto_asignado
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
# LoadBalancer:
# Kubernetes solo crea servicios de balanceo de carga sobre prestadores de Cloud (AWS, GoogleCloud, Azure).
# El LoadBalancer se crea directamente en la nube para que el servicio sea consumido desde el mismo y el se encargue de
# direccionar las peticiones a los nodos de forma eficiente a travez de los puertos expuestos de los mismos.
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
# ExternalName:
# Este tipo permite asociar un servicio a un nombre DNS, no a un selector típico como nombre_servicio.
apiVersion: v1
kind: Service
metadata:
  name: nombre_servicio
  labels:
    app: front
spec:
  type: ExternalName
  externalName: example.com
...
#---------------------------------------------------------------------------------------------------------------------------#
