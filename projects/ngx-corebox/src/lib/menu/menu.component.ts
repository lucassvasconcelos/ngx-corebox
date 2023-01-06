import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../types/menu-item';
import { MenuOptions } from '../types/menu-options';
import { navigate } from '../utils/navigate';

@Component({
  selector: 'corebox-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  @Input() menuIsOpen: boolean = false;
  @Input() menuItems: MenuItem[] = [];
  @Input() menuOptions: MenuOptions = new MenuOptions();

  @Output() alterarMenuEvent: EventEmitter<boolean> = new EventEmitter<boolean>;

  menuSelecionado?: MenuItem;
  submenuSelecionado?: MenuItem;
  submenuAberto = false;
  menuClicado = false;

  constructor(public router: Router) { }

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

  selecionarMenu(menu: MenuItem, i: number): void {
    this.menuClicado = true;

    if (this.menuSelecionado) {
      if (!this.menuSelecionado.children || this.menuSelecionado.children.length === 0) {
        this.submenuSelecionado = undefined
      }

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

    if (window.innerWidth <= 1280) {
      if (!this.menuSelecionado.children || this.menuSelecionado.children.length === 0) {
        this.alterarMenuEvent.emit(false);
      }
    }

    let navMenu = document.getElementById('nav-menu');
    if (navMenu?.className === 'nav-menu closed' && this.menuSelecionado.children && window.innerWidth >= 1280) {
      let divSubmenu = document.getElementById('submenu');
      let itemDemenu = document.getElementById(`menu_${i}`);
      if (divSubmenu && itemDemenu) {
        const posicoesDoItemDeMenu = itemDemenu.getBoundingClientRect();
        divSubmenu.style.display = 'block';
        divSubmenu.style.top = `${posicoesDoItemDeMenu.top}px`;
      }
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
    if (this.menuIsOpen && this.menuSelecionado) {
      this.menuSelecionado.opened = false;
    }

    if (this.menuSelecionado?.children && window.innerWidth >= 1280) {
      let divSubmenu = document.getElementById('submenu');
      if (divSubmenu) {
        divSubmenu.style.display = 'none';
      }
    }

    if (window.innerWidth <= 1280) {
      this.alterarMenuEvent.emit(false);
    }
  }

  exibeSubmenuDesktopComNavAberta = (): boolean => {
    return document.querySelectorAll('nav.menu.closed').length === 0;
  }

  navigate = (url: string): void => navigate(url, this.router);

}
