import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { isMobile } from '../utils/mobile/mobile.check';

@Component({
  selector: 'corebox-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  menuIsOpen: boolean = !isMobile();
  appsIsOpen: boolean = false;

  @Output() menuOpened: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() appsOpened: EventEmitter<boolean> = new EventEmitter<boolean>();

  openMenu() {
    this.menuIsOpen = !this.menuIsOpen;
    this.menuOpened.emit(this.menuIsOpen);
  }

  openApps() {
    this.appsIsOpen = !this.appsIsOpen;
    this.appsOpened.emit(this.appsIsOpen);
  }
}
