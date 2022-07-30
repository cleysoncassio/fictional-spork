import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({//"6"fala registrar um serviço people no nível raiz do app
  providedIn: 'root'//faça ser diponível em qualquer lugar da app
})
export class PeopleService { //"5"esportar para provideres no app.mudule

  constructor() { }
//criando método getPeople
  getPeople():Observable<any> {//criar método typado com Observable
    let peopleArray = [
      {
        firstName:'Cleyson',
        lastName: 'Silva',
        age:42
      },
      {
        firstName:'Sheila',
        lastName: 'Silva',
        age:22
      },
      {
        firstName:'Tatiane',
        lastName: 'cruz',
        age:34
      },
      {
        firstName:'Juan',
        lastName: 'Cassio',
        age:1
      },
    ]

    return of(peopleArray) // retorno do Observable

  }
}
