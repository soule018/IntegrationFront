import { Component, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User =new User();
  constructor() { }

  ngOnInit(): void {
  }

}
