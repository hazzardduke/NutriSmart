import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-admin.component.html',
  styleUrl: './dashboard-admin.component.scss'
})
export class DashboardAdminComponent {
  tabActivo: 'citas' | 'planes' = 'citas'; // Inicializa con 'citas' por defecto

  clientesActivos = 48;
  citasHoy = 12;

  citas = [
    { cliente: 'Ana Torres', fecha: '2025-04-01', estado: 'Pendiente' },
    { cliente: 'Luis Rojas', fecha: '2025-04-01', estado: 'En curso' },
    { cliente: 'María Gómez', fecha: '2025-04-01', estado: 'Completada' },
  ];

  planes = [
    { cliente: 'Ana Torres', estado: 'Activo' },
    { cliente: 'Luis Rojas', estado: 'En revisión' },
    { cliente: 'María Gómez', estado: 'Completado' },
  ];
}
