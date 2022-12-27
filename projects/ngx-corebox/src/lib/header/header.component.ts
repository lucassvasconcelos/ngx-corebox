import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProfileOptions } from '../types/profile-options';

@Component({
  selector: 'corebox-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Input() pathToAvatarImage: string = '';
  @Input() profileOptions: ProfileOptions = new ProfileOptions();

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
    return this.profileOptions.profileLabel?.length > 0;
  }

  abrirMeuPerfil = (): void => {
    location.href = this.profileOptions.profileUrl;
  }

  desconectar = (): void => {
    location.href = this.profileOptions.logoutUrl;
  }


}
