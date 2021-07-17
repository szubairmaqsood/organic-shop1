import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './components/sign-up/sign-up.component';




@NgModule({
  declarations: [
    BsNavbarComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CoreModule { }
