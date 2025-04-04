import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import html2pdf from 'html2pdf.js';

interface ObjetivoNutricional {
  tipo: string;
  meta: string;
  fecha: string;
  progreso: number;
}

@Component({
  selector: 'app-goals',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent {
  objetivos: ObjetivoNutricional[] = [
    {
      tipo: 'Pérdida de peso',
      meta: 'Reducir 5kg en 2 meses',
      fecha: '2025-06-01',
      progreso: 50
    },
    {
      tipo: 'Subir porcentaje de agua',
      meta: 'Aumentar de 45% a 55%',
      fecha: '2025-07-15',
      progreso: 60
    },
  ];

  nuevoObjetivo = {
    tipo: '',
    meta: '',
    fecha: '',
    progreso: 0
  };

  recomendaciones = [
    {
      fecha: '2025-03-20',
      resumen: 'Reducir consumo de carbohidratos refinados.',
      comentario: 'Procura evitar panes blancos, pastas refinadas y azúcares. Incluye más vegetales fibrosos y proteína magra.'
    },
    {
      fecha: '2025-03-10',
      resumen: 'Aumentar consumo de agua.',
      comentario: 'Toma al menos 2.5L diarios, distribuidos durante el día.'
    }
  ];

  selectedRecomendacion: any = null;
  verDetalles: boolean = false;

  guardarObjetivo() {
    this.objetivos.push({ ...this.nuevoObjetivo });
    this.nuevoObjetivo = { tipo: '', meta: '', fecha: '', progreso: 0 };
  }

  abrirModal(rec: any) {
    this.selectedRecomendacion = rec;
  }

  cerrarModal() {
    this.selectedRecomendacion = null;
  }

  exportarPDF() {
    const element = document.getElementById('pdf-content');
    if (!element) {
      console.error('No se encontró el elemento #pdf-content');
      return;
    }

    html2pdf()
      .set({
        margin: 0.5,
        filename: 'plan-nutricional.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      })
      .from(element)
      .save()
      .then(() => {
        this.verDetalles = false;
      })
      .catch((err: any) => {
        console.error('Error al exportar PDF:', err);
      });
  }
}
