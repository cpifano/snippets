/*DOCUMENT READY:---------------------------------------------------------------------------------------------*/
$(document).ready(function() {
	
	/*Iniciar validacion simple en un formulario*/
	/*$("#IDfrmPrincipal").validate();*/
	
	/*Traduccion de mensajes a ES*/
	jQuery.extend(jQuery.validator.messages, {
		required: "Este campo es obligatorio.",
		remote: "Por favor, rellena este campo.",
		email: "Por favor, escriba una dirección de correo válida",
		url: "Por favor, escriba una URL válida.",
		date: "Por favor, escriba una fecha válida.",
		dateISO: "Por favor, escriba una fecha respetando el formato ISO.",
		number: "Por favor, escriba un número entero válido.",
		digits: "Por favor, escriba sólo dígitos.",
		creditcard: "Por favor, escriba un número de tarjeta válido.",
		equalTo: "Por favor, escriba el mismo valor de nuevo.",
		accept: "Por favor, escriba un valor con una extensión aceptada.",
		maxlength: jQuery.validator.format("Por favor, no escriba más de {0} caracteres."),
		minlength: jQuery.validator.format("Por favor, no escriba menos de {0} caracteres."),
		rangelength: jQuery.validator.format("Por favor, escriba un valor entre {0} y {1} caracteres."),
		range: jQuery.validator.format("Por favor, escriba un valor entre {0} y {1}."),
		max: jQuery.validator.format("Por favor, escriba un valor menor o igual a {0}."),
		min: jQuery.validator.format("Por favor, escriba un valor mayor o igual a {0}.")
	});
	
	/*Añadir metodo Solo Letras Simple*/
	jQuery.validator.addMethod("lettersonly", function(value, element) {
		return this.optional(element) || /^[a-z]+$/i.test(value);
	}, "Por favor, escriba sólo letras, sin tíldes ni eñes.");
	
	/*Añadir metodo Solo Letras Complejo (Caracteres especiales)*/
	jQuery.validator.addMethod("specialetters", function(value, element) {
		return this.optional(element) || /^[a-zñáéíóúÁÉÍÓÚ]+$/i.test(value);
	}, "Por favor, escriba sólo letras."); 
	
	/*Iniciar validacion con reglas especificas de validacion*/
	$("#IDfrmPrincipal").validate({
		rules: {
			txtPassword:{
				required: true,
				minlength: 5
			},
			txtConfirmacion: {
				required: true,
				minlength: 5,
				equalTo: "#IDtxtPassword"
			}
		},
		
		messages: {
			txtPassword:{
				required: "Por favor, ingrese su contraseña."
			},
			txtConfirmacion: {
				required: "Por favor, confirme su contraseña.",
				minlength: "Su contraseña debe tener mínimo 5 caracteres de largo.",
				equalTo: "La confirmación no concide con la contraseña original."
			}
		}
	});
	
});
/*-----------------------------------------------------------------------------------------------------------------------------------*/