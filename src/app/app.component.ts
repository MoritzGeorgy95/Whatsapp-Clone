import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Whatsapp-Clone';

  constructor(private userService: UserService) {

  }


  ngOnInit() {
    this.userService.getUserData()
  }

  



}
