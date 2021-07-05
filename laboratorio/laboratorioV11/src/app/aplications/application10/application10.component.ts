import { Component } from '@angular/core';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-application10',
  templateUrl: './application10.component.html',
  styleUrls: ['./application10.component.css']
})
export class Application10Component{

  constructor(public chatService: ChatService){
    
  }
}
