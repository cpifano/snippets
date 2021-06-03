#---------------------------------------------------------------------------------------------------------------------------#
# ADMIN.PY:
#---------------------------------------------------------------------------------------------------------------------------#
# Definido automaticamente dentro del directorio de la aplicación.
#---------------------------------------------------------------------------------------------------------------------------#
#Contenido del archivo admin.py:
from django.contrib import admin

#Registro mi modelo:
from .models import Usuario, Alumno

#Personalizar la pantalla de listado de una vista:
class UsuarioAdmin(admin.ModelAdmin):
    #Personalizar listado del administrador:
    list_display = (
        'nombre',
        'fecha_nac',
        'correo',
    )

    #Agregar un campo de busqueda al listado (criterios de busqueda):
    search_fields = ('nombre', 'correo')

    #Agregar un filtro de un campo del modelo/clase:
    list_filter = ('tipo',)

admin.site.register(Usuario, UsuarioAdmin)
admin.site.register(Alumno)
#---------------------------------------------------------------------------------------------------------------------------#
