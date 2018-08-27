import { Injectable } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { FileItem } from '../models/file-items';

import * as firebase from 'firebase'

@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {

  private CARPETA_IMAGENES = 'img'
  constructor(private db: AngularFirestore) { }

  cargarImagenesFirebase(imagenes: FileItem[]) {
    console.log(`in`)
    const storageRef = firebase.storage().ref()
    for (const item of imagenes) {
      item.estaSubiendo = true
      if (item.progreso >= 100) {
        continue
      }
      const uploadTask: firebase.storage.UploadTask = storageRef.child(`${this.CARPETA_IMAGENES}/${item.nombreArchivo}`)
        .put(item.archivo)
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot: firebase.storage.UploadTaskSnapshot) => { item.progreso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100 }, (err) => {
          console.log(`Error al subir`)
        },
        () => {
          console.log(`Imagen cargada correctamente`)
          var that = this
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            console.log('File available at', downloadURL);
            item.estaSubiendo = false
            console.log(that)
            that.guardarImagen({
              nombre: item.nombreArchivo,
              url: downloadURL
            })
          });
          //item.url = uploadTask.snapshot.ref.getDownloadURL

        }
      )
    }
  }

  private guardarImagen(imagen: { nombre: string, url: string }) {
    this.db.collection(`/${this.CARPETA_IMAGENES}`)
      .add(imagen)
  }
}
