//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulos:
const exec = require('child_process').exec;

//Ejecutar la función exec():
exec('ls', (error, stdout) => {
  if(error){
    throw error; //Terminar programa.
  } else {
    console.log('Comando ejecutado');
    console.log(stdout);
  }
});
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
//Ejecutar un script:
exec('./script.sh' + parametro, (error, stdout) => {
  if(error){
    throw error; //Terminar programa.
  } else {
    console.log('Script ejecutado');
    console.log(stdout);
  }
});
//---------------------------------------------------------------------------------------------------------------------------//
