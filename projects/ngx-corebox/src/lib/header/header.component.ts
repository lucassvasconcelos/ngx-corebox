import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'corebox-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Input() sessionName: string = '';
  @Input() pathToAvatarImage: string = '';
  @Input() companyName: string = '';
  @Input() profileLink: string = '';
  @Input() logoutLink: string = '';

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

  informouProfile = (): boolean => {
    return this.profileLink.length > 0;
  }

  abrirMeuPerfil = (): void => {
    location.href = this.profileLink;
  }

  desconectar = (): void => {
    location.href = this.logoutLink;
  }


}
