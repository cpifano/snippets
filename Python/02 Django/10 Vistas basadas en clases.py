#---------------------------------------------------------------------------------------------------------------------------#
# VISTAS BASADAS EN CLASES - USO DE VISTAS GENÉRICAS:
#---------------------------------------------------------------------------------------------------------------------------#
#Archivo de vista views.py de la aplicación:
from django.views.generic import TemplateView, ListView, CreateView, UpdateView, DeleteView

#Importar modelos:
from apps.nombre_app.models import nombre_modelo

#Importar URL Resolver:
from django.core.urlresolvers import reverse_lazy

#Importar archivo de formularios:
from apps.nombre_app.forms import nombreForm

#LIST VIEW - Vista genérica para listados:
class nombre_app_listView(ListView):
    #Indicamos el modelo:
    model = nombre_modelo

    #Definir que template se utilizará:
    template_name = 'nombre_app/nombre_app_list.html'


#CREATE VIEW - Vista genérica para formularios tipo create:
class nombre_app_createView(CreateView):
    #Indicamos el modelo:
    model = nombre_modelo

    #Definir que formulario utilizará:
    form_class = nombreForm

    #Definir que template se utilizará:
    template_name = 'nombre_app/nombre_app_form.html'

    #Definir URL de redirección post guardado:
    success_url = reverse_lazy('nombre_app:listar_elementos')


#UPDATE VIEW - Vista genérica para formularios tipo update:
class nombre_app_updateView(UpdateView):
    #Indicamos el modelo:
    model = nombre_modelo

    #Definir que formulario utilizará:
    form_class = nombreForm

    #Definir que template se utilizará:
    template_name = 'nombre_app/nombre_app_form.html'

    #Definir URL de redirección post guardado:
    success_url = reverse_lazy('nombre_app:listar_elementos')


#DELETE VIEW - Vista genérica para formularios tipo delete:
class nombre_app_deleteView(DeleteView):
    #Indicamos el modelo:
    model = nombre_modelo

    #Definir que template se utilizará:
    template_name = 'nombre_app/nombre_app_delete.html'

    #Definir URL de redirección post guardado:
    success_url = reverse_lazy('nombre_app:listar_elementos')


#---------------------------------------------------------------------------------------------------------------------------#
#Archivo url.py de la aplicación:
from django.conf.urls import url, include

#Importar vistas:
from apps.nombre_app.views import nombre_app_listView, nombre_app_createView, nombre_app_updateView, nombre_app_deleteView

urlpatterns = [
    url(r'^listar$', nombre_app_listView.as_view(), name='listar_elementos'),
    url(r'^crear$', nombre_app_createView.as_view(), name='crear_elemento'),
    url(r'^editar/(?P<pk>\d+)$', nombre_app_updateView.as_view(), name='editar_elemento'),
    url(r'^eliminar/(?P<pk>\d+)$', nombre_app_deleteView.as_view(), name='eliminar_elemento'),
]

#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# TEMPLATES:
#---------------------------------------------------------------------------------------------------------------------------#
#Archivo template nombre_app_list.html:
{% extends 'base.html' %}

{% bock content %}
    <table>
        <thead>
            <tr>
                <td>ID</td>
                <td>Nombre</td>
                <td>Apellido</td>
                <td>Sexo</td>
            </tr>
        </thead>
        <tbody>
            {% for actual in object_list %}
                <tr>
                    <td>{{ actual.id }}</td>
                    <td>{{ actual.nombre }}</td>
                    <td>{{ actual.apellido }}</td>
                    <td>{{ actual.sexo }}</td>

                    #Caso ManyToMany:
                    {{ actual.nombre_modelo_ref.atributo }}
                </tr>
            {% empty %}
                <tr colspan="4"><td>No se encontraron registros</td></tr>
            {% endfor %}
        </tbody>
    </table>
{% endblock %}

#---------------------------------------------------------------------------------------------------------------------------#
#Archivo Template nombre_app_delete.html:
{% extends 'base.html' %}

{% bock content %}
<form method="post">
    #Agregar tocken de seguridad que provee Django:
    {% csrf_token %}

    <h3>¿Desea eliminar el registro de {{ object_list.id }}</h3>

    <button type="submit">Eliminar</button>
    <a href="{% url 'nombre_app:listar_elementos' %}">Cancelar</a>
</form>
{% endblock %}

#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# FORM TEMPLATES:
#---------------------------------------------------------------------------------------------------------------------------#
#Archivo Template nombre_app_form.html:
{% extends 'base.html' %}

{% bock content %}
<form method="post">
    #Agregar tocken de seguridad que provee Django:
    {% csrf_token %}

    #Incrustar el formulario completo dentro de un elemento html <p></p>:
    {{ form.as_p }}

    #Incrustar un solo elemento del formulario:
    {{ form.nombre }}

    <button type="submit">Guardar</button>
</form>
{% endblock %}

#---------------------------------------------------------------------------------------------------------------------------#
#Arvhivo forms.py dentro del directorio de la app:
from django import forms

from apps.nombre_app.models import nombre_modelo

class nombreForm(forms.ModelForm):

    class Meta:
        #Especificar modelo para el formulario:
        model = nombre_modelo

        #Declarar los campos que vamos a usar en nuestro formulario:
        fields = [
            'nombre',
            'apellido',
            'correo',
            'sexo',
        ]

        #Indicar las etiquetas:
        labels = {
            'nombre'    : 'Nombre',
            'apellido'  : 'Apellido',
            'correo'    : 'Correo electrónico',
            'sexo'      : 'Sexo'
        }

        #Delcarar widgets (Que tipo de elemento HTML del form seran):
        widgets = {
            'nombre'    : forms.TextInput(attrs=['class':'form-control']), #Podemos agregarle atriburos como una clase.
            'apellido'  : forms.TextInput(),
            'correo'    : forms.TextInput(),
            'sexo'      : forms.Select(),

            #Caso para un atributo ManyToMany:
            'campo_MTM' :   forms.CheckboxSelectMultiple(),
        }
#---------------------------------------------------------------------------------------------------------------------------#
