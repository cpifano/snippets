//---------------------------------------------------------------------------------------------------------------------------//
// MÓDULOS:
//---------------------------------------------------------------------------------------------------------------------------//
// Un módulo es uno de los elementos principales con los que podemos organizar el código de las aplicaciones en Angular.
// Nuestra aplicación básica ya dispone de un módulo principal. Sin embargo, en lugar de colocar el código de todos los
// componentes, directivas o pipes en el mismo módulo principal, lo adecuado es desarrollar diferentes módulos y agrupar
// distintos elementos en unos u otros.
//---------------------------------------------------------------------------------------------------------------------------//
//Crear un nuevo módulo:
ng generate module usuarios

//--module: app indica que se agrege este módulo al app.module.
//--flat: indica que no debe crear un directorio junto con el módulo.
//--routing: creará un módulo de ruteo para éste modulo.
ng generate module usuarios --module app --flat --routing
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//El decorador de los módulos se llama @NgModule:
@NgModule({
  declarations: [UsuariosListComponent], //Los componentes, u otros artefactos que este module construye.
  imports: [ //Los imports que este módulo necesita.
    CommonModule
  ],
  providers: [UsuariosService], //Los servicios
  exports: [ //Exportar del módulo hacia afuera.
    UsuariosListComponent
  ]
})
export class UsuariosModule { }
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
//Este es el código del decorador del módulo principal.
@NgModule({
 declarations: [
   AppComponent
 ],
 imports: [
   BrowserModule,
   UsuariosModule
 ],
 providers: [],
 bootstrap: [UsuariosListComponent]
})
//---------------------------------------------------------------------------------------------------------------------------//
