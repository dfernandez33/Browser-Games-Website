import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

// styling modules
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SharedBootstrapModule } from './shared-bootstrap-module';

// common components
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';

// game components
import { SnakeComponent } from './games/snake/snake.component';

// firebase modules
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyAzbAjwZPiESm1_YXMXCL5-VJhrvsRy24E',
  authDomain: 'games-corner-d1f77.firebaseapp.com',
  databaseURL: 'https://games-corner-d1f77.firebaseio.com',
  projectId: 'games-corner-d1f77',
  storageBucket: 'games-corner-d1f77.appspot.com',
  messagingSenderId: '532717367672'
};

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'play-snake', component: SnakeComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    SnakeComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    SharedBootstrapModule,
    BrowserModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
