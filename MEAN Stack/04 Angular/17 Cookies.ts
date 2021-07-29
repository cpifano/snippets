//---------------------------------------------------------------------------------------------------------------------------//
// COOKIES:
//---------------------------------------------------------------------------------------------------------------------------//
// Para llevar a cabo una gestión sencilla de cookies desde Angular podemos utilizar ngx-cookie-service.
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
// INSTALACIÓN E IMPORTACIÓN:
//---------------------------------------------------------------------------------------------------------------------------//
//Instalar ngx-cookie-service:
npm install ngx-cookie-service --save

//Importar el servicio en app.module.ts:
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  //...//
  providers: [ CookieService ],
  //...//
})
export class AppModule { }
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// USO:
//---------------------------------------------------------------------------------------------------------------------------//
//Inyectar el servicio dentro del constructor:
constructor( private cookieService: CookieService ) {

  //Crear una cookie:
  this.cookieService.set( 'Test', 'Hola mundo' );

  //Obtener valor de una cookie:
  this.cookieValue = this.cookieService.get('Test');

  //Chequear si existe o no una cookie:
  const cookieExists: boolean = this.cookieService.check('Test');

  //Obtener todas las cookies del navegador:
  const allCookies: {} = this.cookieService.getAll();

  //Eliminar una cookie:
  this.cookieService.delete('Test');

  //Eliminar todas las cookies del navegador:
  this.cookieService.deleteAll();
}
//---------------------------------------------------------------------------------------------------------------------------//
