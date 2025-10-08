import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotoService, Moto } from '../../services/moto';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  motos: Moto[] = [];

  constructor(private motoService: MotoService) {
    this.motos = this.motoService.getMotos(); // Esto debe traer los 3 elementos
  }
}
