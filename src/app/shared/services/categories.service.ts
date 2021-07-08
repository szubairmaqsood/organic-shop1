import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Category } from './../models/category';
import {HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private apiUrl = "http://localhost:8081/api/categories";
  constructor(private http:HttpClient) { }

  getAll():Observable<Category[]>{
    const url = this.apiUrl + "/list"
    return this.http.get<Category[]>(url);

  }
}
