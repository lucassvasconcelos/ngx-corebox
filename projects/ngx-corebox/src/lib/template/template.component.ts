import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { AppItem } from '../types/app-item';
import { MenuItem } from '../types/menu-item';
import { MenuOptions } from '../types/menu-options';
import { ProfileOptions } from '../types/profile-options';
import { Theme } from '../types/theme';

@Component({
  selector: 'corebox-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TemplateComponent implements OnInit {

  @Input() themes: Theme[] = [];

  @Input() pathToAvatarImage: string = '';
  @Input() menuItems: MenuItem[] = [];
  @Input() appItems: AppItem[] = [];
  @Input() darkMode: boolean = false;

  @Input() menuOptions: MenuOptions = new MenuOptions();
  @Input() profileOptions: ProfileOptions = new ProfileOptions();

  menuIsOpen: boolean = true;
  appsIsOpen: boolean = false;

  ngOnInit(): void {
    let theme = this.themes.filter(theme => theme.selected)[0];
    document.documentElement.style.setProperty('--main-color', theme.primaryColor);
    document.documentElement.style.setProperty('--secondary-color', theme.secondaryColor);
    document.documentElement.style.setProperty('--desktop-menu-color', theme.menu.backgroundColor);
    document.documentElement.style.setProperty('--mobile-menu-color', 'red');
    document.documentElement.style.setProperty('--content-color', theme.backgroundColor);
    // document.documentElement.style.setProperty('--default-text-color', theme.font.color);
    document.documentElement.style.setProperty('--text-color-on-main', theme.menu.backgroundColor);
    document.documentElement.style.setProperty('--text-color-on-menu', theme.menu.fontColor);
  }

  obterOpcoesDeMenu = (): MenuOptions => {
    let theme = this.themes.filter(theme => theme.selected)[0];
    return {
      backgroundImage: theme.backgroundImage,
      logotipo: theme.logotipo,
      logotipoMobile: theme.logotipoMobile
    } as MenuOptions;
  }

  appsOpened($event: boolean): void {
    this.appsIsOpen = $event;
  }

  menuOpened($event: boolean): void {
    this.menuIsOpen = $event;
  }

  useMenuClosedClass(): boolean {
    return this.menuIsOpen && window.innerWidth > 1280;
  }

  useMenuOpenedClass(): boolean {
    return this.menuIsOpen && window.innerWidth <= 1280;
  }

  alterarEstadoDoMenu(opened: boolean): void {
    this.menuIsOpen = opened;
  }

  ehVisaoMobile = (): boolean => {
    return window.innerWidth <= 1280;
  }
}