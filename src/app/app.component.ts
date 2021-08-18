import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private primengConfig: PrimeNGConfig){
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  /* title = 'pipesApp';

  nombre: string = 'Julián';
  valor: number = 1500;
  obj: object = {
    nombre: 'julian'
  }


  mostrarNombre(){
    console.log( this.nombre );}
 */ 
}
