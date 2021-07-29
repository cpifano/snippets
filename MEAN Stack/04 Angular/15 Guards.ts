//---------------------------------------------------------------------------------------------------------------------------//
// GUARDS:
//---------------------------------------------------------------------------------------------------------------------------//
// Hay veces que queremos que determinadas áreas de nuestra aplicación web estén protegidas y solo puedan ser accedidas si
// el usuario ésta logueado. Para conseguir esto con Angular se utilizan los guards.
// Los guards pueden ser extensibles para que permitan acceder bajo las condiciones que nosotros determinemos, podemos
// incluso hacer peticiones a un backend antes de que el usuario entre en la página.

// Los guards devuelven true o false para permitir el paso o no de un usuario a la ruta.
// También pueden devolver un Observale o una Promise si el guard no puede responder inmediatamente y tiene que esperar.

// Dentro de los guards hay 4 tipos principales:

// CanActivate:
// Mira si el usuario puede acceder a una página determinada.

// CanActivateChild:
// Mira si el usuario puede acceder a las páginas hijas de una determinada ruta.

// CanDeactivate:
// Mira si el usuario puede salir de una página, es decir, podemos hacer que aparezca un mensaje, por ejemplo, de
// confirmación, si el usuario tiene cambios sin guardar (Esto no evita que pueda cerrar la pestaña o el navegador).

// CanLoad:
// Sirve para evitar que la aplicación cargue los módulos perezosamente si el usuario no está autorizado a hacerlo.
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
//Crear un Guard:
ng generate guard nombre_guard
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
//Ejemplo:
ng generate guard auth-guard

//Se generará un archivo con el auth.guard.ts dentro del directorio app:
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

//Importar módulo de Reactive X:
import { Observable } from 'rxjs';

//Añadir Router:
import { Router } from '@angular/router';

//Añadir nuestro servicio de login:
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    //Inyectamos nuestro servicio de login y nuestro router al constructor:
    constructor(private authService: LoginService, private router: Router) { }

    canActivate() {
        //Si nuestro servicio comprueba que el usuario no está sesionado sera redirigido a la raiz:
        if (!this.authService.isLogged()) {
            console.log('No estás logueado');
            this.router.navigate(['/']);
            return false;
        }

        return true;
    }
}
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
//Asignar nuestro Guard a una ruta en particular "app-routing.module.ts":
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importar componente destino:
import { ListUsersComponent } from "./list.users.component";

const routes: Routes = [
  { path: 'usuarios', component: ListUsersComponent,  canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// Ejemplo una posible implementación de un guard CanDeactivate:
import { CanDeactivate } from '@angular/router';
import { CanDeactivateComponent } from './app/can-deactivate';

export class ConfirmDeactivateGuard implements CanDeactivate<CanDeactivateComponent> {

  canDeactivate(target: CanDeactivateComponent) {
    if(target.hasChanges()){
        return window.confirm('¿Está seguro de que desea salir?');
    }
    return true;
  }
}
//---------------------------------------------------------------------------------------------------------------------------//
