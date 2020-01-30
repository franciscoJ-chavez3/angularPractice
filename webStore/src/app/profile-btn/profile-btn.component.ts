import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-btn',
  templateUrl: './profile-btn.component.html',
  styleUrls: ['./profile-btn.component.scss']
})
export class ProfileBtnComponent implements OnInit {
  inOut = true;
  constructor() { }

  ngOnInit() {
  }

  toggleInOut() {
    this.inOut = !this.inOut;
    console.log(this.inOut);
  }

}
