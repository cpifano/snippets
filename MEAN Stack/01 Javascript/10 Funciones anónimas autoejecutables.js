//---------------------------------------------------------------------------------------------------------------------------//
// FUNCIONES ANÓNIMAS AUTOEJECUTABLES:
//---------------------------------------------------------------------------------------------------------------------------//
// Como lo dice el nombre de las mismas, son funciones que no poseen un nombre que las identifique y se autoejecutan al
// momento de su definicion, es decir, no precisan ser ejecutadas de forma manual.
//---------------------------------------------------------------------------------------------------------------------------//
(function(){
    //Código de la función.
})( /*Ejecución de la función*/ );
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// DISTINTOS TIPOS DE DEFINICIONES:
//---------------------------------------------------------------------------------------------------------------------------//
//Clásica:
(function(d, w, c){
  c.log("Hola mundo");
})(document, window, console);

//Crockford:
((function(d, w, c){
  c.log("Hola mundo");
})(document, window, console));

//Unaria:
+function(d, w, c){
  c.log("Hola mundo");
}(document, window, console);

//Facebook:
!function(d, w, c){
  c.log("Hola mundo");
}(document, window, console);
//---------------------------------------------------------------------------------------------------------------------------//
