import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
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

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor() {}

    agregarNuevoPersonaje(personaje: Personaje) {
      this._personajes.push(personaje);
    }

}