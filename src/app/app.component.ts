import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//app component is the root component of any angular project.
//here, constructor of this class is created with paramters of router and authentication service
//confirmLogout method is created to show popup and get confirmation for logging out
export class AppComponent implements OnInit{
  title = 'Shiners Learning Zone';
  
  constructor(public loginService : AuthenticationService, private router: Router) { }

  ngOnInit(){

  }

  confirmLogout(){
    var status= confirm("Are You surely want to log out ? ");
    if (status==true) {
      this.router.navigate(['logout']);
    }
  }
}
