import { Component, Input } from '@angular/core';
import { MenuItem } from '../types/menu-item';

@Component({
  selector: 'corebox-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input() menuIsOpen: boolean = false;
  @Input() menuItems: MenuItem[] = [];
}
