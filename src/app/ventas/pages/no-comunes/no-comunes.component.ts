import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  // para i18nSelect
  nombre: string = 'Julián';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // para i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Carlos', 'Perla'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarInvitacion() : void
  {
    this.nombre = 'Angélica';
    this.genero = 'femenino';
  }

  eliminarItem() : void {
    this.clientes.splice( 0,1 );
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Julián',
    edad: 31,
    direccion : 'Bogotá, Colombia'
  }

  // JSON Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Spiderman',
      vuela: false
    },
    {
      nombre: 'Batman',
      vuela: true
    }    
  ]

  // Async Pipe
  // 1) observable
  miObservable = interval(5000); // 0,1,2,3,4, etc
  // 2) promesa
  valorPromesa = new Promise ( (resolve, reject ) => {
    setTimeout(() => {
      resolve( 'Tenemos data de promesa' );
    }, 3500);
  });

}
