#---------------------------------------------------------------------------------------------------------------------------#
# MULTIPLE FORMS:
#---------------------------------------------------------------------------------------------------------------------------#
# En caso de querer ingresar los datos de un modelo desde un modelo que dependa del mismo su clave foreanea podremos
# utilizar un atributo llamado 'second_form_class' y sobreescribir los métodos 'get_context_data' y 'post' de la vista.
#---------------------------------------------------------------------------------------------------------------------------#
#CREATE VIEW - Vista genérica para formularios tipo create:
class nombre_app_createView(CreateView):
    #Indicamos el modelo:
    model = nombre_modelo

    #Definir que formulario utilizará:
    form_class = nombreForm

    #En caso de que se necesite ingresar datos de otro formulario:
    #Dependencias foreaneas. Nos permitirá el ingreso de datos
    #de otro elemento desde este formulario.
    second_form_class = otroForm

    #Definir que template se utilizará:
    template_name = 'nombre_app/nombre_app_form.html'

    #Definir URL de redirección post guardado:
    success_url = reverse_lazy('nombre_app:listar_elementos')

    #Sobreescribir metodo get_context_data de la vista (Polimorfismo):
    #Para asignar contexto a esta vista.
    def get_context_data(self, **kwargs):
        #Sobreescribimos el metodo utilizando el método constructor super:
        context = super(nombre_app_createView, self).get_context_data(**kwargs)

        #Agregamos nuestro primer formulario a nuestro contexto en caso de que no este:
        if 'form' not in context:
            context['form'] = self.form_class(self.request.GET)

        #Agregar el segundo formulario a nuestro contexto en caso de que no este:
        if 'form2' not in context:
            context['form2'] = self.second_form_class(self.request.GET)

        #Retornar contexto:
        return context


    #Sobreescribir el método POST de la vista (Polimorfismo):
    def post(self, request, *args, **kwargs):
        self.object = self.get_object

        #Obtener de los dos formularios la información ingresada:
        form = self.form_class(request.POST)
        form2 = self.second_form_class(request.POST)

        #Validar:
        if form.is_valid() and form2.is_valid():
            #Crear objeto del primer elemento:
            #commit=False : Para que no guarde hasta guardar los valores del segundo form.
            nombre_modelo = form.save(commit=False)
            nombre_modelo.fk_otro_modelo = form2.save()

            #Guardar cambios:
            nombre_modelo.save()

            #Retornar al success_url:
            return HttpResponseRedirect(self.get_success_url())
        else:
            #Devolver el contexto (formularios en blanco):
            return self.render_to_response(get_context_data(form=form, form2=form2))

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

    #Incrustar el primer formulario:
    {{ form.as_p }}

    #Incrustar el segundo formulario:
    {{ form2.as_p }}


    <button type="submit">Guardar</button>
</form>
{% endblock %}
#---------------------------------------------------------------------------------------------------------------------------#
