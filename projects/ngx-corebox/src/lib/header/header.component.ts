import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'corebox-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Input() sessionName: string = '';
  @Input() pathToAvatarImage: string = '';
  @Input() companyName: string = '';

  appsIsOpen: boolean = false;
  sessionIsOpen: boolean = false;

  @Output() openMenuEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.toogleMenu();
  }

  toogleMenu() {
    const menuIsOpen = document.querySelectorAll('.closed').length === 0
      && document.querySelectorAll('.opened').length === 0;
    this.openMenuEvent.emit(menuIsOpen);
  }


}
