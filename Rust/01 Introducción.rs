//---------------------------------------------------------------------------------------------------------------------------//
// INSTALACIÓN:
//---------------------------------------------------------------------------------------------------------------------------//
// Instalar Rust:
// curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

// Cargo es el gestor de paquetes de Rust.
// Asociar cargo para la ejecución desde nuestro sistema (PATH):
// source $HOME/.cargo/env

// Ver la versión de Rust instalada:
// rustup --version
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// HOLA MUNDO:
//---------------------------------------------------------------------------------------------------------------------------//
fn main (){
    println!("Hola mundo");
}

// Compilar un archivo:
// rustc nombre_archivo.rs
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// FORMATOS DE PRINT:
//---------------------------------------------------------------------------------------------------------------------------//
// format!     : escribe texto formateado en un String
// imprimir!   : igual que format! pero el texto se imprime en la consola (io :: stdout).
// println!    : igual que print! pero se agrega una línea nueva (salto de linea).
// eprint!     : igual que format! pero el texto se imprime con el error estándar (io :: stderr).
// eprintln!   : igual que eprint! pero se agrega una línea nueva (salto de linea).
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// PANIC:
//---------------------------------------------------------------------------------------------------------------------------//
// Es una función macro que nos permite cerrar el programa en caso de que exista algun tipo de error.
//---------------------------------------------------------------------------------------------------------------------------//
fn main() {
    //Ejecutar función Panic:
    panic!("El programa finalizará por un error inesperado.");
}
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// CARGO:
//---------------------------------------------------------------------------------------------------------------------------//
//Crear proyecto de rust con cargo:
cargo new nombre_proyecto

//Compilar proyecto completo (Dentro del directorio del proyecto):
cargo build

//Ejecutar proyecto (Dentro del directorio del proyecto):
cargo run
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// VARIABLES:
//---------------------------------------------------------------------------------------------------------------------------//
fn main (){
    let numero: i32 = 10; //Tipo entero 32 bits
    println!("El numero es: {}", numero);

    //En Rust por default todas las variables son inmutables:
    numero = 20; //Esto retornaría error.

    //Definir una variable que pueda cambiar su contenido en Rust (Mutar):
    let mut variable_numero: i32 = 10;
    variable_numero = 40; //Retornará in warning, pero no afectará el funcionamiento.
}
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// CONSTANTES:
//---------------------------------------------------------------------------------------------------------------------------//
fn main (){
    const CONSTANTE_UNO: i32 = 20;
    static CONSTATNTE_DOS: i32 = 15;

    //...//
}
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// SHADOWING:
//---------------------------------------------------------------------------------------------------------------------------//
//Podemos utilizar el nombre de una variable cuantas veces queramos.
fn main (){
    let valor: i32 = 10; //Inmutable

    //Shadowing:
    //Destruye la variable anterior y crea una nueva con el mismo nombre.
    let valor = false; //Inmutable

    println!("Valor: {}", valor);
}
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// ENTRADA DE DATOS POR TECLADO:
//---------------------------------------------------------------------------------------------------------------------------//
//Importar librería estandar de entrada y salida:
use std::io;

fn main (){
    let mut username = String::new(); //Crear un string vacío con un método estático.

    println!("Ingrese nombre: ");

    //Solicitar ingreso de datos y cargarlo en la variable:
    io::stdin().read_line(&mut username);  //&mut: referencia de mutabilidad, no solo tiene permiso de leer sino que se le permite modificar.

    //Shadowing:
    let username = username.trim(); //El método trim elimina los saltos de linea.

    println!("Nombre: {}", username);
}

//Result:
//El método read_line retorna un objeto resultado booleano que permite comprobar si tuvo éxito la operación.
let mut result = io::stdin().read_line(&mut username);

//Parse:
let mut edad = String::new();
io::stdin().read_line(&mut edad);
let edad: i32 = edad.parse().unwrap(); //Convertir a entero
//---------------------------------------------------------------------------------------------------------------------------//
