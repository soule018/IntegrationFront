import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class KanbanAPIServiceService {

  constructor( private http:  HttpClient ) { 

 
  }

  getUser(): Observable <User[]>{
   return this.http.get<User[]>('http://localhost:8080/user/');
   
   /*getKanbans():Observable<Kanban[]>{
 return this.http.get<Kanban[]>(this.kanbansUrl);
}*/
   
   
   /*
     getUser(){
    this.http.get('http://localhost:8080/user/').subscribe((data) => 
    console.log(data));*/
 
}
}
