//---------------------------------------------------------------------------------------------------------------------------//
// INTRODUCCIÓN:
//---------------------------------------------------------------------------------------------------------------------------//
// Instalar Typescript:
// npm install -g typescript

// Inicializar proyecto de Typescrypt (Luego de npm init):
// tsc --init
// Se generará un archivo llamado 'tsconfig.json' con las configuraciones generales del TS.

// Es conveniente definir dentro del archivo 'tsconfig.json' los parámetros:
// outDir: Donde sera redireccionado el código compilado de nuestra app escrita en TS.
// rootDir: Donde va a buscar el codigo fuente para generar el código resultante JS.

// Compilar app de Typescript:
// tsc nombre_app.ts

// Si poseemos un archivo 'tsconfig.json' simplemente podemos escribir tsc para que compile sin especificar archivo.

// Compilar app de Typescript a tiempo real (watch):
// tsc nombre_app.ts -w
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// TIPOS DE DATOS:
//---------------------------------------------------------------------------------------------------------------------------//
// Podemos definir de forma explícita el tipo de dato al definir la variable:
// De esta forma determinar que ese tipo de dato debiera de respetarse la vida útil de la misma (Inferencia de tipos).
//---------------------------------------------------------------------------------------------------------------------------//
let cadena: string = "Hola mundo!";
let numero: number = 28;
let booleano: boolean = false;
let todo_tipo: any = "Admite todo tipo de dato";
let desconocido: unknown;

//Union de tipos (admitirá ambos tipos):
let mes: number | string = 'Mayo';
mes = 5;

//Advertencia por contenido no tipado:
cadena = 32; //Retornará una advertencia, pero en JS funcionará sin inconvenientes.

//Al ser un tipo de dato específico se heredarán todos los métodos que apliquen a su tipo:
cadena.split(' ');

//Document write recibe solo strings, por ende los valores deben ser transformados:
document.write(numero.toString());

//Arrays:
let string_array = ['', '', '']; //Definido de forma implícita.
string_array = [1,2,3]; //Advertencia de assignación

let string_array: string[] = ['a', 'b', 'c']; //Definido de forma explícita.

let multi_array: any[] = ['', '', '']; //Definido de forma explícita.
multi_array = [1,2,3];

//Tuplas:
//Son inmutables y evitan la creación de nuevos tipos.
let tupla_strnum: [string,number];
tupla_strnum = ['Hola', 44];

//Void, Undefined, Null:
let vacio: void;
let sin_definir: undefined = undefined;
let nulo: null = null;

//Typeof nos retornará el tipo de dato que contiene una variable:
console.log(typeof(vacio));
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// FUNCIONES:
//---------------------------------------------------------------------------------------------------------------------------//
// Al definir explicitamente los errores en caso de tratar de utilizar un tipo no adecuado aparecerán durante la etapa de
// desarrollo. Estas advertencias pueden evitar errores futuros.
//---------------------------------------------------------------------------------------------------------------------------//
function suma (num1: number, num2: number): number{ //Defino tipo del retorno.
    return num1 + num2;
}

//En este caso mensaje puede recibir numeros o strings:
function saludo (mensaje: number | string, parametro_opcional?: string): void{ //(?) define que el paramentro es opcional.
    console.log(mensaje.toString());

    if(parametro_opcional != undefined){
        console.log(parametro_opcional);
    }

    //Funcion sin retorno (void).
}

// Especificación de parámetros:
// '' : Si no se especifíca nada el parámetro será obligatorio.
// ? : Indica que el parámetro será opcional
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// TS en DOM:
//---------------------------------------------------------------------------------------------------------------------------//
const boton_agregar = document.querySelector('#IDbtnAgregar');
const boton_cancelar = document.querySelector('#IDbtnCancelar') as HTMLButtonElement; //Cast: transformar en un input button HTML.

//TS puede agregar el simbolo de opcional (?) porque no tiene como comprobar que el elemento sea nulo:
//Si queremos asegurar que no es nulo y está controlado podemos ingresar el simbolo (!).
boton_agregar!.addEventListener('click', function{
  console.log('Agregado');
});
//---------------------------------------------------------------------------------------------------------------------------//
