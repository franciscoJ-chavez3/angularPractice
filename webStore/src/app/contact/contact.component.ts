import { Component, OnInit } from '@angular/core';
import { IContact } from '../interfaces/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private cs: ContactService) { }

  ngOnInit() {
  }

  contactMsg(first: string, last: string, email: string, subject: string, message: string) {
    if (first.length < 1 || last.length < 1 || email.length < 1 || subject.length < 1 || message.length < 1) {
      alert('please enter values in all fields');
    } else {
      //put info into contact obj
      let newContact: IContact = {
        contactFirstName: first,
        contactLastName: last,
        contactEmail: email,
        contactSubject: subject,
        contactMsg: message
      };

      //push into contact service
      this.cs.addToContactList(newContact);

      //alert new contact has been recieved
      console.log('Thank you for your feedback ' + first + ' ' + last + '. We will respond to your query as soon as possible.');
    }
  }

}
