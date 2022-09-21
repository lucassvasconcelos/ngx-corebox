import { Component, Input } from '@angular/core';
import { MenuItem } from '../types/menu-item';

@Component({
  selector: 'corebox-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  @Input() menuIsOpen: boolean = false;
  @Input() menuItems: MenuItem[] = [];

  useMenuClosedClass(): boolean {
    return this.menuIsOpen && window.innerWidth > 1280;
  }

  useMenuOpenedClass(): boolean {
    return this.menuIsOpen && window.innerWidth <= 1280;
  }

}
