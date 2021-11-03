//---------------------------------------------------------------------------------------------------------------------------//
// REACTIVE FORMS:
//---------------------------------------------------------------------------------------------------------------------------//
// Es otra herramienta que nos provee el core de Angular desde "@angular/forms", la cual nos permitirá realizar validaciones
// de formularios.
//---------------------------------------------------------------------------------------------------------------------------//
//Para utilizar reactive forms es necesaria su importación en app.module.ts:
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

imports: [
    //...//
    FormsModule,
    ReactiveFormsModule,
    //...//
],
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// VISTA DEL COMPONENTE:
//---------------------------------------------------------------------------------------------------------------------------//
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <input type="text" formControlName="username" />
  <input type="password" formControlName="password" />
</form>
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// COMPONENTE:
//---------------------------------------------------------------------------------------------------------------------------//
//Importar herramientas para el manejo reactivo del formulario:
import { FormGroup, FormControl, Validators} from '@angular/forms';

export class AppComponent {
  public form: FormGroup;

  constructor(){
    //Inicializar FormGroup y establecer reglas de validación:
    this.form = new FormGroup({
      //El primer parametro corresponde al valor, si no vamos a modificarlo lo dejamos vacío:
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    //CASO UPDATE:
    //Cargar datos al formulario:
    this.form.setValue({
      username: res.data.username,
      password: res.data.password,
    });
  }

  onSubmit(){
    //Validar campos:
    if(this.form.valid){
      guardar(this.form.value);
    }
  }
}
//---------------------------------------------------------------------------------------------------------------------------//
