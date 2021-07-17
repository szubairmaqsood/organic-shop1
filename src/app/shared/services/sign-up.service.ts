import { Injectable } from '@angular/core';
import { Users } from '../models/users';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin':'http://localhost:4200',
    
  }),
};

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  private apiUrl = 'http://localhost:8081/api/users';
  constructor(private http: HttpClient) {}

  Register(user: Users) {
    console.log(user);
    const url = this.apiUrl + '/add';
    return this.http.post<any>(
      url,
      {
        name: user.userName,
        email: user.email,
        password: user.password,
        role: 'user',
      },
      httpOptions
    );
  }

  Dummy(){
    const url = 'http://localhost:8081/api/users/dummy';
    return  this.http.get<string>(url);
  }
}
