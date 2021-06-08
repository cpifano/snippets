//---------------------------------------------------------------------------------------------------------------------------//
// COMPONENTES:
//---------------------------------------------------------------------------------------------------------------------------//
// Los componentes son una herramienta de Angular que nos permite modularizar nuestro código mediante buenas practicas de
// POO, en la cual podremos reutilizar los mismos de la forma más optima posible.
// El propósito de esta funcionalidad es poder separar la funcionalidad de nuestras Aplicaciones Web en el Frontend, en
// componentes.
// Estos elementos agrupan su funcionalidad, HTML, CSS y JavaScript.
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// COMPONENTE PRINCIPAL DE LA APP (CREADO POR ANGULAR):
//---------------------------------------------------------------------------------------------------------------------------//
// Nuestra app a su vez posee un componente principal en el cual se definirán las bases del funcionamiento de la misma.
//---------------------------------------------------------------------------------------------------------------------------//

//Contenido del archivo "app.component.ts" (Componente principal):-------------------//
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nombre-de-mi-aplicación';
}
//-----------------------------------------------------------------------------------//

//-----------------------------------------------------------------------------------//
// TEMPLATE DEL COMPONENTE PRINCIPAL:
//-----------------------------------------------------------------------------------//
//Contenido del archivo "app.component.html":----------------------------------------//
<h1>Hola mundo!</h1>
//Utilización de variables declaradas en el componente raíz con el motor de vistas Mustache:
<p>Esta es nuestra primer aplicacion en Angular: {{title}}</p>

//<!--Cargar contenido de un template de un componente a través de su selector-->
<app-nombrecomponente></app-nombrecomponente>
//-----------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// COMPONENTE CREADO POR EL PROGRAMADOR:
//---------------------------------------------------------------------------------------------------------------------------//
//Crear un nuevo componente desde nuestra terminal (Dentro del directorio de nuestra app):
ng generate component nombrecomponente

//Al crear un componente se creará un directorio con los archivos que integran al mismo.
/nombre_componente
  |--> nombrecomponente.component.css      //Estilos para aplicar a nuestro template de vista de componente.
  |--> nombrecomponente.component.html     //Template de vista del componente.
  |--> nombrecomponente.component.spec.ts
  |--> nombrecomponente.component.ts       //Código del componente propiamente dicho.


//Contenido de archivo "nombrecomponente.component.ts"-------------------------------//
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nombrecomponente', //Nombre del selector del componente.
  templateUrl: './nombrecomponente.component.html', //Path del archivo de template del componente.
  styleUrls: ['./nombrecomponente.component.css'] //Path de la hoja de estilo para el template.

  //Otra forma de definir el template de un componente es definirlo dentro de un string:
  //template: `<html>...</html>`,

  //Al igual con los estilos, podremos definir estilos para el template pero desde un array:
  //styles: ['h1{color:red;}']
})

export class NombreComponenteComponent implements OnInit {
  //Defino una propiedad dentro de mi clase usuarios:
  public nombre_coleccion:string = 'nombre_coleccion';

  //Método constructor de la clase (JS):
  constructor() {
    //Setear propiedades:
    this.propiedades = {
      id: 1001,
      nombre: 'Camilo'
    }
  }

  //Método de inicialización de componente (Angular):
  //Se ejecutará cuando el mismo se haya inicializado.
  ngOnInit(): void {
    console.log('Componente inicializado con éxito.')
  }

}
//-----------------------------------------------------------------------------------//

//-----------------------------------------------------------------------------------//
// TEMPLATE DE COMPONENTE CREADO POR EL PROGRAMADOR:
//-----------------------------------------------------------------------------------//
//Ejemplo de contenido de nombrecomponente.component.html----------------------------//
<p>
  El nombre de la colección de este componente es:<br/>
  {{nombre_coleccion}}

  <br/>

  <strong>Datos de mi componente usuario:</strong><br/>
  ID: {{propiedades.id}} <br/>
  Nombre: {{propiedades.nombre}}
</p>
//-----------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------------------------------------------//
