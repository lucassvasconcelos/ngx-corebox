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
  submenuSelecionado?: MenuItem;

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
    this.submenuSelecionado = undefined;

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

  selecionarSubMenuMenu(submenu: MenuItem): void {
    if (this.submenuSelecionado) {
      if (this.submenuSelecionado === submenu) {
        this.submenuSelecionado.opened = !this.submenuSelecionado.opened;
      } else {
        this.submenuSelecionado.opened = false;
        this.submenuSelecionado = submenu;
        this.submenuSelecionado.opened = true;
      }
    } else {
      this.submenuSelecionado = submenu;
      this.submenuSelecionado.opened = true;
    }
  }

}
