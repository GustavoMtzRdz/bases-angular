import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      name: "Goku",
      power: 15000
    },
    {
      name: "Vegeta",
      power: 14000
    },
    {
      name: "No 17",
      power: 14500
    }
  ];

  nuevo: Personaje = {
    name: 'Maestro Roshi',
    power: 1000
  }

  agregarNuevoPersonaje(arg: Personaje){
    this.personajes.push(arg);
  }

}
