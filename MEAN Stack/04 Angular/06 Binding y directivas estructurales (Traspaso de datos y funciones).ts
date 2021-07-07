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

//Importar NgForm para manejo bidireccional del formulario:
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor() { }

  //Recibir datos de la vista principal del componente:
  onSubmit(form_data: NgForm){
    console.log(form_data.value);
    console.log(form_data.valid);
  }

  ngOnInit(): void {
  }
}
//-----------------------------------------------------------------------------------//


//Contenido del archivo usuarios.form.html:------------------------------------------//
<form #form_data="ngForm" (ngSubmit)="addUsuario(form_data)" novalidate>
  <input type="text" name="nombre" ngModel required  />
  <button type="submit">Guardar</button>
</form>
//-----------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------------------------------------------//
