import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //create array to store users
  userList: IUser[] = [];

  constructor() { }

  checkUserEmail(email: string): boolean {
    //return true if email does not exist
    let bool = false;
    //search for user email in userList
    if (this.userList.find(x => email === x.userEmail)) {
      bool = true;
    }

    //check bool
    console.log(bool);

    //return result
    return bool;
  }

  addNewUser(firstName: string, lastName: string, email: string, password: string) {
    //pass paramaters into newUser obj
    const newUser: IUser = {
      userFirstName: firstName,
      userLastName: lastName,
      userEmail: email,
      userPassword: password
    };

    //push newUser into userList
    this.userList.push(newUser);

    //set to localStorage
    localStorage.setItem('users', JSON.stringify(this.userList));

    //console
    console.log(this.userList);
  }

  getUsersFromStorage() {
    //check if users exist
    if (JSON.parse(localStorage.getItem('users'))) {
      //set userList
      this.userList = JSON.parse(localStorage.getItem('users'));
      //console
      console.log(this.userList);
    }
  }
}
