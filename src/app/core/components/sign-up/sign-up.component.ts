import { Component, OnInit } from '@angular/core';
import { Title as title } from '@angular/platform-browser';
import { Users } from 'src/app/shared/models/users';
import { SignUpService } from 'src/app/shared/services/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  newTitle: string = 'Organic Shop - Sign Up';
  user: Users = new Users();
  message:string;

  constructor(
    private titleService: title,
    private signUpService: SignUpService
  ) {
    this.titleService.setTitle(this.newTitle);
    this.message ="bye";
    //this.signUpService.Dummy().subscribe((m) => this.message = m)
  }

  ngOnInit(): void {
    //this.signUpService.Dummy().subscribe((m) => this.message = m)
   // alert(this.message);
  }

  onSubmit() {
    //console.log(this.user);
    //this.signUpService.Dummy().subscribe((m) => this.message = m)
    console.log(this.signUpService.Register(this.user).subscribe());
    
  }
}
