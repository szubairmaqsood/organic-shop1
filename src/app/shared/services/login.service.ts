import { Injectable } from '@angular/core';
import { Users } from './../models/users';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  isUserValid(user:Users):boolean{
     return true;
  }
}
