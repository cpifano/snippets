//---------------------------------------------------------------------------------------------------------------------------//
// UPLOAD FILES:
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
// DENTRO DEL COMPONENTE:
//---------------------------------------------------------------------------------------------------------------------------//
import { Component } from '@angular/core';

//Importar módulos de HTTPClient y HttpEventType:
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Inicializar variable de control de archivo seleccionado:
  public selectedFile: File = null;

  //Inyectar servicio HttpClient a mi constructor:
  constructor(private http: HttpClient) { }

  //Método para control de selección de archivos:
  onFileSelected(event: any){
    //Set selected file:
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload(){
    //Crear multipart form:
    const multipartForm = new FormData();

    //Establecer los valores del multipart form:
    multipartForm.append('upload_file_key', this.selectedFile, this.selectedFile.name);

    //Enviar POST request de multipart form:
    this.http.post('http://upload_file_url', multipartForm, {
      //Configurar request:
      reportProgress: true,
      observe: 'events'

    //Observar contenido (subscribe):
    }).subscribe((event) => {
      if(event.type === HttpEventType.UploadProgress){
        //Mostrar en consola el progreso:
        console.log('Upload progress: ' + Math.round(event.loaded / event.total * 100) + '%');
      } else if(event.type === HttpEventType.Response){
        //Mostrar respuesta del servidor:
        console.log(event);
      }
    });
  }
}
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// DENTRO DEL TEMPLATE DEL COMPONENTE:
//---------------------------------------------------------------------------------------------------------------------------//
<input type="file" (change)="onFileSelected($event)" #fileInput style="display: none" />
<button type="button" (click)="fileInput.click()">Seleccionar archivo</button>
<button type="button" (click)="onUpload()">Subir archivo</button>
//---------------------------------------------------------------------------------------------------------------------------//
