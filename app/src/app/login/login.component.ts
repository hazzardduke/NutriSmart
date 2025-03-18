import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="login-container">
      <button *ngIf="!isAuthenticated" (click)="login()" class="login-button">
        Iniciar Sesión
      </button>
      <div *ngIf="isAuthenticated">
        <p>¡Bienvenido!</p>
        <button (click)="logout()" class="logout-button">Cerrar Sesión</button>
      </div>
    </div>
  `,
  styles: [`
    .login-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .login-button, .logout-button {
      padding: 10px 20px;
      font-size: 16px;
      border-radius: 5px;
      cursor: pointer;
      border: none;
      background-color: #0066cc;
      color: white;
      transition: background-color 0.3s;
    }
    .login-button:hover, .logout-button:hover {
      background-color: #0052a3;
    }
  `]
})
export class LoginComponent implements OnInit {
  isAuthenticated = false;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.auth.isAuthenticated$.subscribe(
      isAuthenticated => {
        this.isAuthenticated = isAuthenticated;
        if (isAuthenticated) {
          this.router.navigate(['/dashboard']);
        }
      }
    );
  }

  login() {
    this.auth.loginWithRedirect({
      appState: { target: '/dashboard' }
    });
  }

  logout() {
    this.auth.logout({
      logoutParams: {
        returnTo: window.location.origin
      }
    });
  }
}
