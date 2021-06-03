from django.contrib import admin

#Registrar modelos:
from .models import Numero_Calidad, PC, IP_PC, Monitor, Apple, IP_Apple, Portatil, IP_Portatil, Impresora, IP_Impresora, Firewall, Puerto_FW, Switch, IP_Switch, Puerto_SW, WLAN, Servidor, IP_Servidor, Televisor, Storage, IP_Storage, Escaner, NUC, IP_NUC, Movil

admin.site.site_header = "Informática Dapps v1.0"
admin.site.site_title = "Informática Dapps"
admin.site.index_title = "Bienvenidos a Informática Dapps"

class Numero_Calidad_Admin (admin.ModelAdmin):
    #Personalizar listado del administrador:
    list_per_page = 100

    list_display = (
        'codigo',
        'descripcion',
    )

    search_fields = ('codigo', 'descripcion')

class Agregar_IP_PC (admin.TabularInline):
    model = IP_PC
    extra = 0

class PC_Admin (admin.ModelAdmin):
    #Personalizar listado del administrador:
    list_per_page = 100

    list_display = (
        'codigo',
        'etiqueta',
        'estado',
        'ubicacion',
        'notas',
        'sistema_operativo',
        'ofimatica',
    )

    #Agregar posibilidad de editar elementos externos dentro del formulario:
    inlines = [Agregar_IP_PC]

    #Agregar un campo de busqueda al listado (criterios de busqueda):
    search_fields = ('codigo__codigo', 'codigo__descripcion', 'so_licencia_origen', 'so_licencia_activada', 'of_licencia_origen' , 'of_licencia_activada')

    #Agregar un filtro de un campo del modelo/clase:
    list_filter = ('estado',)

class Monitor_Admin (admin.ModelAdmin):
    #Personalizar listado del administrador:
    list_per_page = 100

    list_display = (
        'codigo',
        'etiqueta',
        'estado',
        'marca',
        'modelo',
        'pulgadas',
        'equipo_asociado',
        'notas',
    )

    #Agregar un campo de busqueda al listado (criterios de busqueda):
    search_fields = ('codigo__codigo', 'codigo__descripcion', 'serial', 'marca', 'modelo' , 'equipo_asociado')

    #Agregar un filtro de un campo del modelo/clase:
    list_filter = ('estado',)

class Agregar_IP_Apple (admin.TabularInline):
    model = IP_Apple
    extra = 0

class Apple_Admin (admin.ModelAdmin):
    #Personalizar listado del administrador:
    list_per_page = 100

    list_display = (
        'codigo',
        'etiqueta',
        'estado',
        'ubicacion',
        'modelo',
        'notas',
        'ofimatica',
    )

    #Agregar posibilidad de editar elementos externos dentro del formulario:
    inlines = [Agregar_IP_Apple]

    #Agregar un campo de busqueda al listado (criterios de busqueda):
    search_fields = ('codigo__codigo', 'codigo__descripcion', 'marca', 'modelo', 'of_licencia_origen' , 'of_licencia_activada')

    #Agregar un filtro de un campo del modelo/clase:
    list_filter = ('estado',)

class Agregar_IP_Portatil (admin.TabularInline):
    model = IP_Portatil
    extra = 0

class Portatil_Admin (admin.ModelAdmin):
    #Personalizar listado del administrador:
    list_per_page = 100

    list_display = (
        'codigo',
        'etiqueta',
        'estado',
        'ubicacion',
        'marca',
        'modelo',
        'notas',
        'sistema_operativo',
        'ofimatica',
    )

    #Agregar posibilidad de editar elementos externos dentro del formulario:
    inlines = [Agregar_IP_Portatil]

    #Agregar un campo de busqueda al listado (criterios de busqueda):
    search_fields = ('codigo__codigo', 'codigo__descripcion', 'marca', 'modelo', 'so_licencia_origen', 'so_licencia_activada', 'of_licencia_origen' , 'of_licencia_activada')

    #Agregar un filtro de un campo del modelo/clase:
    list_filter = ('estado',)

class Agregar_IP_Impresora (admin.TabularInline):
    model = IP_Impresora
    extra = 0

class Impresora_Admin (admin.ModelAdmin):
    #Personalizar listado del administrador:
    list_per_page = 100

    list_display = (
        'codigo',
        'etiqueta',
        'estado',
        'ubicacion',
        'marca',
        'modelo',
        'notas',
    )

    #Agregar posibilidad de editar elementos externos dentro del formulario:
    inlines = [Agregar_IP_Impresora]

    #Agregar un campo de busqueda al listado (criterios de busqueda):
    search_fields = ('codigo__codigo', 'codigo__descripcion', 'marca', 'modelo')

    #Agregar un filtro de un campo del modelo/clase:
    list_filter = ('estado', 'insumo',)

class Agregar_Puerto_FW (admin.TabularInline):
    model = Puerto_FW
    extra = 0

class Firewall_Admin (admin.ModelAdmin):
    #Personalizar listado del administrador:
    list_per_page = 100

    list_display = (
        'codigo',
        'etiqueta',
        'estado',
        'ubicacion',
        'marca',
        'modelo',
        'notas',
    )

    #Agregar posibilidad de editar elementos externos dentro del formulario:
    inlines = [Agregar_Puerto_FW]

    #Agregar un campo de busqueda al listado (criterios de busqueda):
    search_fields = ('codigo__codigo', 'codigo__descripcion', 'marca', 'modelo')

    #Agregar un filtro de un campo del modelo/clase:
    list_filter = ('estado',)

class Agregar_Puertos_SW (admin.TabularInline):
    model = Puerto_SW
    extra = 0

class Agregar_IP_SW (admin.TabularInline):
    model = IP_Switch
    extra = 0

class Switch_Admin (admin.ModelAdmin):
    #Personalizar listado del administrador:
    list_per_page = 100

    list_display = (
        'codigo',
        'etiqueta',
        'estado',
        'ubicacion',
        'marca',
        'modelo',
        'notas',
    )
    #Agregar posibilidad de editar elementos externos dentro del formulario:
    inlines = [Agregar_IP_SW, Agregar_Puertos_SW]

    #Agregar un campo de busqueda al listado (criterios de busqueda):
    search_fields = ('codigo__codigo', 'codigo__descripcion', 'marca', 'modelo')

    #Agregar un filtro de un campo del modelo/clase:
    list_filter = ('estado',)

class WLAN_Admin (admin.ModelAdmin):
    #Personalizar listado del administrador:
    list_per_page = 100

    list_display = (
        'codigo',
        'etiqueta',
        'estado',
        'ubicacion',
        'marca',
        'modelo',
        'SSID',
        'notas',
    )

    #Agregar un campo de busqueda al listado (criterios de busqueda):
    search_fields = ('codigo__codigo', 'codigo__descripcion', 'marca', 'modelo', 'SSID')

    #Agregar un filtro de un campo del modelo/clase:
    list_filter = ('estado',)

class Agregar_IP_Servidor (admin.TabularInline):
    model = IP_Servidor
    extra = 0

class Servidor_Admin (admin.ModelAdmin):
    #Personalizar listado del administrador:
    list_per_page = 100

    list_display = (
        'codigo',
        'etiqueta',
        'estado',
        'ubicacion',
        'marca',
        'modelo',
        'notas',
    )

    #Agregar posibilidad de editar elementos externos dentro del formulario:
    inlines = [Agregar_IP_Servidor]

    #Agregar un campo de busqueda al listado (criterios de busqueda):
    search_fields = ('codigo__codigo', 'codigo__descripcion', 'marca', 'modelo')

    #Agregar un filtro de un campo del modelo/clase:
    list_filter = ('estado',)

class Televisor_Admin (admin.ModelAdmin):
    #Personalizar listado del administrador:
    list_per_page = 100

    list_display = (
        'codigo',
        'etiqueta',
        'estado',
        'marca',
        'modelo',
        'pulgadas',
        'equipo_asociado',
        'notas',
    )

    #Agregar un campo de busqueda al listado (criterios de busqueda):
    search_fields = ('codigo__codigo', 'codigo__descripcion', 'serial', 'marca', 'modelo', 'equipo_asociado',)

    #Agregar un filtro de un campo del modelo/clase:
    list_filter = ('estado',)

class Agregar_IP_Storage (admin.TabularInline):
    model = IP_Storage
    extra = 0

class Storage_Admin (admin.ModelAdmin):
    #Personalizar listado del administrador:
    list_per_page = 100

    list_display = (
        'codigo',
        'etiqueta',
        'estado',
        'ubicacion',
        'marca',
        'modelo',
        'bahias',
        'capacidad_total',
        'RAID',
        'capacidad_real',
        'notas',
    )

    #Agregar posibilidad de editar elementos externos dentro del formulario:
    inlines = [Agregar_IP_Storage]

    #Agregar un campo de busqueda al listado (criterios de busqueda):
    search_fields = ('codigo__codigo', 'codigo__descripcion', 'marca', 'modelo')

    #Agregar un filtro de un campo del modelo/clase:
    list_filter = ('estado', 'RAID',)

class Escaner_Admin (admin.ModelAdmin):
    #Personalizar listado del administrador:
    list_per_page = 100

    list_display = (
        'codigo',
        'etiqueta',
        'estado',
        'ubicacion',
        'marca',
        'modelo',
        'notas',
    )

    #Agregar un campo de busqueda al listado (criterios de busqueda):
    search_fields = ('codigo__codigo', 'codigo__descripcion', 'marca', 'modelo')

    #Agregar un filtro de un campo del modelo/clase:
    list_filter = ('estado', )

class Agregar_IP_NUC (admin.TabularInline):
    model = IP_NUC
    extra = 0

class NUC_Admin (admin.ModelAdmin):
    #Personalizar listado del administrador:
    list_per_page = 100

    list_display = (
        'codigo',
        'etiqueta',
        'estado',
        'ubicacion',
        'marca',
        'modelo',
        'notas',
        'sistema_operativo',
        'ofimatica',
    )

    #Agregar posibilidad de editar elementos externos dentro del formulario:
    inlines = [Agregar_IP_NUC]

    #Agregar un campo de busqueda al listado (criterios de busqueda):
    search_fields = ('codigo__codigo', 'codigo__descripcion', 'so_licencia_origen', 'so_licencia_activada', 'of_licencia_origen' , 'of_licencia_activada', 'marca', 'modelo')

    #Agregar un filtro de un campo del modelo/clase:
    list_filter = ('estado',)

class Movil_Admin (admin.ModelAdmin):
    #Personalizar listado del administrador:
    list_per_page = 100

    list_display = (
        'codigo',
        'etiqueta',
        'estado',
        'marca',
        'modelo',
        'numero',
        'PIN',
        'PUK',
        'notas',
    )

    #Agregar un campo de busqueda al listado (criterios de busqueda):
    search_fields = ('codigo__codigo', 'codigo__descripcion', 'marca', 'modelo', 'numero')

    #Agregar un filtro de un campo del modelo/clase:
    list_filter = ('estado', )

admin.site.register (Numero_Calidad, Numero_Calidad_Admin)
admin.site.register (PC, PC_Admin)
admin.site.register (Monitor, Monitor_Admin)
admin.site.register (Apple, Apple_Admin)
admin.site.register (Portatil, Portatil_Admin)
admin.site.register (Impresora, Impresora_Admin)
admin.site.register (Firewall, Firewall_Admin)
admin.site.register (Switch, Switch_Admin)
admin.site.register (WLAN, WLAN_Admin)
admin.site.register (Servidor, Servidor_Admin)
admin.site.register (Televisor, Televisor_Admin)
admin.site.register (Storage, Storage_Admin)
admin.site.register (Escaner, Escaner_Admin)
admin.site.register (NUC, NUC_Admin)
admin.site.register (Movil, Movil_Admin)
