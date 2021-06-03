$(document).ready(function(){

    //Traer datos dinámicamente de sección get_datos:
    fetch('http://localhost:3000/get_datos')
    .then(res => res.json())
    .then(data, function(){
        if(data.response === 'success'){ //Chequear que la consulta haya sido exitosa.
            const usuarios = data.data;
            html_datos = '<br/><strong>Datos:</strong>';
            //Mostrar contenido retornado por get_datos:
            usuarios.forEach(usuario =>{
                html += '<br/>' + usuario.nombre + ' ' + usuario.apellido;
                $('#IDdivDatos').html(html);
            });
        }
    })
    .catch(error, function(){
        console.log('Error inesperado: ', error);
    });


});

//OPCIONAL (En caso de que no se redireccione al final del POST, sino que se mapeen los eventos de submit):
//Crear una función asíncrona para recargar los datos en pantalla:
const actualizar_listado = async (id) => {
    //Await se utiliza para que espere a que concluya la respuesta:
    const res = await fetch('http://localhost:3000/complete/' + id)
        .then(res => res.json());
    
    return res;
}