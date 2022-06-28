import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  // i18nSelect
  nombre: string = 'Javier';
  genero: string = 'masculino';
  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  //i18nPlulal
  clientes: string[] = ['Maria', 'Pedro', 'Hernando', 'Eduardo', 'Fernando'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  cambiarCliente() {
    this.nombre = 'Maribel';
    this.genero = 'femenino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  // keyValue Pipe
  persona = {
    nombre: 'Javier',
    edad: 40,
    direccion: 'Lima, Peru',
  };

  // JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    },
  ];

  // Async Pipe
  miObservable = interval(5000); // 0,1,2,3,4....

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}
