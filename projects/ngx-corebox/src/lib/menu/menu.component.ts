import { Component, Input } from '@angular/core';
import { MenuItem } from '../types/menu-item';
import { isMobile } from '../utils/mobile/mobile.check';

@Component({
  selector: 'corebox-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input() menuIsOpen: boolean = false;
  @Input() menuItems: MenuItem[] = [];
  @Input() mainColor: string = '#470066';
  @Input() secondaryColor: string = '#8a2be2';

  public ehDesktop(): boolean {
    return !isMobile();
  }

}
