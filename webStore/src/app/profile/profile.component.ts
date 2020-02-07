import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  //tabs
  tabs = true;

  constructor() { }

  ngOnInit() {
  }

  profileTabClick(){
    this.tabs = true;
  }

  orderTabClick(){
    this.tabs = false;
  }

  updateProfile(first: string, last: string, email: string, password: string){
    alert('update profile functionality coming soon');
  }

}
