import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-my-user',
  templateUrl: './my-user.component.html',
  styleUrls: ['./my-user.component.css']
})
export class MyUserComponent implements OnInit {
  id: string;
  selectedUseId: string;


  myUser : User[]= [];

  constructor() { 
    this.myUser.push(new User('1','diallo'));
    this.myUser.push(new User('2','alpha'));
    this.myUser.push(new User('3','barry'));
    this.myUser.push(new User('4','sow'));
    this.myUser.push(new User('5','balde'));
  }

  ngOnInit(): void {
  }

}
