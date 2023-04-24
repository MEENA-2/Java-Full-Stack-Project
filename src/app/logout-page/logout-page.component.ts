import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-logout-page',
  templateUrl: './logout-page.component.html',
  styleUrls: ['./logout-page.component.css']
})
export class LogoutPageComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) {

  }

  // whenever log out button pressed from any page, naviagtes to this component.
  // first executes ngOnit method and logout method in authentication service class is called.

  ngOnInit() {
    this.authenticationService.logOut();
    this.router.navigate(['logout']);
  }

}
