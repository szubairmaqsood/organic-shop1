import { Injectable } from '@angular/core';
import { Users } from './../models/users';
import { Observable,of } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  isUserValid(user:Users):boolean{
     return true;
  }
}
