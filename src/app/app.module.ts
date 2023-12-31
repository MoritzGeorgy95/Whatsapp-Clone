import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChatComponent } from './chat/chat.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

// Firebase
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';

import { firebaseConfig } from '../environments/environment';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './login/login.component';
import { GuiComponent } from './gui/gui.component';
import { provideAuth, getAuth } from '@angular/fire/auth';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ChatComponent,
    LoginComponent,
    GuiComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
