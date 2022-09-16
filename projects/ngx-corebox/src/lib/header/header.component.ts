import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'corebox-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  appsIsOpen: boolean = false;

  @Output() openMenuEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.toogleMenu();
  }

  toogleMenu() {
    const menuIsOpen = document.querySelectorAll('.closed').length === 0;
    this.openMenuEvent.emit(menuIsOpen);
  }
}
