import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import {ContactsServices} from './services/contacts.services';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { NavbarComponent } from './navbar/navbar.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ContactlistComponent,
    AddcontactComponent,
    NavbarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ContactsServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
