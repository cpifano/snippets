#---------------------------------------------------------------------------------------------------------------------------#
# VISTAS BASADAS EN FUNCIONES:
#---------------------------------------------------------------------------------------------------------------------------#
#Archivo de vista views.py de la aplicación:
from django.shortcuts import render
from django.http import HttpResponse

#Importar modelo:
from app.nombre_app.models import nombre_modelo

#Importar archivo de formularios:
from apps.nombre_app.forms import nombreForm

#Vista de listado:
def nombre_app_listView(request):
    #Crear queryset y que traiga todos los objetos del modelo:
    app_queryset = nombre_modelo.objects.all()

    #Crear contexto y envíar resultado:
    contexto = { 'nombre_contexto': app_queryset }

    #Enviar response con el template:
    return render(request, 'nombre_app/nombre_app_list.html', contexto)


#Vista de formulario (CREAR):
def nombre_app_createView(request):
    #Chquear que se este utilizando el metodo POST:
    if request.method == 'POST':
        #Indicar que se van a recibir los datos POST del formulario definido en nuestro archivo de formularios:
        form = nombreForm(request.POST)

        #Validar datos del formulario:
        if form.is_valid():
            #Guardar datos del formulario:
            form.save()

        #Redirigimos al index de la app:
        return redirect('namespace: index')
    else:
        #Si no es un POST volver a renderizar el formulario:
        form = nombreForm

    #Enviar response con el template:
    return render(request, 'nombre_app/nombre_app_form.html', {'form': form})


#Vista de formulario (EDITAR):
def nombre_app_editView(request, id_elemento):
    #Crear queryset con el elemento segun el id ingresdo:
    app_queryset = nombre_modelo.objects.get(id=id_elemento)

    if request.method == 'GET':
        #Utilizamos y reenviamos el formulario ya definido:
        form = nombreForm(instance=nombre_app)
    else:
        #Utilizamos y reenviamos el formulario ya definido:
        #En este caso con los datos que vengan del POST.
        form = nombreForm(request.POST, instace=nombre_app)

        #Validar form:
        if form.is_valid():
            form.save()

        #Redirecionar a URL definida:
        return redirect('nombre_app: listar_elementos')

    #Enviar response con el template:
    return render(request, 'nombre_app/nombre_app_form.html', {'form': form})


#Vista de formulario (ELIMINAR):
def nombre_app_deleteView(request, id_elemento):
    #Crear queryset con el elemento segun el id ingresdo:
    app_queryset = nombre_modelo.objects.get(id=id_elemento)

    if request.method == 'POST':
        app_queryset.delete()

        #Redirecionar a URL definida:
        return redirect('nombre_app: listar_elementos')

    #Enviar response con el template:
    return render(request, 'nombre_app/nombre_app_delete.html', {'nombre_app': nombre_app})

#---------------------------------------------------------------------------------------------------------------------------#
#Archivo urls.py de nuestra app:
from django.conf.urls import url, include

#Importar vistas:
from apps.nombre_app.views import index, nombre_app_listView, nombre_app_createView

urlpatterns = [
    url(r'^listar$', nombre_app_listView, name='listar_elementos'),
    url(r'^nuevo$', nombre_app_createView, name='crear_elemento'),

    #En esta ocasión se agrega a la URL una regex para indicar que recibirá un parametro:
    url(r'^editar/(?P<id_elemento>\d+)$', nombre_app_editView, name='editar_elemento'),
    url(r'^eliminar/(?P<id_elemento>\d+)$', nombre_app_deleteView, name='eliminar_elemento'),
]
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# TEMPLATES:
#---------------------------------------------------------------------------------------------------------------------------#
#Archivo Template nombre_app_list.html:
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
            {% for actual in contexto %}
                <tr>
                    <td>{{ actual.id }}</td>
                    <td>{{ actual.nombre }}</td>
                    <td>{{ actual.apellido }}</td>
                    <td>{{ actual.sexo }}</td>

                    #Determinamos la URL a la que irá el enlace del listado.
                    #Según el namespace de el formulario para editar y pasando el id del elemento actual:
                    <td><a href="{% url 'nombre_app:editar_elemento' actual.id %}">Editar</a></td>
                    <td><a href="{% url 'nombre_app:eliminar_elemento' actual.id %}">Eliminar</a></td>

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

    <h3>¿Desea eliminar el registro de {{ nombre_app.id }}</h3>

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
