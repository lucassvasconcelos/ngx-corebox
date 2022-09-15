import { Component, Input } from '@angular/core';
import { MenuItem } from '../types/menu-item';
import { isMobile } from '../utils/mobile/mobile.check';

@Component({
  selector: 'corebox-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  @Input() menuIsOpen: boolean = false;
  @Input() menuItems: MenuItem[] = [];

}
