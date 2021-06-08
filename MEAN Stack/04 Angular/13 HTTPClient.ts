//---------------------------------------------------------------------------------------------------------------------------//
// HTTPCLIENT:
//---------------------------------------------------------------------------------------------------------------------------//
// Es un servicio que usa Observables de RxJS para leer o escribir de una API REST a través de llamadas HTTP.

// GET: Simplemente devuelven información.
// POST: A estos endpoints se envía información normalmente para crear o ejecutar acciones sobre recursos en bases de datos.
// PUT: Se envía información al endpoint y se modifica en base de datos un recurso.
// DELETE: Para borrar recursos del servidor.
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
//Contenido del archivo app.module.ts:
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

//Importar módulo de HTTPClient:
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule //Declaro el módulo para que esté a disposición en la app.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
//Contenido de archivo usuarios/usuarios.service.ts:
//Importar servicio HTTPClient:
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Importar módulo Reactive X:
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: "root"
})
export class UsuariosService {
  //Inyectar servicio HttpClient a mi constructor:
  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any> {
    return this.http.get('https://localhost:3000/api/usuarios');
  }

  createUsuario(datos_usuario: Any): Observable<any> {
    let datos_json = JSON.stringify(datos_usuario);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('https://localhost:3000/api/usuarios', datos_json, {headers: headers});
  }

  editUsuario(id: number, usuario: Any): Observable<any> {
    return this.http.post('https://localhost:3000/api/usuarios/' + id, usuario);
  }

  deleteUsuario(id: number): Observable<any> {
    return this.http.delete('https://localhost:3000/api/usuarios/' + id);
  }
}
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
//Contenido de archivo usuarios/usuarios.component.ts:
import { Component, OnInit } from "@angular/core";
import { UsuariosService } from "./usuarios.service";

@Component({
  selector: "app-usuarios",
  templateUrl: "./usuarios.component.html",
  styleUrls: ["./usuarios.component.css"]
})
export class UsuariosComponent implements OnInit {
  //Definir elemento contenedor de datos:
  usuarios: any;

  constructor(public objUsuariosService: UsuariosService) {}

  ngOnInit() { }

  listarUsuarios(){
    this.objUsuariosService.getUsuarios().suscribe((resultado) => {
        this.usuarios = resultado.usuarios;
      },
      (error) => {
        console.log('Error en el request hacia la API: ' + JSON.stringify(error));
      }
    );
  }

  eliminarUsuario(id){
      this.objUsuariosService.deleteUsuario(id).suscribe((resultado) => {
          this.listarUsuarios();
        },
        (error) => {
          console.log('Error en el request hacia la API: ' + JSON.stringify(error));
        }
      );
  }

  crearUsuario(){
    this.objUsuariosService.createUsuario(this.datos_usuario).suscribe((resultado) => {
        this.listarUsuarios();
      },
      (error) => {
        console.log('Error en el request hacia la API: ' + JSON.stringify(error));
      }
    );
  }

}
//---------------------------------------------------------------------------------------------------------------------------//
