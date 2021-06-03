//---------------------------------------------------------------------------------------------------------------------------//
// CALLBACK:
//---------------------------------------------------------------------------------------------------------------------------//
// Son funciones que se ejecutan de forma inmediata al finalizar algun tipo de proceso.
//---------------------------------------------------------------------------------------------------------------------------//
//Crear función que recibe callback:
function suma(num1, num2, callback){
  let resultado = num1 + num2;

  //Ejecución del callback:
  callback(resultado);
}

//Ejecutar función con callback:
suma (2, 5, (resultado) => {
  console.log(resultado);
});
//---------------------------------------------------------------------------------------------------------------------------//
