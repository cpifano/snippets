#---------------------------------------------------------------------------------------------------------------------------#
# USER MAIL RECUPERATION:
#---------------------------------------------------------------------------------------------------------------------------#
# Django provee herramientas sencillas para llevar a cabo la recuperación de contraseñas de usuarios por medio del envío
# de correos electrónicos.
#---------------------------------------------------------------------------------------------------------------------------#
# Archivo settings.py del proyecto:
EMAIL_USE_TLS = True
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 25
EMAIL_HOST_USER = 'casilla.para.enviar.recuperacion@gmail.com'
EMAIL_HOST_PASSWORD = 'contraseña.de.la.casilla'
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
#Archivo de URLs globales:
urlpatterns = [
    #...#
    url(r'^accounts/login/', login, {'template_name':'index.html'}, name='login'),
    url(r'^logout/', logout_then_login, name='logout'),
    #...#

    url(r'^reset/password_reset', password_reset,
        {'template_name':'registration/password_reset_form.html',
        'email_template_name': 'registration/password_reset_email.html'},
        name='password_reset'),

    url(r'^password_reset_done', password_reset_done,
        {'template_name': 'registration/password_reset_done.html'},
        name='password_reset_done'),

    url(r'^reset/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>.+)/$', password_reset_confirm,
        {'template_name': 'registration/password_reset_confirm.html'},
        name='password_reset_confirm'
        ),

    url(r'^reset/done', password_reset_complete, {'template_name': 'registration/password_reset_complete.html'},
        name='password_reset_complete'),
]
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
# password_reset_form.html
#---------------------------------------------------------------------------------------------------------------------------#
# Archivo template del formulario de solicitud de recuperacion de contraseña:
{% extends 'base/base.html' %}
{% block navbar%}
{% endblock %}
{% block content %}

<p>Recuperar contraseña</p>

<form method="post">
	{% csrf_token %}
	<label for="id_email">Correo:</label> {{ form.email }}
	<input type="submit" value="Enviar"/>
</form>

{% endblock %}
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
# password_reset_email.html
#---------------------------------------------------------------------------------------------------------------------------#
# Mensaje para envío de correo con LINK de recuperación.
<p>
    Solicitaste reestablecimiento de contraseña.<br/>
    Click en el siguiente link para crear una nueva contraseña.
</p>

{% block reset_link %}
{{ protocol }}://{{ domain }}{% url 'password_reset_confirm' uidb64=uid token=token %}
{% endblock %}
Tu nombre de usuario es: {{ user.get_username }}
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
# password_reset_confirm.html
#---------------------------------------------------------------------------------------------------------------------------#
# Template de Formulario de reset de password.
{% extends 'base/base.html' %}
{% block navbar %}
{% endblock %}
{% block content %}

#Validar link de uso de una sola vez:
{% if validlink %}

<h1>Nueva contraseña</h1>

<form method="post">
{% csrf_token %}

{{ form.new_password1.errors }}
<label for="id_new_password1">Nueva contraseña:</label>
{{ form.new_password1 }}

{{ form.new_password2.errors }}
<label for="id_new_password2">Confirme contraseña:</label>{{ form.new_password2 }}
<input type="submit" value="Cambiar mi contraseña" />
</form>

{% else %}

<h1 class="text-center">ENLACE INVÁLIDO: ESTE ENLACE YA HA SIDO UTILIZADO</h1>

{% endif %}

{% endblock %}
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
# password_reset_done.html
#---------------------------------------------------------------------------------------------------------------------------#
# Este es solo un template de confirmación del envío del email de recuperación de password.
{% extends 'base/base.html' %}
{% block navbar%}
{% endblock%}
{% block content %}

<h4>Te hemos enviado un correo con un enlace para reestablecer tu contraseña :D</h4>

{% endblock %}
#---------------------------------------------------------------------------------------------------------------------------#

#---------------------------------------------------------------------------------------------------------------------------#
# password_reset_complete.html
#---------------------------------------------------------------------------------------------------------------------------#
# Este es solo un template de confirmación de confirmación de que todo el proceso fué exitoso.
{% extends 'base/base.html' %}
{% block navbar %}
{% endblock %}

{% block content %}
	<h1 class="text-center">Su contraseña se reestableció correctamente</h1>
	<p class="text-center"><a  href="{% url 'login' %}">Iniciar sesión</a></p>
{% endblock %}
#---------------------------------------------------------------------------------------------------------------------------#
