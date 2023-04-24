import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  username = '';
  email = '';
  message='';

  constructor(private router: Router){}
  ngOnInit(){
    
  }

  //this method is written, so that when user is clicking send, it'll show a popup of successfully sent message 
  mailSentConfirmation() {
    if((this.username === '') || (this.email === '') || (this.message === '')){
      let status = confirm("Please fill all fields...");
      if((status == true) || (status === false)){
        this.router.navigate(['contact']);
      }
    }
    else{
      var status = confirm("Mail sent successfully!!! click OK to go to home page.");
      if (status == true) {
        console.log("Mail sent......");
        this.router.navigate(['home']);
      }
    }
  }
}
