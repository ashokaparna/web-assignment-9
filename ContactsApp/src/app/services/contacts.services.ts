import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Contact } from './../models/contact';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class ContactsServices{
  contactResource: string;
  contactResourceURL: string;

  /**
   * Constructor.
   */
  constructor(private http: HttpClient) {
    this.contactResource = 'contacts';
    this.contactResourceURL = `${environment.serverBaseURL}/${this.contactResource}`;
  }

  /**
   * Returns all stickies.
   *
   * @return {Observable<Array<Contact>>} {Observable sticky array of contacts}
   */
  getContactList(): Observable<Array<Contact>> {
    return this.http.get<Array<Contact>>(this.contactResourceURL);
  }

  /**
   * Creates new contact.
   *
   * @param  {Contact} contact: Contact {new contact object}
   * @return {Observable<Contact>} {Observable for saved contact object}
   */
  createContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.contactResourceURL, contact);
  }
  /**
   * Get contact details.
   *
   * @param  {string} id: string {id of contact object}
   * @return {Observable<Contact>} {Observable for contact object}
   */
  getContactDetails(id: string): Observable<Contact> {
    return this.http.get<Contact>(this.contactResourceURL + id);
  }
}

