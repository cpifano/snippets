//Definir una función pública:
//Accesible para quienes importen el módulo.
pub fn modulo_carpeta_function() -> String{
    //Retornar string:
    String::from("Esta función está definida en el modulo_carpeta dentro del archivo mod.rs")
}

//Importar y publicar sub-modulos a modulo_carpeta y al main:
pub mod sub_modulo_carpeta;

//Invocar método de módulo importado:
//let string_retorno = modulo_carpeta::sub_modulo_carpeta::sub_modulo_carpeta_function();