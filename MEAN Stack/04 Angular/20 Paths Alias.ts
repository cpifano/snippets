//---------------------------------------------------------------------------------------------------------------------------//
// PATH ALIAS:
//---------------------------------------------------------------------------------------------------------------------------//
// Dentro de un proyecto de Agular se pueden definir alias para rutas hacia directorios con la finalidad de simplificar
// el uso de las mismas sin tener que utilizar rutas relativas a lo largo del proceso de desarrollo.
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
// DEFINICIÓN:
//---------------------------------------------------------------------------------------------------------------------------//
// Los path alias se definen dentro del un archivo llamado tsconfig.json.
// Este archivo contiene justamente la configuración base a utilizar para nuestro proyecto.
//---------------------------------------------------------------------------------------------------------------------------//
//Contenido del archivo "tsconfig.json":
{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": "./",
    //Definición de path alias:
    "paths": {
      "@app/*": ["src/app/*"],
      "@env/*": ["src/environments/*"],
    },
    "outDir": "./dist/out-tsc",
    "sourceMap": true,
    "declaration": false,
    "downlevelIteration": true,
    "experimentalDecorators": true,
    "moduleResolution": "node",
    "importHelpers": true,
    "target": "es2015",
    "module": "es2020",
    "lib": [
      "es2018",
      "dom"
    ]
  }
}
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// USO:
//---------------------------------------------------------------------------------------------------------------------------//
//Para utilizar un path alias simplemente lo llamamos por su nombre (alias) en cualquier archivo dentro de nuestro proyecto.
//---------------------------------------------------------------------------------------------------------------------------//
import { environment } from '@env/environment';
//---------------------------------------------------------------------------------------------------------------------------//
