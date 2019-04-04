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

  contacts: Array<Contact>;

  constructor(contactService: ContactsServices) {
    const contactLists$: Observable<Array<Contact>> = contactService.getContactList();
    contactLists$.subscribe(contacts => {
      this.contacts = contacts;
    });
  }
}
