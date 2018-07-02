import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  navbarOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleNavBar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
