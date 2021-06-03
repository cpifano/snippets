from django.contrib import admin
from .models import Solicitante, Anticuerpo, Estudio, Marca


admin.site.site_header = "ApatLab App v.1.0"
admin.site.site_title = "ApatLab App"
admin.site.index_title = "Bienvenidos a ApatLab App"


class ListadoSolicitante(admin.ModelAdmin):
    #Personalizar listado del administrador:
    list_display = (
        'CI_RUT',
        'nombre_completo',
        'telefono',
        'correo',
    )

    #Agregar un campo de busqueda al listado (criterios de busqueda):
    search_fields = ('CI_RUT', 'nombre_completo', 'telefono', 'correo')

class Agregar_Marca (admin.TabularInline):
    model = Marca
    extra = 0

class ListadoAnticuerpo(admin.ModelAdmin):
    #Personalizar listado del administrador:
    list_display = (
        'nombre',
    )

    #Agregar posibilidad de editar elementos externos dentro del formulario:
    inlines = [Agregar_Marca]

    #Agregar un campo de busqueda al listado (criterios de busqueda):
    search_fields = ('nombre',)

class ListadoEstudio(admin.ModelAdmin):
    #Personalizar listado del administrador:
    list_display = (
        'num_caso',
        'fecha',
        'id_solicitante',
        'tacos',
        'tipo',
        'cantidad_laminas',
        'listar_anticuerpos',
        'precio',
    )

    #Agregar un campo de busqueda al listado (criterios de busqueda):
    search_fields = ('num_caso', 'fecha')

    #Agregar un filtro de un campo del modelo/clase:
    list_filter = ('tipo', 'id_solicitante')


admin.site.register(Anticuerpo, ListadoAnticuerpo)
admin.site.register(Solicitante, ListadoSolicitante)
admin.site.register(Estudio, ListadoEstudio)
