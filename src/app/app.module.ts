import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SnakeComponent } from './games/snake/snake.component';

import { SharedBootstrapModule } from './shared-bootstrap-module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
  declarations: [
    AppComponent,
    SnakeComponent,
    NavBarComponent
  ],
  imports: [
    SharedBootstrapModule,
    BrowserModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
