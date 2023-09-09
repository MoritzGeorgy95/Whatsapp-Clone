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

import { Observable, BehaviorSubject } from 'rxjs';
import { onSnapshot } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userDataSubject = new BehaviorSubject<any>(null);
  currentlyLoggedInUser:string;
  userData$: Observable<any> = this.userDataSubject.asObservable();
  userData:any;
  currentConvo:Array<any>;

  constructor(private firestore: Firestore) {
  }
  
  setDataStream(loggedInUser: string) {
   const docReference= doc(this.firestore, 'user', loggedInUser);
  

    onSnapshot(docReference, (doc)=> {
      this.userDataSubject.next(doc.data());

      this.userData$.subscribe((data)=> {
        this.userData= data;
        this.currentConvo= data.contacts[0].convo;
      })

    })

  }

  async updateUserData() {

  }

  addNewUserAccountToDatabase(userName:string) {

    setDoc(doc(this.firestore, 'user', userName), {personalData: {name: userName, status: 'online'}, contacts: [{name: '', convo: [{messageText: '', hasSent: false}]}]})

  }


}
