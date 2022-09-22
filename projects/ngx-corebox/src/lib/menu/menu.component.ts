import { Component, Input } from '@angular/core';
import { MenuItem } from '../types/menu-item';
import { MenuOptions } from '../types/menu-options';

@Component({
  selector: 'corebox-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  @Input() menuIsOpen: boolean = false;
  @Input() menuItems: MenuItem[] = [];
  @Input() menuOptions: MenuOptions = new MenuOptions();

  useMenuClosedClass(): boolean {
    return this.menuIsOpen && window.innerWidth > 1280;
  }

  useMenuOpenedClass(): boolean {
    return this.menuIsOpen && window.innerWidth <= 1280;
  }

  getBackgroundImage(): string {
    return `url(${this.menuOptions.backgroundImage})`;
  }

}
