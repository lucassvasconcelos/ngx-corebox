import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppItem } from '../types/app-item';
import { ProfileOptions } from '../types/profile-options';

@Component({
  selector: 'corebox-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Input() profileOptions?: ProfileOptions;
  @Input() appItems: AppItem[] = [];

  appsIsOpen: boolean = false;
  sessionIsOpen: boolean = false;
  pressionouBotaoMenuProfile = false;
  pressionouBotaoMenuApps = false;

  @Output() openMenuEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() appsOpenedEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.toogleMenu();

    document.body.onclick = (): void => {
      if (!this.pressionouBotaoMenuProfile) {
        this.toogleMenuProfile(false);
      } else {
        this.pressionouBotaoMenuProfile = false;
      }

      if (!this.pressionouBotaoMenuApps) {
        this.toogleMenuApps(false);
      } else {
        this.pressionouBotaoMenuApps = false;
      }
    }
  }

  toogleMenuProfile = (pressionouBotao: boolean): void => {
    this.pressionouBotaoMenuProfile = pressionouBotao;
    if (pressionouBotao) {
      this.sessionIsOpen = !this.sessionIsOpen;
      if (window.innerWidth <= 1280)
        this.openMenuEvent.emit(false);
    } else {
      this.sessionIsOpen = false;
    }
  }

  toogleMenuApps = (pressionouBotao: boolean): void => {
    this.pressionouBotaoMenuApps = pressionouBotao;
    if (pressionouBotao) {
      this.appsIsOpen = !this.appsIsOpen;
      if (window.innerWidth <= 1280)
        this.appsOpenedEvent.emit(false);
    } else {
      this.appsIsOpen = false;
    }
  }

  toogleMenu() {
    const menuIsOpen = document.querySelectorAll('.closed').length === 0
      && document.querySelectorAll('.opened').length === 0;
    this.openMenuEvent.emit(menuIsOpen);
  }

  informouProfile = (): boolean => {
      return (this.profileOptions?.profileLabel?.length ?? 0) > 0;
  }

  abrirMeuPerfil = (): void => {
    location.href = this.profileOptions?.profileUrl ?? '';
  }

  desconectar = (): void => {
    location.href = this.profileOptions?.logoutUrl ?? '';
  }

  openApps() {
    this.appsIsOpen = !this.appsIsOpen;
    this.appsOpenedEvent.emit(this.appsIsOpen);
  }

  ehVisaoMobile = (): boolean => {
    return window.innerWidth <= 1280;
  }

  navegar = (url: string): void => {
    location.href = url;
  }

  fecharSubmenu = (): void => {
    if (!this.ehVisaoMobile()) {
      let divSubmenu = document.getElementById('submenu');
      if (divSubmenu) {
        divSubmenu.style.display = 'none';
      }
    }
  }

}
