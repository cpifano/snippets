//---------------------------------------------------------------------------------------------------------------------------//
// MULTIPLES SUSCRIPCIONES:
//---------------------------------------------------------------------------------------------------------------------------//
import { Component, OnInit, OnDestroy } from '@angular/core';

//Importar servicio obsService:
import { obsService } from './obs.service';

//Importar módulo de Reactive X:
import { forkJoin } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //Inyectar servicio en el constructor:
  constructor(public obs: obsService) {}

  public ngOnInit(): void {
    //Obtener JSON de API GitHub sobre un usuario en particular:
    this.obs.getGitHub('cpifano').subscribe(
      (res: any) => {
        console.log(res);
      }
    );

    //Obtener resultados de multiples suscripciones en PARALELO:
    //Es decir, avanzan todas a la vez.
    //forkJoin nos retornará un Array con los resultados en el orden ingresado.
    forkJoin([
        this.obs.getGitHub('cpifano'),
        this.obs.getGitHub('elacuesta')
    ]).subscribe(
      (res) => {
        console.log(res);
      }
    );

    //Multiples suscripciones en SERIE:
    //Es decir, se va a respetar el orden de finalización de cada observable.
    //Obtener un dato de una de las suscripciones para usar en otra:
    this.obs.getGitHub('cpifano').pipe(
      mergeMap(
        (res: any) => ajax(res.blog), //Recibe el resultado y realiza una operacion X.
        //(res2: any) => otra_operacion(res2.id), //Recibe el resultado de la operacion anterior y realiza el siguiente mapeo.
      )
    ).subscribe((final: any) => {
      console.log('Resultado' + final.status);
    });

  }

  public ngOnDestroy(): void {

  }
}
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// OBS SERVICE:
//---------------------------------------------------------------------------------------------------------------------------//
import { Injectable } from '@angular/core';

//Importar módulo de Reactive X:
import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class obsService {

  constructor() { }

  public getGitHub(user: string): any {
    const gh = ajax.getJSON('https://api.github.com/users/' + user);

    const data$ = new Observable(observer => {
      gh.subscribe(
        (res) => {
          observer.next(res);
          observer.complete();
        },
        (err) => {
          observer.error(err);
        }
      );
    });

    return data$;
  }

}
//---------------------------------------------------------------------------------------------------------------------------//
