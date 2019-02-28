import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user : Observable<User[]>

  constructor(private userService : UserService,private router : Router) {
    this.user = userService.getUsers();
   }
   login(uname) {
     localStorage.setItem("uname",uname);
     this.router.navigate(["/Login"]);
   }

  ngOnInit() {
  }

}
