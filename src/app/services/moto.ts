import { Injectable } from '@angular/core';

export interface Moto {
  nombre: string;
  velocidadMax: string;
  descripcion: string;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class MotoService {
  private motos: Moto[] = [
    {
      nombre: 'Dodge Tomahawk',
      velocidadMax: '500 km/h',
      descripcion: 'Considerada la moto más veloz teórica del mundo.',
      imagen: '/img/Home1.jpg'
    },
    {
      nombre: 'MTT Turbine Superbike Y2K',
      velocidadMax: '365 km/h',
      descripcion: 'Moto deportiva con motor a turbina.',
      imagen: '/img/Home2.jpg'
    },
    {
      nombre: 'Kawasaki Ninja H2R',
      velocidadMax: '400 km/h',
      descripcion: 'Moto de producción más rápida disponible comercialmente.',
      imagen: '/img/Home3.jpg'
    }
  ];

  constructor() {}

  getMotos(): Moto[] {
    return this.motos;
  }
}
