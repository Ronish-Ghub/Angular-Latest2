import { Injectable } from '@angular/core';
import {Home} from './home'
import {AngularFirestore} from '@angular/fire/firestore'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private store:AngularFirestore) { }
  saveUser(home:Home){
    console.log(home)
    this.store.collection("users").add({...home})
  }
  readUser(){
    return this.store.collection("users").snapshotChanges()
  }
  editUser(home:Home){
    this.store.doc("users/").update(home)
  }
  deleteUser(home:Home){
    this.store.doc("users/"+home.id).delete()
  }
}
