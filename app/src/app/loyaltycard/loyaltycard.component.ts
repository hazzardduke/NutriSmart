import { Component } from '@angular/core';

@Component({
  selector: 'app-loyaltycard',
  standalone: true,
  templateUrl: './loyaltycard.component.html',
  styleUrls: ['./loyaltycard.component.scss']
})
export class LoyaltyCardComponent {
  llamitas = Array(12).fill(0);
}
