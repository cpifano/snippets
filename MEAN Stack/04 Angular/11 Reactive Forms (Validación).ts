//---------------------------------------------------------------------------------------------------------------------------//
// REACTIVE FORMS:
//---------------------------------------------------------------------------------------------------------------------------//
// Es otra herramienta que nos provee el core de Angular desde "@angular/forms", la cual nos permitirá realizar el manejo
// reactivo de los formularios y sus validaciones.
//
// FormGroup: FormGroup API contiene los valores, las propiedades y el estado de validación de un grupo en formas reactivas.
// FormBuilder: ofrece métodos convenientes para controlar las instancias.
// AbstractControl: esta clase controla el comportamiento y las propiedades de FormGroup, FormControl y FormArray.
// FormControl: Se encarga de gestionar el valor y el estado de validación del control de formulario específico.
// FormArray: esta API administra los valores, las propiedades y el estado de validación de una matriz.
// ngSubmit: este evento se llama cuando se envía el formulario.
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

  //Caso de uso de Radio button (Angular Material):
  <mat-radio-group aria-label="Estado" formControlName="status">
    <mat-radio-button value="true">Activo</mat-radio-button>
    <mat-radio-button value="false">Inactivo</mat-radio-button>
  </mat-radio-group>
</form>
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// COMPONENTE:
//---------------------------------------------------------------------------------------------------------------------------//
//Importar herramientas para el manejo reactivo del formulario:
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

export class AppComponent {
  public form: FormGroup;

  //Crear funcion para el seteo del formulario:
  private setReactiveForm(fields: any): void{
    this.form = this.formBuilder.group(fields);
  }

  //Inyectar FormBuilder al constructor:
  constructor(public formBuilder: FormBuilder){
    //Inicializar valores por defecto y establecer reglas de validación:
    this.setReactiveForm({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      status: ['true'],
    });
  }

  ngOnInit(): void {
    //CASO UPDATE:
    //Cargar datos al formulario:
    this.setReactiveForm({
      username: res.data.username,
      password: res.data.password,
      status: [ `${res.data.status}` ] //Back tip para pasar a String
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
