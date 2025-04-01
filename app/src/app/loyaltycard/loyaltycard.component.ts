import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- IMPORTANTE

@Component({
  selector: 'app-loyaltycard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loyaltycard.component.html',
  styleUrls: ['./loyaltycard.component.scss']
})
export class LoyaltyCardComponent {}
