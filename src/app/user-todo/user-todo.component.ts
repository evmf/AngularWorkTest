import { Component, OnInit } from '@angular/core';
import { ToDoService, ToDosModel } from '../to-do.service';
import { UserModel, UserService } from '../user.service';

@Component({
  selector: 'app-user-todo',
  templateUrl: './user-todo.component.html',
  styleUrls: ['./user-todo.component.css']
})
export class UserTodoComponent implements OnInit {

  idInfo : any;
  selectedValue: any;
  listUser : UserModel[] = [];
  listToDo : ToDosModel[] = [];

  constructor(private serviceUser: UserService, private serviceToDo: ToDoService) { }

  ngOnInit(): void {
    this.listArrayUser();
    this.listArrayToDos();
  }

  //getting user list
  listArrayUser() {
    this.serviceUser.getUsers().subscribe(data => {
      this.listUser = data;
    });
   }

   //called when change of user in dropdown
   onUserChangeSelection( input : any ){
    this.idInfo = input.target.value;
    this.listArrayToDos();
   }

  //getting list with to do's for selected user
  listArrayToDos() {
    this.serviceToDo.getToDosForUser(this.idInfo).subscribe(data => {
      this.listToDo = data;
    });
  }

}
