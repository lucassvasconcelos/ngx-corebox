import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProfileOptions } from '../types/profile-options';

@Component({
  selector: 'corebox-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Input() profileOptions: ProfileOptions = new ProfileOptions();

  appsIsOpen: boolean = false;
  sessionIsOpen: boolean = false;
  pressionouBotao = false;

  @Output() openMenuEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() appsOpened: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.toogleMenu();

    document.body.onclick = (): void => {
      if (!this.pressionouBotao) {
        this.toogleMenuProfile(false);
      } else {
        this.pressionouBotao = false;
      }
    }
  }

  toogleMenuProfile = (pressionouBotao: boolean): void => {
    this.pressionouBotao = pressionouBotao;
    if (pressionouBotao) {
      this.sessionIsOpen = !this.sessionIsOpen;
      if (window.innerWidth <= 1280)
        this.openMenuEvent.emit(false);
    } else {
      this.sessionIsOpen = false;
    }
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

  openApps() {
    this.appsIsOpen = !this.appsIsOpen;
  }

  ehVisaoMobile = (): boolean => {
    return window.innerWidth <= 1280;
  }


}
