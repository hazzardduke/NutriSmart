import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule, CalendarEvent } from 'angular-calendar';
import { Subject } from 'rxjs';

interface Cita {
  cliente: string;
  fecha: string;
  hora: string;
  estado: string;
  notas: string;
  recomendaciones: string;
}

@Component({
  standalone: true,
  selector: 'app-appointment-management',
  templateUrl: './appointment-management.component.html',
  styleUrls: ['./appointment-management.component.scss'],
  imports: [CommonModule, FormsModule, CalendarModule]
})
export class AppointmentManagementComponent {
  nuevoCliente = '';
  nuevaFecha = '';
  nuevaHora = '';
  mensajeCita = '';
  viewDate: Date = new Date();
  refresh = new Subject<void>();
  currentView: 'month' | 'week' | 'day' = 'month';

  filtroInicio = '';
  filtroFin = '';
  citaSeleccionada: Cita | null = null;

  horasDisponibles = [
    '08:00', '09:00', '10:00', '11:00',
    '13:00', '14:00', '15:00', '16:00'
  ];

  horariosOcupados: string[] = ['10:00'];

  citasProgramadas: Cita[] = [
    {
      cliente: 'Ana Gómez',
      fecha: '2025-04-10',
      hora: '10:00',
      estado: 'Confirmada',
      notas: '',
      recomendaciones: ''
    },
    {
      cliente: 'John Doe',
      fecha: '2025-04-01',
      hora: '09:00',
      estado: 'Realizada',
      notas: 'Paciente estable',
      recomendaciones: 'Seguir dieta baja en sodio'
    },
    {
      cliente: 'Lucía Torres',
      fecha: '2025-03-27',
      hora: '14:00',
      estado: 'Cancelada',
      notas: 'No se presentó',
      recomendaciones: 'Reagendar'
    }
  ];

  citasHistorial: Cita[] = [...this.citasProgramadas]; // Mostrar mismas citas como historial por ahora

  get citasHistorialFiltrado(): Cita[] {
    if (!this.filtroInicio || !this.filtroFin) return this.citasHistorial;
    const desde = new Date(this.filtroInicio);
    const hasta = new Date(this.filtroFin);
    return this.citasHistorial.filter(cita => {
      const fechaCita = new Date(cita.fecha);
      return fechaCita >= desde && fechaCita <= hasta;
    });
  }

  get eventosCalendario(): CalendarEvent[] {
    return this.citasProgramadas.map(cita => ({
      title: `${cita.cliente} (${cita.hora})`,
      start: new Date(`${cita.fecha}T${cita.hora}`),
      color: { primary: '#a1c037', secondary: '#e0f3b2' },
      allDay: false,
      meta: { cita }
    }));
  }

  agendarCita() {
    if (this.nuevoCliente && this.nuevaFecha && this.nuevaHora) {
      const nuevaCita: Cita = {
        cliente: this.nuevoCliente,
        fecha: this.nuevaFecha,
        hora: this.nuevaHora,
        estado: 'Confirmada',
        notas: '',
        recomendaciones: ''
      };

      this.citasProgramadas.push(nuevaCita);
      this.citasHistorial.push(nuevaCita);
      this.horariosOcupados.push(this.nuevaHora);
      this.mensajeCita = '✅ Cita programada con éxito';
      this.refresh.next();

      this.nuevoCliente = '';
      this.nuevaFecha = '';
      this.nuevaHora = '';

      setTimeout(() => {
        this.mensajeCita = '';
      }, 3000);
    }
  }

  mostrarDetalles(cita: Cita) {
    this.citaSeleccionada = cita;
  }
}
