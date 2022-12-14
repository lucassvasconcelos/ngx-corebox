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
  submenuAberto = false;
  menuClicado = false;

  ngOnInit(): void {
    let itens = this.menuItems.filter(menu => menu.opened);

    if (itens.length > 0) {
      itens.forEach(item => item.opened = false);
      itens[0].opened = true;
      this.menuSelecionado = itens[0];
    }

    document.body.onclick = () => {
      if (this.menuIsOpen && this.menuSelecionado && !this.menuClicado && this.menuSelecionado.opened) {
        this.menuSelecionado.opened = false;
      }
      this.menuClicado = false;
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
    this.menuClicado = true;

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
    this.menuClicado = true;

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
    if (this.menuIsOpen && this.menuSelecionado)
      this.menuSelecionado.opened = false;
  }

}
