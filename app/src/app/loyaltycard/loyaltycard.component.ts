import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loyaltycard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loyaltycard.component.html',
  styleUrls: ['./loyaltycard.component.scss']
})
export class LoyaltyCardComponent {
  maxStamps: number = 7; // Máximo de sellos en la tarjeta
  currentStamps: number = 4; // Número de sellos actuales (puedes cambiarlo dinámicamente)

  // Genera las estrellas llenas
  getStars(stamps: number): Array<number> {
    return Array(stamps).fill(0);
  }

  // Genera las estrellas vacías
  getEmptyStars(stamps: number): Array<number> {
    return Array(this.maxStamps - stamps).fill(0);
  }
}
