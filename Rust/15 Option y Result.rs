//---------------------------------------------------------------------------------------------------------------------------//
// OPTION:
//---------------------------------------------------------------------------------------------------------------------------//
// Enum que nos permite la declaracion de un valor de tipo opcional.

//Referencia de enum Option (No declarar):
enum Option<T>{
    Some(T), //Almacena el valor (Cualquier tipo de valor (T)).
    None     //Representa la ausencia de algun valor.
}
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
// USO DE OPTION:
//---------------------------------------------------------------------------------------------------------------------------//
fn obtener_valor(bandera: bool) -> Option<String> { //El retorno es opcional, si lo hace será un String.
    if bandera {
        Some(String::from("Hola mundo"))
    } else {
        None
    }
}

fn main() {
    //Ejecutar función:
    let resultado = obtener_valor(true); //Retornará un objeto del tipo Option.

    //Obtener información de un objeto option con match:
    match resultado {
        Some(valor) => println!("{}", valor),
        None => println!("No existe valor")
    }

    //Obtener información de un objeto option con unwrap:
    let valor = resultado.unwrap(); //Si no posee valor ejecutará método panic.

    //unwrap_or:
    let valor = resultado.unwrap_or("valor_sustituto"); //Si no posee valor pasara el establecido (NO panic).

    //expect:
    let valor = resultado.expect("Mensaje previo al panic"); //Si no posee valor ejecutará método panic pero antes mostrará el valor declarado.

    //unwrap_or_else:
    let valor = resultado.unwrap_or_else(|err|{ //Sino posee valor ejecutará el Clousure (Funcion anónima).
        println!("Ha ocurrido un error: {}", err);
        process::exit(1);
    });

    //Muestreo:
    println!("El valor es {}", valor);
}
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// OPTIONS Y STRUCTS:
//---------------------------------------------------------------------------------------------------------------------------//
//Crear estructura:
struct User {
    username: String,
    password: String,
    email: String,
    edad: Option<u32>  //Atributo opcional
}

fn main() {
    //Crear objeto:
    let usuario = User{
        username: String::from("cpifano"),
        password: String::from("clave.123"),
        email: String::from("camilopifano@gmail.com"),
        edad: Some(32) //o None
    }

    //Obtener valor opcional con unwrap (Solo si estoy seguro de que habrá un valor asegurado):
    let edad = usuario.edad.unwrap();

    //Obtener y evaluar valor opcional con match:
    match usuario.edad {
        Some(1..=17) => println!("Eres menor de edad"),
        Some(18..=29) => println!("Eres mayor de edad y considerado joven para el estado"),
        Some(30..=) => println!("Bienvenido a la vida de adulto sin beneficios :D"),
        Some(_) => println!("Valor no contemplado"),
        None => println!("No existe edad, valor no ingresado."),
    }
}
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// RESULT:
//---------------------------------------------------------------------------------------------------------------------------//
// Enum que nos permite el manejo de errores.

//Referencia de enum Option (No declarar):
enum Result<T, E>{ //T Referencia al valor - E Referencia al error (Estos parametros son exclutentes entre si).
    Ok(T),
    Err(E)
}
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
// USO DE RESULT:
//---------------------------------------------------------------------------------------------------------------------------//
fn division(numero_uno: i32, numero_dos: i32) -> Result<i32, String> {
    if numero_dos == 0 {
        return Err(String::from("No es posible dividir por 0."));
    }

    Ok(numero_uno / numero_dos)
}

fn main() {
    let resultado = division(10,2);  //Retornará un objeto Result.

    //Operación no valida (Dividir entre cero)
    let resultado = division(10,0);

    //Obtener y evaluar valor resultado con match:
    match resultado {
        Ok(valor) => println!("Valor: {}", valor),
        Err(error) => println!("Error: ", error)
    }
}
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
// RESULT Y ENUMS:
//---------------------------------------------------------------------------------------------------------------------------//
//Crear un Enum para manejo de errores:
enum ErroresValidosDivision {
    DivisionPorCero,
    DivisionNegativos
}

fn division(numero_uno: i32, numero_dos: i32) -> Result<i32, ErroresValidosDivision> {
    if numero_dos == 0 {
        return Err(ErroresValidosDivision::DivisionPorCero);
    }

    if numero_uno < 0 || numero_dos < 0 {
        return Err(ErroresValidosDivision::DivisionNegativos);
    }

    Ok(numero_uno / numero_dos)
}

fn main() {
    //Operación no valida (Dividir entre cero)
    let resultado = division(10,0);

    //Obtener y evaluar valor resultado con match:
    match resultado {
        Ok(valor) => println!("Valor: {}", valor),
        Err(ErroresValidosDivision::DivisionPorCero) => println!("Error por dividir entre cero."),
        Err(ErroresValidosDivision::DivisionNegativos) => println!("Error por dividir entre numeros negativos.")
    }
}
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// MATCH (FORMA ABREVIADA):
//---------------------------------------------------------------------------------------------------------------------------//
// En ocasiones solo queremos tener el resultado en caso de éxito de un objeto result, para esto podemos usar una forma
// abreviada de match.
//---------------------------------------------------------------------------------------------------------------------------//
use std::io;
use std::io::prelude::*;
use std::fs::File;

fn main() -> io::Result<()> {
    //El signo de interrogación '?' significa evaluará y retornará el objeto solo en caso de exito sino retornará un resultado de error a la app:
    let mut file = File::create("foo.txt")?;

    Ok(())
}
//---------------------------------------------------------------------------------------------------------------------------//
