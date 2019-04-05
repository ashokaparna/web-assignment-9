import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() open: EventEmitter<any> = new EventEmitter();

  constructor() { }

  showAddContactForm() {
    this.open.emit(null);
  }

  ngOnInit() {
  }

}
