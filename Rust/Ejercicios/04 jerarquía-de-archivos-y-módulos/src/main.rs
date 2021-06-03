//Utilizar mod para importación de un módulo externo:
mod modulo_externo;

//Importar un módulo carpeta (debe contener un archivo mod.rs):
mod modulo_carpeta;

fn main() {
    //Utilización de módulo externo:
    let string_retorno = modulo_externo::modulo_externo_function();
    println!("{}", string_retorno);

    //Utilización de módulo carpeta:
    let string_retorno = modulo_carpeta::modulo_carpeta_function();
    println!("{}", string_retorno);

    //Utilización de sub-módulo anidado de carpeta:
    let string_retorno = modulo_carpeta::sub_modulo_carpeta::sub_modulo_carpeta_function();
    println!("{}", string_retorno);

    //Rust importará automáticamente en caso de existir el contenido del archivo llamado "lib.rs".
    //No es necesario importarlo de forma manual.
}