import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ContactsServices} from '../services/contacts.services';
import {Contact} from "../models/contact";

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.scss']
})
export class AddcontactComponent implements OnInit {
  //contactService: ContactsServices;
  @Output() listUpdated = new EventEmitter();
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  isFirstNameValid = true;
  isLastNameValid = true;
  isPhoneNumberEmpty = true;
  isPhoneNumberValid = true;
  isEmailIdValid = true;
  phonenoRegex = new RegExp('^\d{10}$') ;
  emailRegex = new RegExp('^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$');
  constructor(private contactService: ContactsServices) {
   // this.contactService = contactService;
  }

  ngOnInit() {
  }
  submitClick() {
    if (this.isFormValid()) {
      const newContact = new Contact(this.firstName, this.lastName, this.phoneNumber, this.email) ;
      this.contactService.createContact(newContact)
      .subscribe((result: any) => {

        this.listUpdated.emit(null);
      },  (error: any) => {
      });
    }
  }
  isFormValid(): boolean {
    if (this.firstName === '' || this.firstName == null) {
      this.isFirstNameValid = false;
      return false;
    }
    if (this.lastName === '' || this.lastName == null) {
      this.isLastNameValid = false;
      return false;
    }
    if (this.phoneNumber === '' || this.phoneNumber == null) {
      this.isPhoneNumberEmpty = false;
      return false;
    }
    // if (!this.phonenoRegex.test(this.phoneNumber)) {
    //   this.isPhoneNumberValid = false;
    //   return false;
    // }
    // if (!this.emailRegex.test(this.email)) {
    //   this.isEmailIdValid = false;
    //   return false;
    // }
    return true;
  }
}
