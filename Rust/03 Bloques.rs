//---------------------------------------------------------------------------------------------------------------------------//
// BLOQUES:
//---------------------------------------------------------------------------------------------------------------------------//
// Los bloques en Rust nos permiten delimitar el alcance de funionalidades o variables.
//---------------------------------------------------------------------------------------------------------------------------//
fn main(){
    //Esta variable solo existe dentro del bloque main y sus hijos (Bloques anidados):
    let mensaje = "Hola mundo!";

    //Crear un Bloque anidado:
    {
        //Esta variable solo existe dentro de este bloque:
        let variable = "Contenido";
    }


    //Los bloques pueden retornar valores
    let retorno = {
        let otra_variable = "Test";

        //Retornar valor (última sentencia sin punto y coma):
        otra_variable
    };
}
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
//Ejemplo de retorno con bloques de un IF:
fn main(){

    let retorno = if condicion {
        String::from("Mensaje de retorno.")
    } else {
        String::from("Mensaje de retorno else.")
    };
}
//---------------------------------------------------------------------------------------------------------------------------//
