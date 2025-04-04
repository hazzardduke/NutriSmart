import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import html2pdf from 'html2pdf.js';

interface DetalleAlimento {
  alimento: string;
  porciones: string;
  tiempo: string;
}

@Component({
  standalone: true,
  selector: 'app-nutritional-plan',
  templateUrl: './nutritional-plan.component.html',
  styleUrls: ['./nutritional-plan.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class NutritionalPlanComponent {
  selectedAlimento = '';
  porciones = '';
  tiempo = '';
  verDetalles = false;

  alimentos: string[] = ['Lácteos', 'Vegetales', 'Frutas', 'Harinas', 'Proteínas', 'Grasas'];
  tiempos: string[] = ['Desayuno', 'Merienda #1', 'Almuerzo', 'Merienda #2', 'Cena'];

  detallePlan: DetalleAlimento[] = [];

  agregarAlimento() {
    if (this.selectedAlimento && this.porciones && this.tiempo) {
      this.detallePlan.push({
        alimento: this.selectedAlimento,
        porciones: this.porciones,
        tiempo: this.tiempo
      });
      this.selectedAlimento = '';
      this.porciones = '';
      this.tiempo = '';
    }
  }

  eliminarAlimento(index: number) {
    this.detallePlan.splice(index, 1);
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
