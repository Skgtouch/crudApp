import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users  = [];

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.getAllUser();
  }

  getAllUser(){
    this.userService.getAllUsers().subscribe(users => this.users = users);
  }

  deleteUser(id){
    this.userService.deleteUserById(id).subscribe(user =>{ console.log(user); this.getAllUser()})
  }

}
