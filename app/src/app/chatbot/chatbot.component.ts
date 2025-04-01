import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent {
  @Output() closeChatbot = new EventEmitter<void>();

  closeChat() {
    this.closeChatbot.emit(); // Notifica al Dashboard que debe cerrarse
  }
}
