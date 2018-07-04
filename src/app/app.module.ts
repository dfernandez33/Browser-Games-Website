import {Routes, RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SnakeComponent } from './games/snake/snake.component';

import { SharedBootstrapModule } from './shared-bootstrap-module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'play-snake', component: SnakeComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    SnakeComponent,
    NavBarComponent,
    HomeComponent
  ],
  imports: [
    SharedBootstrapModule,
    BrowserModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
