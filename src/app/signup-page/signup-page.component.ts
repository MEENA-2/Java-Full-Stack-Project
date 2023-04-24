import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  confirmPass = '';

  invalidLogin = false;

  constructor(private router: Router) { }

  ngOnInit(){
    
  }

  visiblePass:boolean = true;
  changeType:boolean = true;

  /* This method is called to toggle the password icon to see password*/
  viewPass(){
    this.visiblePass = !this.visiblePass;
    this.changeType = !this.changeType;
  }

  /* When clicking on register,  if all fields are filled, then pops up successful registration
     If not, pop up alerts to fill all details.*/
  successPopUp(){
    if((this.firstName === '') || (this.lastName === '') || (this.email === '') || (this.password === '') 
    || (this.confirmPass === '')){
      let status = confirm("Please fill all fields...");
      if((status == true) || (status === false)){
        this.router.navigate(['signup']);
      }
    }
    else{
      if(this.password === this.confirmPass){
        var status = confirm(" You have been Registered Successfully... Now login to continue...");
        if(status == true){
          this.router.navigate(['login']);
        }
        else{
          this.router.navigate(['signup']);
        }
      }
      else{
        let value = alert("Password should be matched!");
        console.log(value);
      }
    }
  }
}
