//---------------------------------------------------------------------------------------------------------------------------//
// MATERIAL:
//---------------------------------------------------------------------------------------------------------------------------//
// Angular Material es un framework para el Front-End (UI component library) de nuestra app de Angular.
// Material fué creado especificamente para aplicaciones de Angular y provee la posibilidad de adaptar nuestra app a
// multiples plataformas.
//---------------------------------------------------------------------------------------------------------------------------//
//Instalar Angular Material en nuestro proyecto:
ng add @angular/material

//Luego debemos importar los elementos que vayamos a utilizar de Angular Material dentro de nuestro app.module.ts:
import { MatSliderModule } from '@angular/material/slider';

imports: [
  ...
  MatSliderModule
],
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
//Ejemplo de un slider:
<mat-slider min="1" max="100" step="1" value="1"></mat-slider>
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// DEFINIR TEMAS:
//---------------------------------------------------------------------------------------------------------------------------//
//Dentro del archivo angular.json de nuestro proyecto.
...
"styles": [
  "./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css",
  "src/styles.css"
],
...

//La forma más sencilla y recomendada de cambiarlo es desde nuestro archivo syle.css:
@import "@angular/material/prebuilt-themes/deeppurple-amber.css";
//---------------------------------------------------------------------------------------------------------------------------//
