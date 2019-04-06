/*Model for contact */
export class Contact {
  _id: string;
  firstname: string;
  lastname: string;
  phonenumber: string;
  email: string;
  constructor(firstname: string, lastname: string, phonenumber: string, email: string) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.phonenumber = phonenumber;
    this.email = email;
  }
}
