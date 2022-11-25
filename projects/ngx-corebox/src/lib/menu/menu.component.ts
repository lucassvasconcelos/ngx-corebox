import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../types/menu-item';
import { MenuOptions } from '../types/menu-options';

@Component({
  selector: 'corebox-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  @Input() menuIsOpen: boolean = false;
  @Input() menuItems: MenuItem[] = [];
  @Input() menuOptions: MenuOptions = new MenuOptions();

  menuSelecionado?: MenuItem;

  ngOnInit(): void {
    let itens = this.menuItems.filter(menu => menu.opened);
    
    if (itens.length > 0) {
      itens.forEach(item => item.opened = false);
      itens[0].opened = true;
      this.menuSelecionado = itens[0];
    }
  }

  useMenuClosedClass(): boolean {
    return this.menuIsOpen && window.innerWidth > 1280;
  }

  useMenuOpenedClass(): boolean {
    return this.menuIsOpen && window.innerWidth <= 1280;
  }

  getBackgroundImage(): string {
    return `url(${this.menuOptions.backgroundImage})`;
  }

  selecionarMenu(menu: MenuItem): void {
    if (this.menuSelecionado) {
      if (this.menuSelecionado === menu) {
        this.menuSelecionado.opened = !this.menuSelecionado.opened;
      } else {
        this.menuSelecionado.opened = false;
        this.menuSelecionado = menu;
        this.menuSelecionado.opened = true;
      }
    } else {
      this.menuSelecionado = menu;
      this.menuSelecionado.opened = true;
    }
  }

}
