import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private url = 'api/user/'
  constructor(private http: HttpClient) { }

  findAllUser(): Observable <User[]>{
    return this.http.get<User[]>(`${this.url}`);
  }
}
