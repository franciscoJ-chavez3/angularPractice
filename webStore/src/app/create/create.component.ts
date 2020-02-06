import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { UserService } from '../services/user.service';
import { IUser } from '../interfaces/user';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private ds: DataService, private us: UserService) {
    us.getUsersFromStorage();
  }

  ngOnInit() {
  }

  createAccount(firstName: string, lastName: string, email: string, password: string) {
    //check if values are empty
    if (firstName.length < 1 || lastName.length < 1 || email.length < 1 || password.length < 1) {
      alert('fill out all fields');
    } else {
      //check if email exists in service
      if (this.us.checkUserEmail(email)) {
        alert('user email already exists');
      } else {
        //pass new user info into service
        this.us.addNewUser(firstName, lastName, email, password);
      }
    }
  }

}
