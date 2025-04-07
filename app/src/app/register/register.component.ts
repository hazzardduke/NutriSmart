import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form: { [key: string]: string } = {
    cedula: '',
    nombre: '',
    apellidos: '',
    direccion: '',
    fechaNacimiento: '',
    telefono: '',
    correo: '',
    password: '',
  };

  mensaje: string = '';
  error: string = '';

  constructor(private http: HttpClient) {}

  validarFormulario(): boolean {
    const regexCedula = /^\d{9}$/;
    const regexTelefono = /^\d{8}$/;
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexPassword = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  
    if (!regexCedula.test(this.form['cedula'])) {
      this.error = 'Cédula inválida (9 dígitos)';
      return false;
    }
    if (!regexTelefono.test(this.form['telefono'])) {
      this.error = 'Teléfono inválido (8 dígitos)';
      return false;
    }
    if (!regexCorreo.test(this.form['correo'])) {
      this.error = 'Correo inválido';
      return false;
    }
    if (!regexPassword.test(this.form['password'])) {
      this.error = 'La contraseña debe tener mínimo 8 caracteres, una mayúscula y un número';
      return false;
    }
    if (
      !this.form['nombre'] ||
      !this.form['apellidos'] ||
      !this.form['direccion'] ||
      !this.form['fechaNacimiento']
    ) {
      this.error = 'Formulario incompleto';
      return false;
    }
  
    this.error = '';
    return true;
  }
  

  registrar() {
    if (!this.validarFormulario()) return;

    this.http.post('http://localhost:3000/auth/register', this.form).subscribe({
      next: () => {
        this.mensaje = '✅ Registro exitoso. Revisa tu correo para confirmar.';
        this.error = '';
      },
      error: (err) => {
        this.error = '❌ Error al registrar: ' + (err.error?.message || '');
        this.mensaje = '';
      },
    });
  }
}
