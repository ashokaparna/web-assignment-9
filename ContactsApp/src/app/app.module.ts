import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import {ContactsServices} from "./services/contacts.services";

@NgModule({
  declarations: [
    AppComponent,
    ContactlistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ContactsServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
