//---------------------------------------------------------------------------------------------------------------------------//
// CICLO DE VIDA DE LAS VARIABLES:
//---------------------------------------------------------------------------------------------------------------------------//
fn main() {
    let mut mensaje = "Soy una variable STR del bloque main."

    {
        let prestamo = mensaje; //Prestamos -> la variable se mueve (deja de existir).

        //Prestamo por referencia (Pasaje por valor):
        let prestamo = &mensaje; //Prestamo por referencia -> el valor se presta, la variable original sigue existiendo.

        //Pero si cambio el valor de mensaje, no podré utilizar la variable prestamo:
        mensaje = String::from("Contenido nuevo");

        //Freeze:
        println!("{}", mensaje); //Error por cambio de contenido en mensaje.
    }

    println!("{}", mensaje); //Si el prestamo no es por referencia retornará Error: no existe la variable.
}
//---------------------------------------------------------------------------------------------------------------------------//
