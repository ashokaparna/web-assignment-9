import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Contact } from '.././models/contact';

import {ContactsServices} from '.././services/contacts.services';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.scss']
})
export class ContactlistComponent implements OnInit {
  @Input() contactList: Array<Contact>;
  @Output() showContactDetail = new EventEmitter();
  contactService: ContactsServices;
  constructor(contactService: ContactsServices) {
    this.contactService = contactService;
  }
  fetchContactById(id) {
    this.showContactDetail.emit(id);
  }

  ngOnInit() {
  }

}
