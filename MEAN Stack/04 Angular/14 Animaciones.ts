//---------------------------------------------------------------------------------------------------------------------------//
// ANIMACIONES:
//---------------------------------------------------------------------------------------------------------------------------//
// Angular provee su propio lenguaje de animaciones.
//---------------------------------------------------------------------------------------------------------------------------//
//Importar módulo de animaciones en app.module.ts:
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Declararlo dentro de los imports:
//...//
imports: [BrowserAnimationsModule]
//...//
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// DENTRO DEL COMPONENTE DESTINO:
//---------------------------------------------------------------------------------------------------------------------------//
import { trigger, style, transitions, animate } from '@angular/animations';

@Component({
  //...///
  animations: [
    trigger('nombre_disparador', [
      //Valores que tomará la animación cuando el valor sea cero:
      state('0', style({
        backgroundColor: 'red'
      })),
      //Valores que tomará la animación cuando el valor sea uno:
      state('1')
        backgroundColor: 'green'
    ]),
    //Transición de falso a verdadero:
    transitions('0 => 1', animate('0.4s ease-out')),
    //Transición de verdadero a falso:
    transitions('1 => 0', animate('0.4s ease-out')),
  ]
  //...///
})
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// DENTRO DEL TEMPLATE DEL COMPONENTE DESTINO:
//---------------------------------------------------------------------------------------------------------------------------//
<div [@nombre_disparador]="valor_a_evaluar"></div>
//---------------------------------------------------------------------------------------------------------------------------//
