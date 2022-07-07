import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'corebox-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuIsOpen: boolean = false;
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
