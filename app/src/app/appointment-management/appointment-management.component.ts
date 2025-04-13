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
  selector: 'app-appointment-management',
  standalone: true,
  templateUrl: './appointment-management.component.html',
  styleUrls: ['./appointment-management.component.scss'],
  imports: [CommonModule, FormsModule, CalendarModule]
})
export class AppointmentManagementComponent {
  tabActivo: 'calendario' | 'historial' = 'calendario';

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
  citasDelDiaSeleccionadas: Cita[] = [];

  horasDisponibles = ['08:00', '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'];
  horariosOcupados: string[] = ['10:00'];

  citas: Cita[] = [
    {
      cliente: 'Ana Gómez',
      fecha: formatDateOffset(1),
      hora: '10:00',
      estado: 'Realizada',
      notas: 'Paciente estable',
      recomendaciones: 'Seguir dieta baja en sodio'
    },
    {
      cliente: 'Carlos Ramírez',
      fecha: formatDateOffset(2),
      hora: '09:00',
      estado: 'Confirmada',
      notas: '',
      recomendaciones: ''
    },
    {
      cliente: 'Lucía Torres',
      fecha: formatDateOffset(0),
      hora: '14:00',
      estado: 'Cancelada',
      notas: 'No se presentó',
      recomendaciones: 'Reagendar'
    }
  ];

  get citasHistorialFiltrado(): Cita[] {
    if (!this.filtroInicio || !this.filtroFin) return this.citas;
    const desde = new Date(this.filtroInicio);
    const hasta = new Date(this.filtroFin);
    return this.citas.filter(cita => {
      const fechaCita = new Date(cita.fecha);
      return fechaCita >= desde && fechaCita <= hasta;
    });
  }

  get eventosCalendario(): CalendarEvent[] {
    return this.citas.map(cita => {
      let color;
  
      switch (cita.estado.toLowerCase()) {
        case 'confirmada':
          color = { primary: '#1e90ff', secondary: '#d0e9ff' }; 
          break;
        case 'realizada':
          color = { primary: '#28a745', secondary: '#c3f5d5' }; 
          break;
        case 'cancelada':
          color = { primary: '#dc3545', secondary: '#f8d7da' }; 
          break;
        default:
          color = { primary: '#a1c037', secondary: '#f0f0f0' }; 
          break;
      }
  
      return {
        title: `${cita.cliente} (${cita.hora})`,
        start: new Date(`${cita.fecha}T${cita.hora}`),
        color,
        allDay: false,
        meta: { cita }
      };
    });
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

      this.citas.push(nuevaCita);
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
    this.citasDelDiaSeleccionadas = []; 
  }

  mostrarCitasDelDia(fecha: Date) {
    const diaISO = fecha.toISOString().split('T')[0];
    this.citasDelDiaSeleccionadas = this.citas.filter(c => c.fecha === diaISO);
    this.citaSeleccionada = null; 
  }

  editarCita(cita: Cita) {
    alert(`Cita editada`);
  }
}

function formatDateOffset(daysFromToday: number): string {
  const date = new Date();
  date.setDate(date.getDate() + daysFromToday);
  return date.toISOString().split('T')[0];
}
