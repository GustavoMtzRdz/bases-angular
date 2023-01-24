import { Component, Input } from '@angular/core';
import { DbzService } from '../services/dbz.service';
//import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})

export class PersonajesComponent {
  //@Input() personajes: Personaje[] = [];

  get personajes() {
    return this.dbzService.personajes;
  }

  constructor(private dbzService: DbzService) {}

}
