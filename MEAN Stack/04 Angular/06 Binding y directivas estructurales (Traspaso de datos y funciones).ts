//---------------------------------------------------------------------------------------------------------------------------//
// FORMS MODULE:
//---------------------------------------------------------------------------------------------------------------------------//
// Angular posee un modulo para el manejo de envío de formularios entre vistas y componentes.
// Para poder utilizarlo es necesario importarlo de forma manual en nuestro archivo app.module.ts.
//---------------------------------------------------------------------------------------------------------------------------//

//Contenido del archivo "app.module.ts":---------------------------------------------//
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Importar módulo de formularios:
import { FormsModule } from '@angular/forms';  //Necesario para el envio bidireccional (ngModule).

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //Agrego el módulo a mis imports.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//-----------------------------------------------------------------------------------//


//Contenido del archivo "usuarios.component.ts":-------------------------------------//
import { Component, OnInit } from '@angular/core';

//Importar inteface de modelo:
import {IUsuarios} from './usuarios.class';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  //Utilizar modelo de una interface:
  public propiedades:IUsuarios;

  constructor() { }

  //Recibir datos de la vista principal del componente:
  addUsuario(propiedades):void {
    console-log("Nombre: " + propiedades.nombre);

    //Asignar datos:
    this.propiedades = propiedades;
  }

  ngOnInit(): void {
  }
}
//-----------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------------------------------------------//
