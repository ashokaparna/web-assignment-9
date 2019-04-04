import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '.././models/contact';

import {ContactsServices} from '.././services/contacts.services';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.scss']
})
export class ContactlistComponent implements OnInit {
  @Input() contactList: Array<Contact>;
  contactService: ContactsServices;

  constructor(contactService: ContactsServices) {
    this.contactService = contactService;
  }

  // createSticky() {
  //   let newSticky$: Observable<Sticky> = this.stickyService.createSticky();
  //   newSticky$.subscribe(newSticky => {
  //     this.stickiesChild.push(newSticky);
  //   });
  // }

  ngOnInit() {
  }

}
