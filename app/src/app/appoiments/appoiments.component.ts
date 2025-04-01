import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appoiments',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './appoiments.component.html',
  styleUrl: './appoiments.component.scss'
})
export class AppoimentsComponent {
  fechaSeleccionada = '';
  horaSeleccionada = '';
  citaProgramada = false;
  mensaje = '';

  horarios = [
    { hora: '08:00 AM', disponible: true },
    { hora: '09:00 AM', disponible: false },
    { hora: '10:00 AM', disponible: true },
    { hora: '11:00 AM', disponible: true },
    { hora: '01:00 PM', disponible: true },
    { hora: '02:00 PM', disponible: false },
    { hora: '03:00 PM', disponible: true },
  ];

  programarCita() {
    if (this.fechaSeleccionada && this.horaSeleccionada) {
      this.citaProgramada = true;
      this.mensaje = '✅ Cita programada con éxito. Se enviará un correo de confirmación.';
    }
  }

  cancelarCita() {
    this.fechaSeleccionada = '';
    this.horaSeleccionada = '';
    this.citaProgramada = false;
    this.mensaje = '❌ Cita cancelada correctamente.';
  }
}
