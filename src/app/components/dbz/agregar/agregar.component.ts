import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent {
  
  @Input() nuevo: Personaje = {
    name: '',
    power: 0
  }

  constructor(private dbzService: DbzService) {}
  //@Output() onNewCharacter: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    if ( this.nuevo.name.trim().length === 0 ) { return; }
    //this.onNewCharacter.emit(this.nuevo);
    this.dbzService.agregarNuevoPersonaje(this.nuevo);
    this.nuevo = {
      name: '',
      power: 0
    }    
  }

}
