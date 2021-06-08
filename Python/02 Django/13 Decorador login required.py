#---------------------------------------------------------------------------------------------------------------------------#
# DECORADOR LOGIN REQUIRED:
#---------------------------------------------------------------------------------------------------------------------------#
# Este decorador nos permite restringir el acceso a las URL solo a usuarios logeados.
#---------------------------------------------------------------------------------------------------------------------------#
#Archivo url.py de la aplicación:
from django.conf.urls import url, include

#Importar decorador login_required:
from django.conf.auth.decorators import login_required

urlpatterns = [
    url(r'^login/$', login, {'template_name': 'nombre_template_login.html'}, name='login')
    url(r'^registro/$', RegistroUsuario.as_view(), name='registrar_usuario')

    #Utilizar decorador login required:
    url(r'^listar$', login_required(nombre_vista_listar.as_view()), name='listar_elementos'),
]

#---------------------------------------------------------------------------------------------------------------------------#
#Archivo de URLs globales:
urlpatterns = [
    #...#
    url(r'^accounts/login/', login, {'template_name':'index.html'}, name='login'),
    url(r'^logout/', logout_then_login, name='logout'),
    #...#
]

#---------------------------------------------------------------------------------------------------------------------------#
#Archivo setting.py del proyecto:
LOGIN_REDIRECT_URL = reverse_lazy('nombre_app: nombre_app_list')
LOGOUT_REDIRECT_URL = reverse_lazy('nombre_app: login') #Generamos una redirección para el logout.

#---------------------------------------------------------------------------------------------------------------------------#
