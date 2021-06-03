//---------------------------------------------------------------------------------------------------------------------------//
// IMPLEMENTACIÓN DE MÉTODOS:
//---------------------------------------------------------------------------------------------------------------------------//
// En Rust no existe el concepto de clase, pero el mismo comportamiento puede ser facilmente implementado con Estructuras
// y métodos (impl).
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
// COMPORTAMIENTO BÁSICO DE CLASE:
//---------------------------------------------------------------------------------------------------------------------------//
//Crear Estructura:
struct User {
    username: String,
    password: String,
}

//Agregar métodos en nuestra estructura:
impl User {
    //Definir métodos para la estructura.
    fn saludar(&mut self){
        println!("Hola {}", self.username);
    }

    fn change_pass(&mut self, new_password: String){
        self.password = new_password;
    }
}

fn main() {
    //Instanciar objeto:
    let mut usuario = User {
        username: String::from("cpifano"),
        password: String::from("clave.123"),
    };

    //Ejecutar métodos del objeto:
    usuario.saludar();
    usuario.change_pass("nuevo password".to_string()); //str to String

    //Muestreo de propiedades:
    println!("Nombre de usuario: {}", usuario.username);
}
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// COMPORTAMIENTO DE HERENCIA:
//---------------------------------------------------------------------------------------------------------------------------//
//Crear Estructura Padre:
struct Animal;

//Agregar métodos en nuestra estructura Padre:
impl Animal {
    fn comer(&self) {
        println!("Ñam ñam");
    }
}

//Crear Estructura Hijo:
struct Perro {
    //Definir propiedad parent que alojará la clase padre:
    parent: Animal,
}

//Agregar métodos en nuestra estructura Hijo:
impl Perro {
    fn ladrar(&self) {
        println!("Guau!");
    }

    //Declarar función autocontenedora para simplificar la sintaxis de ejecución en objetos:
    fn comer(&self){
        self.parent.comer();
    }
}

fn main() {
    //Instanciar objeto, pasando 'clase' Animal como propiedad:
    let perro = Perro { parent: Animal };

    //Ejecutar métodos del objeto:
    perro.comer();
    perro.ladrar();
}
//---------------------------------------------------------------------------------------------------------------------------//
