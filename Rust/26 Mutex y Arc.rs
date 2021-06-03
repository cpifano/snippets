//---------------------------------------------------------------------------------------------------------------------------//
// MUTEX:
//---------------------------------------------------------------------------------------------------------------------------//
// Mutex es una abreviatura de exclusión mutua. Un mutex permite que solo un thread acceda a algunos datos en
// un momento dado. Para acceder a los datos en un mutex, un thread debe primero señalar que quiere acceso
// solicitando adquirir el lock(bloqueo) del mutex . El bloqueo es una estructura de datos que forma parte
// del mutex que realiza un seguimiento de quién tiene actualmente acceso exclusivo a los datos. Por lo tanto,
// se describe que el mutex protege los datos que contiene a través del sistema de bloqueo.
// Cuando se sale del alcance se libera el lock de forma automatica.
//---------------------------------------------------------------------------------------------------------------------------//
use std::sync::Mutex;

fn main() {
    let m = Mutex::new(5);

    {
        let mut num = m.lock().unwrap();
        *num = 6;
    }

    println!("m = {:?}", m);
}
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// ARC:
//---------------------------------------------------------------------------------------------------------------------------//
// Compartir Mutex<T>entre varios threads (multiple ownership)
// Dar a un valor multiples propietarios
// Rust tiene un tipo llamado Arc para esto.
//---------------------------------------------------------------------------------------------------------------------------//
fn main() {
    let counter = Arc::new(Mutex::new(0));
    let mut handles = vec![];

    for _ in 0..10 {
        let counter = Arc::clone(&counter);
        let handle = thread::spawn(move || {
            let mut num = counter.lock().unwrap();

            *num += 1;
        });
        handles.push(handle);
    }

    for handle in handles {
        handle.join().unwrap();
    }

    println!("Result: {}", *counter.lock().unwrap());
}
//---------------------------------------------------------------------------------------------------------------------------//
