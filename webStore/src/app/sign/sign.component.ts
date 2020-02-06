import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {

  constructor(private us: UserService) { }

  ngOnInit() {
  }

  signIn(email: string, password: string) {
    //check if values are empty
    if (email.length < 1 || password.length < 1) {
      alert('fill out all fields');
    } else {
      //check if email & password exists in service
      if (this.us.checkUserEmail(email)) {
        alert('Your email checks out, you are now signed in');
      }
    }
  }
}
