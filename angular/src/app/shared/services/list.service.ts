import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export type ApiResponse = [
  info: {},
  results: {},
]

@Injectable({
  providedIn: 'root'
})
export class ListService {
  apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private httpClient: HttpClient) { }

  getList():Observable<any> {
    return this.httpClient.get<any>(this.apiUrl);

  }
}


//Provideres informa aos componentes que o serviço está disponível para uso
//ProvideIn define como e quem pode injetar esse serviço como dependência, normalmente o root diz que qualquer
//componente pode recebê-lo
// Injeção de dependência = Um padrão de design no qual uma classe solicita dependências de fontes externas em vez de criá-las
//Integração com APIS SÃO GERALMENTE ATRIBUIDAS A SERVIÇOS.
//Injeção de dependência é feita no constructor da classe.Constructor().
//serviços são unidades centrais para algumas funções comuns emm todo o aplicativo e possui@injectable quando precisa ser usado
//
