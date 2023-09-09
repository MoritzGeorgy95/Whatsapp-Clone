import { Component } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from '@angular/fire/auth';

import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide: boolean = true;
  email: string;
  password: string;
  userName: string;
  signupMode: boolean = false;
  signUpSuccess: boolean = false;

constructor(private auth: Auth, private userService: UserService, private router: Router) {

}  

/**
   * Performs a signup by creating a new user with the provided email and password,
   * updates the user's profile with the entered username, connects to the database,
   * and navigates to the dashboard.
   */
async signUp() {
 
    const credential = await createUserWithEmailAndPassword(
      this.auth,
      this.email,
      this.password
    );
    const user = credential.user;
    if (user) {

      await updateProfile(user, { displayName: this.userName });


      this.userService.addNewUserAccountToDatabase(user.displayName!)

      this.signUpSuccess = true;
      

    }
    
}

async login() {
  await signInWithEmailAndPassword(this.auth, this.email, this.password);

  const user = this.auth.currentUser;

  if(user) {
    this.userService.currentlyLoggedInUser= user.displayName!
    this.userService.setDataStream(this.userService.currentlyLoggedInUser)

    this.router.navigateByUrl('');

  }

  else {
    alert('no success')
  }


}

}
