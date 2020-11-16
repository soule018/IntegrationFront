import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User =new User();
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

    console.log(this.user.name)
  }
enregistrer(){
  if(this.user != null){
    this.userService.createUser(this.user).subscribe((data) =>{
      console.log(data)
    })
this.user= new User();
this.router.navigate(['/']);

  }
}
}
