import { Component, OnInit } from '@angular/core';
import { KanbanAPIServiceService} from '../kanban-apiservice.service';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-my-user',
  templateUrl: './my-user.component.html',
  styleUrls: ['./my-user.component.css'],
  providers: [KanbanAPIServiceService]

})
export class MyUserComponent implements OnInit {
  id: string;
  selectedUseId: string;
  searchUserName = '';


  myUser : User[]= [];

  constructor(private userService : UserService) { 
    
  }

  ngOnInit(): void {
    this.userService.findAllUser().subscribe((data)=>{
      this.myUser= data;
      console.log(this.myUser)
      });

    /*
    this.kanbanService.getUser();*/
  }

 go(){
   console.log(this.selectedUseId)
 }

}
