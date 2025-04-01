import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-goals',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.scss'
})
export class GoalsComponent {
  objetivos = [
    {
      nombre: 'Pérdida de Peso',
      descripcion: 'Reducir 5kg en 2 meses',
      fecha: '2025-06-01',
      progreso: 40,
    },
    {
      nombre: 'Subir Porcentaje de Agua',
      descripcion: 'Aumentar de 45% a 55%',
      fecha: '2025-07-15',
      progreso: 60,
    },
  ];

  recomendaciones = [
    {
      fecha: '2025-03-20',
      resumen: 'Reducir consumo de carbohidratos refinados.',
      comentario:
        'Procura evitar panes blancos, pastas refinadas y azúcares. Incluye más vegetales fibrosos y proteína magra.',
    },
    {
      fecha: '2025-03-10',
      resumen: 'Aumentar consumo de agua.',
      comentario: 'Toma al menos 2.5L diarios, distribuidos durante el día.',
    },
  ];

  selectedRecomendacion: any = null;

  abrirModal(rec: any) {
    this.selectedRecomendacion = rec;
  }

  cerrarModal() {
    this.selectedRecomendacion = null;
  }
}
