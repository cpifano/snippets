//---------------------------------------------------------------------------------------------------------------------------//
// SIMPLE CRYPT:
//---------------------------------------------------------------------------------------------------------------------------//
function simple_crypt(str) {
  const secret_number = 1618;
  let encoded = '';
  for (i=0; i < str.length; i++) {
    let a = str.charCodeAt(i);
    let b = a ^ secret_number;
    encoded = encoded+String.fromCharCode(b);
  }
  return encoded;
}

//Establecer mensaje:
const message = "Hola mundo";

//Encriptar mensaje:
const encoded = simple_crypt(message);
console.log('Encoded: ' + encoded);

//Desencriptar mensaje:
const decoded = simple_crypt(encoded);
console.log('Decoded: ' + decoded);
//---------------------------------------------------------------------------------------------------------------------------//
