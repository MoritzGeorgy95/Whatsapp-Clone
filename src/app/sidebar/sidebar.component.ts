import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  
  constructor(public us: UserService) {

  }
  
  openConvo(convo: Array<any>) {
      this.us.currentConvo= convo;
  }

}
