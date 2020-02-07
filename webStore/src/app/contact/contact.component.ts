import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  contactMsg(first: string, last: string, email: string, subject: string, message:string) {
    alert('Thank you for your feedback ' + first + ' ' + last + '. We will respond to your query as soon as possible.');
  }

}
