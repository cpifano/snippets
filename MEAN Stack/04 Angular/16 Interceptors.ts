//---------------------------------------------------------------------------------------------------------------------------//
// INTERCEPTORS:
//---------------------------------------------------------------------------------------------------------------------------//
// Es un servicio que implementa una interface llamada HttpInterceptor, que permite interceptar todas las peticiones (requests)
// de nuestro servidor.
//---------------------------------------------------------------------------------------------------------------------------//
import { Injectable } from '@angular/core';

//Importar Interface HttpInterceptor:
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

//Importar módulo de Reactive X:
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(){ }

  //Método intercept de la interface HttpInterceptor:
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //Mostrar en consola que simplemente pasó por el interceptor:
    console.log('Esto fue agregado desde el interceptor');

    //Retornar el request sin alteraciones:
    return next.handle(req);
  }
}
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
//Agregar el interceptor a app.module.ts:
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//Importar servicio interceptor:
import { InterceptorService } from './services/interceptor.service';

@NgModule({
  //...//
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true //Para que esté pendiente de todas las peticiones del servidor.
  }]
})
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// CASO DE USO PARA JWT (MANUAL):
//---------------------------------------------------------------------------------------------------------------------------//
import { Injectable } from '@angular/core';

//Importar Interface HttpInterceptor:
import { HttpInterceptor, HttpHeaders, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';

//Importar módulo de Reactive X:
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(){ }

  //Método intercept de la interface HttpInterceptor:
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //Obtener Token (Solo ejemplo):
    const jwt_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';

    //Set Headers:
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + jwt_token });

    //Clonar request:
    const reqClone = req.clone({
      headers,
      params,
      //...//
    });

    //Retornar el request modificando solo los headers:
    return next.handle(reqClone);

    //En caso de querer manejar errores desde el interceptor:
    return next.handle(reqClone).pipe(
      catchError( this.manejarError )
    );
  }
}

//Funcion para manejar respuestas de error:
manejarError(error: HttpErrorResponse){
  console.error('Ha sucedido un error!');
  console.warn(error);
  return throwError('Error personalizado');
}
//---------------------------------------------------------------------------------------------------------------------------//
