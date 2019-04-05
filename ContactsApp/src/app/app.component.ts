import { Component } from '@angular/core';
import {ContactsServices} from './services/contacts.services';
import { Contact } from './models/contact';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ContactsApp';
  isContactFormVisible = false;

  contacts: Array<Contact>;

  constructor(private contactService: ContactsServices) {
    this.getAllContacts();
  }
  toggleAddContactForm() {
    this.isContactFormVisible = !this.isContactFormVisible;
  }
  getAllContacts() {
    const contactLists$: Observable<Array<Contact>> = this.contactService.getContactList();
    contactLists$.subscribe(contacts => {
      this.contacts = contacts;
    });
  }
  updateList(){
    this.toggleAddContactForm();
    this.getAllContacts();
  }
}
