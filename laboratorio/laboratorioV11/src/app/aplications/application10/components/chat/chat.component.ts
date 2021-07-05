import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['../../application10.component.css']
})
export class ChatComponent implements OnInit {
public mensaje: string;
public elemento: HTMLElement | null;

constructor(public chatService: ChatService) {
  this.mensaje = "";
  this.elemento = null;
  this.chatService.cargarMensajes().subscribe(() => {
    setTimeout(() => {
      if(this.elemento) this.elemento.scrollTop = this.elemento.scrollHeight;
    }, 20);
  });
}
ngOnInit(): void {
  this.elemento = document.getElementById('app-mensajes');
}

  public enviarMensaje(): void {
    if (this.mensaje.length > 0) {
      this.chatService.addChat(this.mensaje)
        .then(() => this.mensaje = "")
        .catch((err) => console.error('Error al enviar ' + err));
    }
  }

  public isMsgUsuario(uid: string): boolean{
    return uid === this.chatService.usuario.uid;
  }

}
