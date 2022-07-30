import { Component, OnInit } from '@angular/core';
import { PeopleService } from './shared/services/people.service';

@Component({
  selector: 'spa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ // implements é para implementar o OnInit, que inicia algo antes da página iniciar
  count = 0; //variável count, vai inializar na página com 0

  nome='Dev-Cleyson Cassio da Silva'// "3" aqui estou fazendo uma data bindig que será exibino no app.component.html com double mustache {{dev cleyson cassio da siva}}
  text=""; //"4" aqui irei fazer um thow way databinding
  pessoas = [ // aqui vai lá para listpeople.component.ts
    {
      firstName:'',
      lastName: '',
      age:0,
    }
  ];
  constructor(private peopleService: PeopleService){//angular quando instanciado, pegue do people service injectable

  }
  ngOnInit(): void {//implemente lógica
    this.getPeople();
    let interval = setInterval(() => {
      this.count++; //quero pega a class count com o this e implementar ++
      if(this.count ===10){//se meu count chegar a 10 eu quero que limpe meu intervalo com clear
        clearInterval(interval);
      }
    },1000)

  }
  // "3" CRIAR UM MÉTODO GENÉRICO CHAMADO CLICOU
  clicou(nome: string) :void{//não retorna nada, por isso o "void"// adicionado o parametro nome para saber quem clicou
    console.log('Clicou em min', nome) //aqui sei quem clicou

  }
  getPeople(){
    this.peopleService.getPeople().subscribe(people => {
    this.pessoas = people;
    })
  }
}
//próximo passo é passar essa variável ' count' para o html (app.component.html)
