import { Component } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  constructor( public userService: UserService) { }

  message: string= '';

  sendMessage() {
    this.userService.getUserData()
  }
}
