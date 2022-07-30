import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ // implements é para implementar o OnInit, que inicia algo antes da página iniciar
  count = 0; //variável count, vai inializar na página com 0

  nome='Dev-Cleyson Cassio da Silva'// "3" aqui estou fazendo uma data bindig que será exibino no app.component.html com double mustache {{dev cleyson cassio da siva}}
  text=""; //"4" aqui irei fazer um thow way databinding 
  pessoas = [
    {
      nome: "Cleyson",
      sobrenome: "Silva"
    },

    {
      nome: "Thalyson",
      sobrenome: "Cavalcante"
    },
    {
      nome: "Sheila",
      sobrenome: "Rochelane"
    },
    {
      nome: "Juan",
      sobrenome: "Cassio"
    }

  ];
  constructor(){

  }
  ngOnInit(): void {//implemente lógica
    console.log(this.pessoas);
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
}
//próximo passo é passar essa variável ' count' para o html (app.component.html)
