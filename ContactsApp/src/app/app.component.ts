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
  contact: Contact;
  isContactFormVisible = false;
  contacts: Array<Contact>;
  isContactDetailFormVisible = false;
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
  updateList() {
    this.toggleAddContactForm();
    this.getAllContacts();
  }
  getContactDetail(id) {
    this.contactService.getContactDetails(id)
      .subscribe(contact => {
          this.showContactDetailsView(contact);
      });
  }
  showContactDetailsView(contact) {
    this.isContactFormVisible = false;
    if (this.isContactDetailFormVisible === false) {
      this.isContactDetailFormVisible = true;
    }
    this.contact = contact;
  }
  closeDetailView(){
    this.isContactDetailFormVisible = false;
  }

}
