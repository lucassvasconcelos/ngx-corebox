import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'corebox-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  appsIsOpen: boolean = false;

  openMenu() {
  }
}
