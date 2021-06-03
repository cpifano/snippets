//---------------------------------------------------------------------------------------------------------------------------//
// COMPONENTES:
//---------------------------------------------------------------------------------------------------------------------------//
// Los componentes son una herramienta de Angular que nos permite modularizar nuestro código mediante buenas practicas de
// POO, en la cual podremos reutilizar los mismos de la forma más optima posible.
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// COMPONENTE PRINCIPAL DE LA APP (CREADO POR ANGULAR):
//---------------------------------------------------------------------------------------------------------------------------//
//Nuestra app a su vez posee un componente principal en el cual se definirán las bases del funcionamiento de la misma.
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


//Contenido del archivo "app.component.html":----------------------------------------//
<h1>Hola mundo!</h1>
//Utilización de variables declaradas en el componente raíz con el motor de vistas Mustache:
<p>Esta es nuestra primer aplicacion en Angular: {{title}}</p>

//<!--Cargar contenido de un template de un componente a través de su selector-->
<app-nombrecomponente></app-nombrecomponente>
//-----------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// COMPONENTE CREADOS POR EL PROGRAMADOR:
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
  selector: 'app-nombrecomponente',
  templateUrl: './nombrecomponente.component.html',
  styleUrls: ['./nombrecomponente.component.css']
})

export class NombreComponenteComponent implements OnInit {
  //Defino una propiedad dentro de mi clase usuarios:
  public nombre_coleccion:string = 'nombre_coleccion';

  //Método constructor de la clase:
  constructor() {
    //Setear propiedades:
    this.propiedades = {
      id: 1001,
      nombre: 'Camilo'
    }

  }

  //Método de inicialización de componente:
  //Se ejecutará cuando el mismo se haya inicializado.
  ngOnInit(): void {
    console.log('Componente inicializado con éxito.')
  }

}
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
