import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[spaMarcaTexto]'
})
export class MarcaTextoDirective implements OnInit {
  @Input() corDeFundo: string = 'yellow';
  @Input() corDeTexto: string = 'white';

  constructor(private elemento: ElementRef) {}

  ngOnInit(){
    this.mudarFundo();

  }
  private mudarFundo(cor: string = 'yellow'){
    this.elemento.nativeElement.style.backgroundColor = this.corDeFundo || cor;
    this.elemento.nativeElement.saber.color = this.corDeTexto;
    this.elemento.nativeElement.style.fontWeight = 'bold';
  }

   }

//diretivas são meios para manipular o DOM ou estender as funcionalidades do elemento
//diretivas costumizadas altera um atributo ou estrutura
//Ngif é uma diretiva estrutural
//Ngclass é diretiva de atributo
//NgStyle atualiza estilos para o elemento HTML que a contém
//Ngclass adiciona ou remove classes CSS em um elemento de acordo com determinada regra
//*Ngif é uma diretiva estrutural que possui uma condição booleanda que quando verdadeira, o angular renderiza o elemento
// e quando falso não renderiza
//*Ngswith exibe um elemento de um possíve conjunto de elementos com base em alguma condição, ele usa diretivas NgSwitch e ngSwitchDefault
