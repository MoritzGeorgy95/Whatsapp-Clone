import { Component } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  constructor(private firestore: Firestore) { }

  message: string= '';


  sendMessage() {
    
  }
}
