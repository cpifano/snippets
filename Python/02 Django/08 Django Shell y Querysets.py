#---------------------------------------------------------------------------------------------------------------------------#
# DJANGO SHELL:
#---------------------------------------------------------------------------------------------------------------------------#
# Nos permite la posibilidad de interactuar con nuestras aplicaciones y modelos a travéz de una shell.
#---------------------------------------------------------------------------------------------------------------------------#
#Desde la raíz del proyecto:
manage.py shell

#Importar modelos para poder usarlos desde Django Shell:
from apps.nombre_app.models import NombreModelo

#Podemos ingresar valores sobre los modelos desde Django Shell:
NombreModelo.objects.create(nombre_campo="Valor", ...)

#Otra forma de guardar contenido en un modelo es alojarlo de forma previa en un objeto:
objUsuario = Usuario(Nombre="Camilo", ...)
objUsuario.save() #Posteriormente ejecutamos el método save sobre el objeto.

#Asignar una FooreignKey (N a 1):
objAlumno = Alumno(fkUsuario=objUsuario, ...)
objAlumno.save()

#Asignar un campo ManyToManyField (N a N):
objCurso1 = Curso(Nombre="Guitarra")
objCurso2 = Curso(Nombre="Bajo")
objAlumno.Contrato.add(objCurso1, objCurso2, ...)
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# QUERY SETS:
#---------------------------------------------------------------------------------------------------------------------------#
# Nos permiter realizar consultas a la base de datos a travéz de Django Shell.
#---------------------------------------------------------------------------------------------------------------------------#
#Realizar una consulta sobre todos los registros:
Usuario.objects.all()

#Consultar filtrando:
Usuario.objects.filter(id=1001)
Usuario.objects.filter(Nombre__contains="Camilo")

#Excluir (Todos los que NO empiecen con la letra "C"):
Usuario.objects.exclude(Nombre__startswith="C")

#Ordenar:
Usuario.objects.all().order_by('id') #ASC
Usuario.objects.all().order_by('id').reverse() #DESC

#Update:
Usuario.objects.filter(id=1001).update(Nombre="Juan")

#Count:
Usuario.objects.all().count()

#Delete:
Usuario.objects.filter(id=1001).delete()
#---------------------------------------------------------------------------------------------------------------------------#
