import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-application10',
  templateUrl: './application10.component.html',
  styleUrls: ['./application10.component.css']
})
export class Application10Component{
  public chats: Observable<any[]>;

  constructor(firestore: AngularFirestore){
    this.chats = firestore.collection('chats').valueChanges();
    console.log(this.chats);
  }
}
