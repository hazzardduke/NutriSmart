import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fidelity-management',
  templateUrl: './fidelity-management.component.html',
  styleUrls: ['./fidelity-management.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class FidelityManagementComponent {
  maxStamps: number = 7; // Máximo de sellos por tarjeta
  showNotification: boolean = false; // Para mostrar el mensaje de sello agregado

  // Lista de clientes con su progreso
  clients = [
    { name: 'Jhon Doe', stamps: 5 },
    { name: 'Jane Smith', stamps: 3 },
    { name: 'Carlos Pérez', stamps: 6 },
    { name: 'Ana López', stamps: 2 },
  ];

  scannedClient: any = this.clients[0]; // Cliente escaneado por defecto (simulación)

  // Método para agregar un sello al cliente escaneado
  addStampToClient(): void {
    if (this.scannedClient && this.scannedClient.stamps < this.maxStamps) {
      this.scannedClient.stamps++;

      // Mostrar la notificación
      this.showNotification = true;
      setTimeout(() => {
        this.showNotification = false;
      }, 3000);
    }
  }

  // Genera el número de estrellas llenas
  getStars(stamps: number): Array<number> {
    return Array(stamps).fill(0);
  }

  // Genera el número de estrellas vacías
  getEmptyStars(stamps: number): Array<number> {
    return Array(this.maxStamps - stamps).fill(0);
  }
}
