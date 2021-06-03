//---------------------------------------------------------------------------------------------------------------------------//
// TRAITS :
//---------------------------------------------------------------------------------------------------------------------------//
// Son una serie de metodos para definir un tipo de dato y su comportamiento futuro.
// Son como las Interfaces de otros lenguajes.
//---------------------------------------------------------------------------------------------------------------------------//
//Crear una estructura:
struct Circulo {
    radio: f64,
}

//Crear un trait (Interface):
trait Area {
    fn area (&self) -> f64;
}

//Imprementar trait:
impl Area for Circulo {
    fn area(&self) -> f64{
        3.14159 * self.radio * self.radio
    }
    //Podemos definir propiedades y metodos que esten por fuera del trait:
    fn mensaje(){
        println!("Soy un círculo");
    }
}

fn main() {
    //Crear objeto en base a nuestro trait:
    let circulo = Circulo {
        radio: 2.5
    }

    //Ejecutar método del objeto:
    println!("Área: {}", circulo.area());
}
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// TRAITS EN FUNCIONES:
//---------------------------------------------------------------------------------------------------------------------------//
fn mostrar_area<T: Area>(figura: T){
    println!("Esta figura tiene un área de {}", figura.area());
}

fn main() {
    //Crear objeto en base a nuestro trait:
    let circulo = Circulo {
        radio: 2.5
    }

    let cuadrado = Cuadrado {
        radio: 4.3
    }

    //Ejecutar función que implementa traits::
    mostrar_area(circulo);
    mostrar_area(cuadrado);
}
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// EXTENDER TRAITS:
//---------------------------------------------------------------------------------------------------------------------------//
// Puedo utilizar un trait para extener funcionalidades de tipos de datos.
//---------------------------------------------------------------------------------------------------------------------------//
//Crear Trait:
trait Incremento {
    fn doble(&self) -> i32;
    fn siguiente(&self) -> i32;
}

//Implementar Trait para todos los tipos enteros 32 bits:
impl Incremento for i32 {

    fn doble(&self) -> i32 {
        self + self
    }

    fn siguiente(&self) -> i32 {
        self + 1
    }
}

fn main() {
    //Crear tipo de dato entero:
    let numero = 21; //i32 por default

    //Implementar metodo extendido del tipo de dato:
    println!("{}", numero.doble());
}
//---------------------------------------------------------------------------------------------------------------------------//
