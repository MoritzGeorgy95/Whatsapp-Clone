import { Injectable } from '@angular/core';
import {
	DocumentReference,
	Firestore,
	doc,
	docData,
	getDoc,
	setDoc,
  collection,
  collectionData
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private firestore: Firestore) {
  }
  
  async getUserData() {
   const city= 'cities/LA';
   const docReference= doc(this.firestore, city);
   const snapShot= await getDoc(docReference);

        

   

  }

  addUserData() {

    

  }

}
