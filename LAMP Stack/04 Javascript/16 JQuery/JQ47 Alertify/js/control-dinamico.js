/*DOCUMENT READY:--------------------------------------------------------------------------------------------------------------------*/
$(document).ready(function() {
	
	/*Crear Alertas*/
	alertify.alert("Mensaje de alerta simple.");
	
	alertify.confirm("Mensaje de confirmacion", function (e) {
		if (e) {
			// user clicked "ok"
		} else {
			// user clicked "cancel"
		}
	});
	
	/*Crear Logs*/
	alertify.log("Notification simple");
	alertify.success("Notificacion de suceso");
	alertify.error("Notificacion de error");
	
});
/*-----------------------------------------------------------------------------------------------------------------------------------*/