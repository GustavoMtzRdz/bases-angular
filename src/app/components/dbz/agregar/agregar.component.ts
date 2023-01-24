import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

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

  @Output() onNewCharacter: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    if (this.nuevo.name.trim().length === 0) { return; }
    
    console.log(this.nuevo);
    this.onNewCharacter.emit(this.nuevo);

    this.nuevo = {
      name: '',
      power: 0
    }
  }

}
