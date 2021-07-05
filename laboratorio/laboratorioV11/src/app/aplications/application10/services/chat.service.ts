import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { Chat } from '../../../models/chat';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public chats: Chat[];
  public usuario: any;
  private itemsCollection: AngularFirestoreCollection<Chat>;

  constructor(private afs: AngularFirestore, public auth: AngularFireAuth) {
    this.usuario = {};
    this.chats = [];
    this.itemsCollection = this.afs.collection<Chat>('chats', ref => ref.orderBy('fecha','desc').limit(5));
    this.auth.authState.subscribe(user =>{
      if(!user){
        return;
      }else{
        this.usuario.nombre = user.displayName;
        this.usuario.uid = user.uid;
        console.log('Estado del usuario: ', this.usuario);
      }
    });
  }

  public cargarMensajes() : Observable<void> {
    return this.itemsCollection.valueChanges().pipe(
      map((mensajes:Chat[]) => {
        this.chats = [];
        for(let mensaje of mensajes){
          this.chats.unshift(mensaje);
        }
      })
    );
  }
  
  public addChat( texto: string): Promise<DocumentReference<Chat>>{
    let chat: Chat = {
      uid: this.usuario.uid,
      nombre: this.usuario.nombre,
      mensaje: texto,
      fecha: new Date().getTime()
    };
    
    return this.itemsCollection.add(chat);
  }

  public login(proveedor: string) {
    if(proveedor === 'google') this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    else if(proveedor === 'twitter') this.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
  }
  public logout() {
    this.usuario = {};
    this.auth.signOut();
  }

}
