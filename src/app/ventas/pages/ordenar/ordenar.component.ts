import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {

  enMayuscula: boolean = true;

  ordenarPor: string = '';
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.azul
    },
    {
      nombre: 'LinternaVerde',
      vuela: true,
      color: Color.verde
    }
  ];

  cambiarMayuscula(){
    this.enMayuscula = !this.enMayuscula; 
  }

  cambiarOrden( valor: string ){
    this.ordenarPor = valor;
  }

}
