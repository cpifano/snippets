//---------------------------------------------------------------------------------------------------------------------------//
// SERVICIOS:
//---------------------------------------------------------------------------------------------------------------------------//
// Un servicio es un proveedor de datos, que mantiene lógica de acceso a ellos y operativa relacionada.
// Siempre llegará el momento en el que dos o más componentes tengan que acceder a los mismos datos y hacer operaciones
// similares con ellos, que podrían obligarnos a repetir código. Para solucionar estas situaciones tenemos a los servicios.

// La documentación de Angular indica, un Componente no debe tener la responsabilidad de consultar datos o almacenarlos,
// esa responsabilidad es para los Servicios.
// El trabajo de un servicio es el de controlar la información, desde obtenerla, almacenarla, actualizarla y compartirla
// con los componentes.

// Lo recomendable es que esta capa de acceso a los datos esté separada.
// Si un día decides cambiar de lugar de los datos, por ejemplo, quitar una API y poner websockets vas a agradecer mucho que
// tengas una estructura con el acceso a los datos separados.
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
//Generar un nuevo servicio:
ng generate service nombre_servicio

//El atributo –module=app indica que el servicio que se va a crear se va a importar directamente en el app.module.ts:
ng generate service nombre_servicio --module=app
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
//Se generará un archivo con el saludo.service.ts dentro del directorio app:
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaludoService {
  //Metodo para proveer dentro de nuestro servicio:
  saludo(): void{
    console.log('Hola mundo');
  }

  constructor() { }
}
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
//Para poder utilizar posteriormente este servicio debera ser definido en el módulo que se desee según el alcance del mismo:
//En este caso lo declaramos en el módulo raíz (NgModule):
@NgModule({
  //...//
  providers: [SaludoService]
})
//---------------------------------------------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulo de servicio en nuestro Componente:
import { SaludoService } from '../saludo.service.ts';

export class DestinoComponent implements OnInit{

  //Inyectar servicio en un objeto de nuestro constructor (Dependency Injection):
  constructor(private objSaludoService:SaludoService) { }

  //Utilizar metodo de servicio:
  ngOnInit(): void {  //ngOnInit es uno de tantos ciclos de vida que puede tener un componente.
    this.objSaludoService.saludo();
  }
}
//---------------------------------------------------------------------------------------------------------------------------//
