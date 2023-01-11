import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../types/menu-item';
import { MenuOptions } from '../types/menu-options';
import { navigate } from '../utils/navigate';

@Component({
  selector: 'corebox-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() menuClosed: boolean = false;
  @Input() menuItems: MenuItem[] = [];
  @Input() menuOptions: MenuOptions = new MenuOptions();

  @Output() alterarMenuEvent: EventEmitter<boolean> = new EventEmitter<boolean>;

  selectedMenu?: MenuItem;
  selectedSubMenu?: MenuItem;
  menuClicked = false;

  constructor(public router: Router) { }

  ngOnInit(): void {
    let itens = this.menuItems.filter(menu => menu.opened);

    if (itens.length > 0) {
      itens.forEach(item => item.opened = false);
      itens[0].opened = true;
      this.selectedMenu = itens[0];
    }

    document.body.onclick = () => {
      if (this.menuClosed && this.selectedMenu && !this.menuClicked && this.selectedMenu.opened) {
        this.selectedMenu.opened = false;
      }
      this.menuClicked = false;
    }
  }

  useMenuClosedClass(): boolean {
    return this.menuClosed && window.innerWidth > 1280;
  }

  useMenuOpenedClass(): boolean {
    return this.menuClosed && window.innerWidth <= 1280;
  }

  getBackgroundImage(): string {
    return `url(${this.menuOptions.backgroundImage})`;
  }

  selectMenu(menu: MenuItem, i: number): void {
    this.menuClicked = true;

    let divSubmenu = document.getElementById('submenu');

    if (divSubmenu?.getAttribute("style")?.indexOf("display: block") !== -1) {
      this.closeSubMenu();
      return
    }

    if (this.selectedMenu) {
      if (!this.selectedMenu.children || this.selectedMenu.children.length === 0) {
        this.selectedSubMenu = undefined
      }

      if (this.selectedMenu === menu) {
        this.selectedMenu.opened = !this.selectedMenu.opened;
      } else {
        this.selectedMenu.opened = false;
        this.selectedMenu = menu;
        this.selectedMenu.opened = true;
      }
    } else {
      this.selectedMenu = menu;
      this.selectedMenu.opened = true;
    }

    if (window.innerWidth <= 1280) {
      if (!this.selectedMenu.children || this.selectedMenu.children.length === 0) {
        this.alterarMenuEvent.emit(false);
      }
    }

    let navMenu = document.getElementById('nav-menu');
    if (navMenu?.className === 'menu closed' && this.selectedMenu.children && window.innerWidth >= 1280) {
      let divSubmenu = document.getElementById('submenu');
      let itemDemenu = document.getElementById(`menu_${i}`);
      if (divSubmenu && itemDemenu) {
        const posicoesDoItemDeMenu = itemDemenu.getBoundingClientRect();
        divSubmenu.style.display = 'block';
        divSubmenu.style.top = `${posicoesDoItemDeMenu.top}px`;
      }
    }

    this.navigate(menu.url!);
  }

  selectSubMenu(submenu: MenuItem): void {
    this.menuClicked = true;

    if (this.selectedSubMenu) {
      if (this.selectedSubMenu === submenu) {
        this.selectedSubMenu.opened = !this.selectedSubMenu.opened;
      } else {
        this.selectedSubMenu.opened = false;
        this.selectedSubMenu = submenu;
        this.selectedSubMenu.opened = true;
      }
    } else {
      this.selectedSubMenu = submenu;
      this.selectedSubMenu.opened = true;
    }
    if (this.menuClosed && this.selectedMenu) {
      this.selectedMenu.opened = false;
    }

    if (this.selectedMenu?.children && window.innerWidth >= 1280) {
      let divSubmenu = document.getElementById('submenu');
      if (divSubmenu) {
        divSubmenu.style.display = 'none';
      }
    }

    if (window.innerWidth <= 1280) {
      this.alterarMenuEvent.emit(false);
    }

    this.navigate(submenu.url!);
  }

  showDesktopSubMenuWithOpenedNav = (): boolean => {
    return document.querySelectorAll('nav.menu.closed').length === 0;
  }

  closeSubMenu = (): void => {
    if (window.innerWidth >= 1280) {
      let divSubmenu = document.getElementById('submenu');
      if (divSubmenu) {
        divSubmenu.style.display = 'none';
      }
    }
  }

  navigate = (url: string): void => navigate(url, this.router);

}
