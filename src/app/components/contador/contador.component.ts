import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  title: string = 'bases';
  numero: number = 10;
  base: number = 10;

  acumular( valor: number ) {
    this.numero += valor;
  }

  // sumar(){
  //   this.numero += 1;
  // }

  // restar(){
  //   this.numero -= 1;
  // }
}
