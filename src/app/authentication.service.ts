import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

//authentication service is created to have methods to check for valid login and logout and 
//to perform session Storage set & remove item function
export class AuthenticationService {
    constructor() { }

    //This method is called to check for matching credentials entered
    authenticate(username : any, password : any){
        if(username === "Meena2" && password === "Shiva@02"){
            sessionStorage.setItem('username', username)
            return true;
        }
        else{
            return false;
        }
    }

    // if a user logged in successfully , session storage is created and username is stored.
    isUserLoggedIn(){
        let user = sessionStorage.getItem('username')
        console.log(!(user === null))
        return !(user === null)
    }

    // when log out component gets called, this method removes session storage username.
    logOut(){
        sessionStorage.removeItem('username')
    }
}