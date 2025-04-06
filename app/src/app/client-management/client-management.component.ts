import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-management',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor],
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.scss'],
})
export class ClientManagementComponent {
  busqueda = '';
  clientes = [
    {
      id: 1,
      nombre: 'Ana Torres',
      estado: 'Activo',
      objetivos: [
        {
          tipo: 'Pérdida de peso',
          estado: 'Activo',
          historial: [
            { fecha: '2025-03-01', progreso: '20%' },
            { fecha: '2025-03-20', progreso: '45%' },
          ],
        },
      ],
      perfil: {
        apellidos: 'Torres',
        direccion: 'San José',
        nacimiento: '1995-06-15',
        telefono: '88887777',
        correo: 'ana@mail.com',
        peso: '70kg',
        estatura: '1.65m',
        grasa: '25%',
        musculo: '30%',
        agua: '50%',
      },
      recomendacion: '',
    },
  ];

  clienteSeleccionado: any = null;
  objetivoSeleccionado: any = null;

  seleccionarCliente(cliente: any) {
    this.clienteSeleccionado = cliente;
    this.objetivoSeleccionado = null;
  }

  seleccionarObjetivo(objetivo: any) {
    this.objetivoSeleccionado = objetivo;
  }

  enviarRecomendacion() {
    if (this.clienteSeleccionado?.recomendacion) {
      alert('✅ Recomendación enviada al cliente por correo.');
      this.clienteSeleccionado.recomendacion = '';
    }
  }

  get clientesFiltrados() {
    return this.clientes.filter(cliente =>
      cliente.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
    );
  }
}
