import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fireChat';

  item$: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.item$ = firestore.collection('items').valueChanges();
  }
}
