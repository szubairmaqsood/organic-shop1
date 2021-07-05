import { Component, OnInit } from '@angular/core';
import { Users } from './../../../shared/models/users';
import { LoginService } from './../../../shared/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:Users = new Users();
  userMessage:string = "";

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(){
   let userValidity:boolean = this.loginService.isUserValid(this.user);
   if(userValidity){
     this.userMessage ="Success";
   }else{
     this.userMessage = "Please check your Crdentials";
   }
  }

}
