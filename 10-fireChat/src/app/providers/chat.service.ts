import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Mensaje } from '../interface/chat.interface';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';



@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  public chats: Mensaje[] = []
  public usuario: any = {}
  constructor(private afs: AngularFirestore, public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe((user) => {
      console.log(`Estado del usuario `, user)
      if (!user) {
        return
      }
      this.usuario.nombre = user.displayName
      this.usuario.uid = user.uid
    })
  }

  login(proveedor: string) {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.usuario = {}
    this.afAuth.auth.signOut();
  }

  cargarMensaje() {
    this.itemsCollection = this.afs.collection<Mensaje>('chats',
      ref => ref.orderBy('fecha', 'desc').limit(5)
    );

    return this.itemsCollection.valueChanges().pipe(
      map((mensajes: Mensaje[]) => {
        this.chats = []
        for (let mensaje of mensajes) {
          this.chats.unshift(mensaje)
        }
        // this.chats = mensajes
      }))
  }
  agregarMensaje(texto: string) {
    let mensaje: Mensaje = {
      nombre: 'Erwin',
      mensaje: texto,
      fecha: new Date().getTime()
    }
    return this.itemsCollection.add(mensaje)
  }
}
