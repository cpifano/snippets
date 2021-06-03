//---------------------------------------------------------------------------------------------------------------------------//
// FUNCIONES:
//---------------------------------------------------------------------------------------------------------------------------//
//Definir funciónes:
fn saludo(){
    println!("Hola mundo!");
}

fn suma(numero_uno: i32, numero_dos: i32) -> i32 {
    //Retornar directamente:
    numero_uno + numero_dos
}

fn factorial(numero: u32) -> u32 {
    //Validar
    if numero ==1 {
        //Al usar return terminaremos automaticamente la función.
        return numero;
    }

    //Función recursiva (Retornar el retorno de la función recursiva):
    factorial(numero -1) * numero
}

//Función principal:
fn main(){
    //Ejecutar función:
    saludo();

    //Ejecutar función con parametros y retorno:
    let resultado: i32 = suma(5, 10);
}
//---------------------------------------------------------------------------------------------------------------------------//
