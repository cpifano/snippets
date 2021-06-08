#---------------------------------------------------------------------------------------------------------------------------#
# DJANGO USER LOGIN:
#---------------------------------------------------------------------------------------------------------------------------#
# Django provee una vista 'login' que realiza la validación de usuarios y contraseñas con el modelo de usuarios que
# provee el framework.
#---------------------------------------------------------------------------------------------------------------------------#
#Archivo url.py de la aplicación:
from django.conf.urls import url, include
from django.contrib import admin

urlpatterns = [
    url(r'^login/$', login, {'template_name': 'nombre_template_login.html'}, name='login')
]

#---------------------------------------------------------------------------------------------------------------------------#
#Archivo setting.py del proyecto:

#Importar resolver en caso de usar reverse_lazy:
import django.core.urlresolvers import reverse_lazy

#Agregar variable al final del documento:
# LOGIN_REDIRECT_URL = '/accounts/profile'
# Esta variable determina a donde ir luego de realizar un login exitoso.
LOGIN_REDIRECT_URL = reverse_lazy('nombre_app: nombre_app_list')

#---------------------------------------------------------------------------------------------------------------------------#
#Archivo template nombre_template_login.html:
{% extends 'base.html' %}

{% bock content %}
<form method="post">
    #Agregar tocken de seguridad que provee Django:
    {% csrf_token %}

    <input type="text" name="username">
    <input type="password" name="password">

    <button type="submit">Iniciar sesión</button>
</form>
{% endblock %}

#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# DJANGO CREATION FORM:
#---------------------------------------------------------------------------------------------------------------------------#
# Django provee un formulario para la gestión del modelo User del framework.
#---------------------------------------------------------------------------------------------------------------------------#
#Archivo user_form.py de nuestra app:
from django.contrib.auth.models import User             #Modelo de usuarios de Django.
from django.contrib.auth.forms import UserCreationForms #Formulario que provee Django.

class RegistroForm(UserCreationForm):

	class Meta:
		model = User
		fields = [
				'username',
				'first_name',
				'last_name',
				'email',
			]
		labels = {
				'username': 'Nombre de usuario',
				'first_name': 'Nombre',
				'last_name': 'Apellidos',
				'email': 'Correo',
		}

#---------------------------------------------------------------------------------------------------------------------------#
#Archivo views.py de my propia app usuarios:
from django.contrib.auth.models import User             #Modelo de usuarios de Django.
from django.views.generic import CreateView             #Vista genérica
from django.core.urlresolvers import reverse_lazy       #Resolver

#Importar nuestro formulario de usuarios:
from apps.usuario.forms import RegistroForm

class RegistroUsuario(CreateView):
    model = User
    template_name = "usuario/registro.html"
    form_class = UserCreationForms
    success_url = reverse_lazy('usuario: listado_usuarios')

#---------------------------------------------------------------------------------------------------------------------------#
#Archivo url.py de la aplicación:
from django.conf.urls import url, include
from django.contrib import admin

urlpatterns = [
    url(r'^login/$', login, {'template_name': 'nombre_template_login.html'}, name='login')
    url(r'^registro/$', RegistroUsuario.as_view(), name='registrar_usuario')
]

#---------------------------------------------------------------------------------------------------------------------------#
# Archivo template usuario/registro.html:
{% extends 'base.html' %}

{% bock content %}
<form method="post">
    #Agregar tocken de seguridad que provee Django:
    {% csrf_token %}

    <input type="text" name="first_name">
    <input type="text" name="last_name">
    <input type="text" name="username">
    <input type="text" name="email">
    <input type="password" name="password1">
    <input type="password" name="password2">

    <button type="submit">Iniciar sesión</button>
</form>
{% endblock %}
#---------------------------------------------------------------------------------------------------------------------------#
