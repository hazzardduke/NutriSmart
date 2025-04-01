import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';
import { RouterModule } from '@angular/router';
import { ChatbotComponent } from '../chatbot/chatbot.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, ChatbotComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  chatbotVisible = false;

  constructor(public auth: AuthService) {}

  logout() {
    this.auth.logout({ logoutParams: { returnTo: window.location.origin } });
  }

  toggleChatbot() {
    this.chatbotVisible = !this.chatbotVisible;
  }
}
