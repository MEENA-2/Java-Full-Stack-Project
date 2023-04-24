import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

//this class has confirm service method to navigate to services when its clicked.
export class AboutComponent implements OnInit{

  constructor(public loginServ : AuthenticationService, private router: Router) { }

  ngOnInit(){

  }

  /* when this method is called, if a user is logged in already, then navigates to student list.
    if not, then takes to login page first */
  confirmService(){
    if(this.loginServ.isUserLoggedIn()){
      console.log("logged in already....");
      this.router.navigate(['students']);
    }
    else{
      var status= confirm("Do login first, to see our services... ");
      if (status==true) {
        this.router.navigate(['login']);
      }
      else{
        this.router.navigate(['about']);
      }
    }
  }
  
}
