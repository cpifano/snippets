//---------------------------------------------------------------------------------------------------------------------------//
// WEP API:
//---------------------------------------------------------------------------------------------------------------------------//
// Son conjunto de APIs compatibles y de acceso a los dispositivos que permite a las Web apps y contenido acceder al
// hardware del dispositivo.
//---------------------------------------------------------------------------------------------------------------------------//
// Estas permiten funciones de lo más variado a nuestro alcance, como:
// API de información de la red
// Bluetooth
// API de información de WiFi
// API de sensor de luz ambiental
// API de estado de batería
// API de Geolocalización
// API de bloqueo de puntero
// API de proximidad
// API de orientación del dispositivo
// API de orientación de pantalla
// API de Cámara (Non-standard)
// etc...

// https://developer.mozilla.org/es/docs/WebAPI
// https://developer.mozilla.org/es/docs/Web/API


// DOM: Document Object Model - Es la WebAPI que nos permite manejar HTML a través de JS.
// BOM: Browser Object Model - Es la WebAPI que nos permite manejar determinados elementos del navegador a través de JS.
// CSSOM: CSS Object Model
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
// Ejemplo de uso de WebAPI de Speech Synthesis:
// (Lectura de texto desde el narrador del dispositivo).
//---------------------------------------------------------------------------------------------------------------------------//
//Determinar mensaje:
let mensaje = "Hola mundo";

//Crear función que utilice WebAPI del Navegador:
const hablar = (mensaje) => speechSynthesis.speak(new SpeechSynthesisUtterance(mensaje));

//Ejecutar función:
hablar(mensaje);
//---------------------------------------------------------------------------------------------------------------------------//
