import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../types/menu-item';
import { MenuOptions } from '../types/theme';
import { navigate } from '../utils/navigate';

@Component({
	selector: 'corebox-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
	@Input() menuClosed: boolean = false;
	@Input() menuItems: MenuItem[] = [];
	@Input() menuOptions: MenuOptions;

	@Output() alterarMenuEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

	selectedMenu?: MenuItem;
	selectedSubMenu?: MenuItem;
	menuClicked = false;

	constructor(public router: Router) {}

	ngOnInit(): void {
		let itens = this.menuItems.filter((menu) => menu.opened);

		if (itens.length > 0) {
			itens.forEach((item) => (item.opened = false));
			itens[0].opened = true;
			this.selectedMenu = itens[0];
		}

		document.body.onclick = () => {
			if (this.menuClosed && this.selectedMenu && !this.menuClicked && this.selectedMenu.opened) {
				this.selectedMenu.opened = false;
			}
			this.menuClicked = false;
		};

		this.selectCurrentMenu();
	}

	selectCurrentMenu() {
		const baseConfigs =
			this.router.config && this.router.config.length > 0
				? this.router.config.filter((c) => {
						return c.path && c.path.indexOf('/') < 0 ? c : null;
				  })
				: [];

		const baseResources = baseConfigs.map((c) => c.path);

		if (location.pathname && location.hash) {
			const path = location.href.replace(`${location.origin}/#/`, '');
			const resourceMatches = baseResources.filter((r) => path.startsWith(r));

			if (resourceMatches.length > 1) {
				let uniqueValue: string;

				for (let i = 0; i < resourceMatches.length; i++) {
					const currentElement = resourceMatches[i];
					const matchingElements = resourceMatches.filter((element) => element !== currentElement && element.startsWith(currentElement));
					if (matchingElements.length === 0) {
						uniqueValue = currentElement;
						break;
					}
				}

				this.selectedMenu = this.menuItems?.filter((m) => m.url === `/${uniqueValue}`)?.pop();
			} else if (resourceMatches.length === 1) {
				this.selectedMenu = this.menuItems?.filter((m) => m.url === `/${resourceMatches[0]}`)?.pop();
			}
		} else {
			const path = location.pathname?.split('/');
			this.selectedMenu = this.menuItems?.filter((m) => m.url === `/${path[1]}`)?.pop();
		}
	}

	useMenuClosedClass(): boolean {
		return this.menuClosed && window.innerWidth > 800;
	}

	useMenuOpenedClass(): boolean {
		return this.menuClosed && window.innerWidth <= 800;
	}

	getBackgroundImage(): string {
		return `url(${this.menuOptions.backgroundImage})`;
	}

	selectMenu(menu: MenuItem, i: number): void {
		this.menuClicked = true;

		let divSubmenu = document.getElementById('submenu');

		if (divSubmenu?.getAttribute('style')?.indexOf('display: block') !== -1) {
			this.closeSubMenu();
			return;
		}

		if (this.selectedMenu) {
			if (!this.selectedMenu.children || this.selectedMenu.children.length === 0) {
				this.selectedSubMenu = undefined;
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

		if (window.innerWidth <= 800) {
			if (!this.selectedMenu.children || this.selectedMenu.children.length === 0) {
				this.alterarMenuEvent.emit(false);
			}
		}

		let navMenu = document.getElementById('nav-menu');
		if (navMenu?.className === 'corebox-menu corebox-closed' && this.selectedMenu.children && window.innerWidth >= 800) {
			let divSubmenu = document.getElementById('submenu');
			let itemDemenu = document.getElementById(`menu_${i}`);
			if (divSubmenu && itemDemenu) {
				const posicoesDoItemDeMenu = itemDemenu.getBoundingClientRect();
				divSubmenu.style.display = 'block';
				divSubmenu.style.top = `${posicoesDoItemDeMenu.top}px`;
			}
		}

		this.navigate(menu.url, menu.queryParams);
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

		if (this.selectedMenu?.children && window.innerWidth >= 800) {
			let divSubmenu = document.getElementById('submenu');
			if (divSubmenu) {
				divSubmenu.style.display = 'none';
			}
		}

		if (window.innerWidth <= 800) {
			this.alterarMenuEvent.emit(false);
		}

		this.navigate(submenu.url!, submenu.queryParams);
	}

	showDesktopSubMenuWithOpenedNav = (): boolean => {
		return document.querySelectorAll('nav.corebox-menu.corebox-closed').length === 0;
	};

	closeSubMenu = (): void => {
		if (window.innerWidth >= 800) {
			let divSubmenu = document.getElementById('submenu');
			if (divSubmenu) {
				divSubmenu.style.display = 'none';
			}
		}
	};

	navigate = (url: string | (() => void), queryParams: any): void => {
		if (typeof url === 'string') {
			navigate(url, queryParams, this.router);
		} else {
			if (url !== null && url !== undefined) url();
		}
	};
}
