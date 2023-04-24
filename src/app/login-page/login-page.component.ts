import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{
  title : String = "STUDENT MANAGEMENT SYSTEM";
  username = '';
  password = '';
  invalidLogin = false;
  message='';

  visible:boolean = true;
  changetype:boolean = true;

  constructor(private router: Router, private loginservice: AuthenticationService) { }

  ngOnInit() : void{
  }

  /* This method is called when clicking on login button.
     if username and password is matched, successfully navigates to studemt list page.
     Else, shows Invalid login message.*/
  checkLogin(){
    if(this.loginservice.authenticate(this.username, this.password)){
      this.router.navigate(['students']);
      console.log("navigate....");
      this.invalidLogin = false;
    }
    else{
      this.invalidLogin = true;
      this.message = 'Invalid Username or Password!';
    }
  }

  /* When eye icon is clicked to view password,
  it is toggled to eye-slash icon and password is visible */
  viewpass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }
  

}
