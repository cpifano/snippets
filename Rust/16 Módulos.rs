//---------------------------------------------------------------------------------------------------------------------------//
// MÓDULOS:
//---------------------------------------------------------------------------------------------------------------------------//
// Rust proporciona un poderoso sistema de módulos que se puede usar para dividir jerárquicamente el código en unidades
// lógicas (módulos) y administrar la visibilidad (pública / privada) entre ellos.
// Un módulo es una colección de elementos: funciones, estructuras, rasgos, bloques impl e incluso otros módulos.
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
// VISIBILIDAD:
//---------------------------------------------------------------------------------------------------------------------------//
mod modulo_padre {
    // Todos los Items dentro de un módulo son de visibilidad privada por defecto.
    fn funcion_privada() {
        println!("Ejecución de 'modulo_padre::funcion_privada()'");
    }

    //El modificador pub nos permite cambiar la visibilidad de tipo privada a publica.
    pub fn funcion_publica() {
        println!("Ejecución de 'modulo_padre::funcion_publica()'");
    }

    //Anidar otro módulo:
    pub mod modulo_anidado_publico {
        fn otra_funcion_privada() {
            println!("Ejecución de 'modulo_padre::modulo_anidado_publico::otra_funcion_privada()'");
        }
    }
}

fn main() {
    //Ejecución de funciones dentro del módulo:
    modulo_padre::funcion_publica();
    modulo_padre::modulo_anidado_publico::otra_funcion_privada()
}
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// VISIBILIDAD DE STRUCT:
//---------------------------------------------------------------------------------------------------------------------------//
// Las estructuras tienen un nivel extra de visibilidad con sus campos.
// La visibilidad predeterminada de un módulo es privada y se puede anular con el modificador pub.
// Esta visibilidad solo importa cuando se accede a una estructura desde fuera del módulo donde está definida, y tiene el
// objetivo de ocultar información (encapsulación).
//---------------------------------------------------------------------------------------------------------------------------//
mod my {
    //Crear una estructura pública con un campo público de tipo genérico 'T':
    pub struct OpenBox<T> {
        pub contents: T,
    }

    //Crear otra estructura pública con un campo privado de tipo genérico 'T':
    #[allow(dead_code)]
    pub struct ClosedBox<T> {
        contents: T,
    }

    impl<T> ClosedBox<T> {
        //Método Constructor público:
        pub fn new(contents: T) -> ClosedBox<T> {
            ClosedBox {
                contents: contents,
            }
        }
    }
}

fn main() {
    //Las estructuras públicas con campos públicos se pueden construir como de costumbre:
    let open_box = my::OpenBox { contents: "información pública" };

    //Y normalmente se puede acceder a sus campos:
    println!("OpenBox contiene: {}", open_box.contents);

    //Las estructuras públicas con campos privados no se pueden construir utilizando nombres de campo.
    //let closed_box = my::ClosedBox {contenido: "información clasificada"};

    //Sin embargo, las estructuras con campos privados se pueden crear utilizando constructores públicos.
    let _closed_box = my::ClosedBox::new("Información clasificada");

    //No se puede acceder a los campos privados de una estructura pública.
    //println!("ClosedBox contiene: {}", _closed_box.contents);

}
//---------------------------------------------------------------------------------------------------------------------------//
