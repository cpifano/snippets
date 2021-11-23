//---------------------------------------------------------------------------------------------------------------------------//
// MÓDULO DE RUTEO:
//---------------------------------------------------------------------------------------------------------------------------//
// Es posible establecer los ruteos de Angular desde un módulo creado por el framework
// de uso específico para esta función.
//---------------------------------------------------------------------------------------------------------------------------//
//Contenido del archivo "app-routing.module.ts":
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Es necesario importar el componente que se desee enlazar al ruteo URL:
import { NombreComponente } from "./nombre_de_componente.component";

const routes: Routes = [
  {path: 'nombre-path', component: NombreComponente}, //Esto nos permite enlazar un path a un componente.
  {path: '', redirectTo: '/nombre-path', pathMatch: 'full'}, //Puedo establecer cual será la paǵina principal con una redirección.
  {path: 'nombre-path-2/:id', component: NombreComponente}, //Puedo pasar parametros durante el ruteo (Activated Route).
  {
    path: 'nombre-path-3',
    component: NombreComponente,
    data: { title: 'Titulo para componente' } //Se pueden pasar arrays de información en el ruteo (Activated Route).
  },

  //Definir sub-rutas:
  {path: '',[
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', redirectTo: '/'}
  ]},

  //Registrar sub-rutas de un módulo en particular:
  {
    path: 'auth',
    loadChildren: () => import('./ruta-modulo/auth.module').then( module => module.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// ROUTER OUTLET:
//---------------------------------------------------------------------------------------------------------------------------//
// Nos permite controlar los saltos de páginas o la experiencia de parpadeo que
// Angular es capaz de manejar desde sus modulos de ruteo y de esta forma mantenernos
// en el modo SPA (Simple Page Application [Best user experience]).
//---------------------------------------------------------------------------------------------------------------------------//
//Esto lo realizamos dentro de nuestro archivo "app.component.html" (Componente principal de nuestra app):

//Creamos un menú de navegación:
<nav>
  <a routerLink="/nombre-path"></a> //El parametro routerLink permite el ruteo (reemplaza parametro href).
  <a routerLink="/nombre-path-2/{{variable-id}}"></a> //:id (Activated Route).
</nav>

//En lugar de cargar un componente manualmente:
//<app-nombre_de_componente></app-nombre_de_componente>

//Utilizamos router-outlet (Se rellenará de forma dinámica según el estado del Router):
<router-outlet></router-outlet>
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// ACTIVATED ROUTE (Traspaso de datos):
//---------------------------------------------------------------------------------------------------------------------------//
// Activated Route es una interface TS de Angular que nos permite obtener información de las rutas (parametros o elementos
// estructurados).
//---------------------------------------------------------------------------------------------------------------------------//
//Debemos importar este elemento dentro de nuestro componente:
import { ActivatedRoute } from '@angular/router';

//...//
  //Incorporarlo en nuestro constructor:
  constructor(private route: ActivatedRoute) { }

  getDatos(): void {
    //Extraer dato enviado como parametro por ruteo:
    const id = this.route.snapshot.params['id'];
  }
//...//
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// SERVICIO DE RUTEO:
//---------------------------------------------------------------------------------------------------------------------------//
// Otra forma de establecer los ruteos de Angular es desde un servicio creado en nuestro archivo "app.module.ts".
//---------------------------------------------------------------------------------------------------------------------------//
//Contenido del archivo "app.module.ts":
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NombreComponente } from './mi_componente/nombre_de_componente.component';

//Esta constante nos permite establecer los ruteos desde nuestro app.module.ts://////
const appRoutes: Routes = [
  { path: 'nombre-path', component: NombreComponente },
];
/////////////////////////////////////////////////////////////////////////////////////

@NgModule({
  declarations: [
    AppComponent,
    NombreComponente
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//---------------------------------------------------------------------------------------------------------------------------//
