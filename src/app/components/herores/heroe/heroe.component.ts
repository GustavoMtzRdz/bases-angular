import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  nombre: string = 'Ironman';
  edad: number = 45;

  get nombreCapitalizado(){
    return this.nombre.toLocaleUpperCase();
  }

  optenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }

}
