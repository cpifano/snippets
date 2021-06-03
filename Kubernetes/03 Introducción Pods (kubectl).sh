#---------------------------------------------------------------------------------------------------------------------------#
# PODS:
#---------------------------------------------------------------------------------------------------------------------------#
# Son la unidad atómica en kubernetes (la más chica o mínima).
# Permite la comparticion de determinados namespaces entre containers:
# - IPC: Inter Process Comunication (Los contenedores podran ver los procesos de todos los contenedores dentro de ese POD).
# - Network (El POD tendrá una sola IP para concentrar los containers).
# - UTS: Unix Timesharing System (Comparten el mismo hostname en los contenedores dentro de ese POD).

# Es decir, un pod puede ser uno o más contenedores que comparten determinados namespaces entre si.
# Esto permite la concentración de los mismos en algunos aspectos.
# - Poseen un solo hostname.
# - Poseen una sola IP o Network.
# - Comparten procesos entre si.

# Por otra parte hay otros namespaces que no se comparten dentro de un POD:
# - Cgroup (Cada contenedor manejara el CPU y Memoria asignada).
# - Mount (Los volumenes montados en cada containers dentro de un POD se pueden manejar de forma individual).
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# KUBECTL:
#---------------------------------------------------------------------------------------------------------------------------#
# El comando kubectl nos brinda la posibilidad de enviar una directiva al Kube API Server.
# La directiva que se envíe por kubectl sera traducida a formato JSON para ser enviada al Kube API Server.
#---------------------------------------------------------------------------------------------------------------------------#
#Mostrar los pods del clúster de kubernetes:
kubectl get pods #Shortname: po

#Mostrar información extendida de los pod (Más información):
kubectl get pods -o wide

#Crear un pod:
kubectl run --generator=run-pod/v1 nombre_pod --image=nombre_imagen:tag

#Ver información de un pod:
kubectl describe pod nombre_pod

#Listar todos los recursos disponibles en kubectl:
kubectl api-resources

#Listar las versiones de cada recurso disponible:
kubectl api-versions

#Eliminar un pod:
kubectl delete pod nombre_pod nombre_otro_pod

#Mostrar la información de un pod en particular:
kubectl get pod nombre_pod

#Ver el manifiesto del pod (Declaración del Pod):
kubectl get pod nombre_pod -o yaml

#Ingresar a la consola de un pod:
#Si el pod posee un solo contenedor ingresará al mismo.
kubectl exec -ti nombre_pod -- sh

#Ver logs de un pod:
#-f: force
kubectl logs nombre_pod -f
#---------------------------------------------------------------------------------------------------------------------------#
