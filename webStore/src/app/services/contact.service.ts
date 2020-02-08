import { Injectable } from '@angular/core';
import { IContact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contactList: IContact[] = [];

  constructor() { }

  addToContactList(contact: IContact) {
    //push into contactList
    this.contactList.push(contact);

    //console log
    console.log(this.contactList);
  }
}
