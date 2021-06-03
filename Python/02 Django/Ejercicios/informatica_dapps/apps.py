from django.apps import AppConfig
from suit.apps import DjangoSuitConfig
from suit.menu import ParentItem, ChildItem

class InventarioConfig(AppConfig):
    name = 'inventario'

class SuitConfig(DjangoSuitConfig):
    layout = 'vertical'

    menu = (
        ParentItem('Usuarios y grupos', children=[
            ChildItem(model='auth.user'),
            ChildItem('Grupos', 'auth.group'),
        ], icon='fa fa-users'),
        ParentItem('Inventario', children=[
            ChildItem(model='inventario.numero_calidad'),
            ChildItem(model='inventario.pc'),
            ChildItem(model='inventario.monitor'),
            ChildItem(model='inventario.apple'),
            ChildItem(model='inventario.portatil'),
            ChildItem(model='inventario.impresora'),
            ChildItem(model='inventario.firewall'),
            ChildItem(model='inventario.switch'),
            ChildItem(model='inventario.wlan'),
            ChildItem(model='inventario.servidor'),
            ChildItem(model='inventario.televisor'),
            ChildItem(model='inventario.storage'),
            ChildItem(model='inventario.escaner'),
            ChildItem(model='inventario.nuc'),
            ChildItem(model='inventario.movil'),
        ], icon='fa fa-file-o'),
    )
