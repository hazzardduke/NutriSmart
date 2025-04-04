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
  maxStamps: number = 7; 
  currentStamps: number = 4; 


  getStars(stamps: number): Array<number> {
    return Array(stamps).fill(0);
  }


  getEmptyStars(stamps: number): Array<number> {
    return Array(this.maxStamps - stamps).fill(0);
  }
}
