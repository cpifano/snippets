//---------------------------------------------------------------------------------------------------------------------------//
// SLICES:
//---------------------------------------------------------------------------------------------------------------------------//
// Es el prestamo de una porción de un arreglo.
// No se le conoce el tamaño en tiempo de ejecucion, por ende se almacena en el HEAP.
//---------------------------------------------------------------------------------------------------------------------------//
fn main() {
    let mensaje = String::from("Hola mundo!");

    //Crear un slice (porción):
    //[indiceInicio..indiceFin]
    let hola = &mensaje[0..4];  // o [..4]

    //Crear slice con el resto:
    let resto = &mensaje[4..mensaje.len() -1]; // o [4..];
}
//---------------------------------------------------------------------------------------------------------------------------//