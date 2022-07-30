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

