import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

  nombreLower: string = 'julián';
  nombreDist: string = 'JuLIán';
  nombreCompleto: string = 'JuLiÁn LinaRES';

  fecha: Date = new Date(); // Día actual
  

}
