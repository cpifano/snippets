//---------------------------------------------------------------------------------------------------------------------------//
// OWNERSHIP:
//---------------------------------------------------------------------------------------------------------------------------//
// Regla 1: Cada valor en Rust tiene su propio Ownership.
// Regla 2: Solo puede existir un Ownership a la vez.
// Regla 3: Si un Ownership sale del alcance, el valor se descartará.
//---------------------------------------------------------------------------------------------------------------------------//
//Crear una estructura:
struct Rectangulo {
    alto: u32,
    ancho: u32
}

//Crear función para calular el área:
fn area(rectangulo: Rectangulo) -> u32 {
    rectangulo.ancho * rectangulo.alto
}

fn main() {
    //Utilizar estructura:
    let rectangulo = Rectangulo {  //Regla 1 y 2.
        alto: 20,
        ancho: 10
    };

    //Ejecutar función (Los parametros son pasados mediante prestamos -> default en Rust):
    let resultado = area(rectangulo); //Regla 2 y 3.
    //Al pasar como parametro el objeto rectangulo pasa a modo de prestamo.
    //De esta forma, a partir de esta linea el objeto rectangulo pertenece al scope de la función área.

    //Por ende ya no existe fuera del scope de dicha función:
    println!(rectangulo.alto); //Esto retonará error ya que no existe rectangulo en el scope de main.

    println!("Área del rectangulo es: {}", resultado);
}
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// PASAJE DE DATOS:
//---------------------------------------------------------------------------------------------------------------------------//
// Podemos cambiar el modo en el que se lleva a cabo el pasaje de parametros por defecto en Rust.
//---------------------------------------------------------------------------------------------------------------------------//
//Crear función para calular el área:
fn area(rectangulo: &Rectangulo) -> u32 {
    rectangulo.ancho * rectangulo.alto
}

//...///

//Prestamo por referencia (Pasaje por valor) -> el valor se presta, la variable original sigue existiendo:
let resultado = area(&rectangulo);
println!(rectangulo.alto);

//...///

//Movimiento de Ownership la variable rectangulo se mueve (deja de existir):
let otro_rectangulo = rectangulo;
println!(rectangulo.alto); //Error: Regla 2.

//El Ownership se moverá siempre que se aplique en variables alojadas en el HEAP.
let x = 10; //STACK: Al almacenarse en Stack no aplica errores por reglas de Ownership.
let y = x;
//---------------------------------------------------------------------------------------------------------------------------//
