#---------------------------------------------------------------------------------------------------------------------------#
# JET-ADMIN:
#---------------------------------------------------------------------------------------------------------------------------#
#Instalar:
pip install django-jet

#Agregar Jet a INSTALLED_APPS del archivo settings.py:
INSTALLED_APPS = (
    ...
    'jet',
    'django.contrib.admin',
)

#Asegúrese de que el procesador de contexto esté habilitado en settings.py (forma Django 1.8+):
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                ...
                'django.template.context_processors.request',
                ...
            ],
        },
    },
]

#Agregar Jet a urlpatterns del archivo urls.py:
urlpatterns = patterns(
    '',
    url(r'^jet/', include('jet.urls', 'jet')),  # Django JET URLS
    url(r'^admin/', include(admin.site.urls)),
    ...
)

#Crear BDs de Jet:
python manage.py migrate jet

#Solo si está en un entorno de producción:
python manage.py collectstatic

#Borrar la cache del navegador.
#---------------------------------------------------------------------------------------------------------------------------#
