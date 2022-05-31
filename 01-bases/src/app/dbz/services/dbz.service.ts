import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'vegeta',
      poder: 7500,
    },
  ];

  get personajes() {
    return [...this._personajes]; // Operador 'Spread'. Crear un nuevo arreglo
  }

  constructor() {
    console.log('Servicio inicializado');
  }

  agregarPersonaje(personaje: Personaje) {
    this._personajes.push(personaje);
  }
}
