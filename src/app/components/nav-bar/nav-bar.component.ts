import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { IUser } from '../../interface/iuser';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public navbarOpen = false;
  public isLoggedIn: boolean;
  public user: IUser;


  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private userService: UserService, private ref: ChangeDetectorRef, private loginService: LoginService) {
    if (this.userService.isLoggedIn()) {
      this.userService.getUserInfo().subscribe(
        (user) => {
          this.isLoggedIn = true;
          this.user = user;
          this.ref.detectChanges();
        }
      );
    }
   }

  ngOnInit() { }

  toggleNavBar() {
    this.navbarOpen = !this.navbarOpen;
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  logOut() {
    this.router.onSameUrlNavigation = 'reload';
    this.loginService.logOut().then(
      () => {
        this.isLoggedIn = false;
        this.user = undefined;
        if (!this.router.navigated) {
          this.ref.detectChanges();
        }
      }
    );
  }
}
