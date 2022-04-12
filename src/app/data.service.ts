import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from './register-form/register-form.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http:HttpClient) { }
  getFunction(data:Register):Observable<any>{
    return this.http.post("http://localhost:8080/saveEmp",data);
  }
}


