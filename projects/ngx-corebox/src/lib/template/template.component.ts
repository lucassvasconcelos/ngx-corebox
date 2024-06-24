import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { AppItem } from '../types/app-item';
import { MenuItem } from '../types/menu-item';
import { ProfileOptions } from '../types/profile-options';
import { MenuOptions, Theme } from '../types/theme';

@Component({
	selector: 'corebox-template',
	templateUrl: './template.component.html',
	styleUrls: ['./template.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class TemplateComponent implements OnInit {
	@Input() themes: Theme[] = [];
	@Input() pathToAvatarImage: string = '';
	@Input() menuItems: MenuItem[] = [];
	@Input() appItems: AppItem[] = [];
	@Input() menuOptions: MenuOptions;
	@Input() profileOptions?: ProfileOptions;

	menuClosed: boolean = false;
	appsIsOpen: boolean = false;

	ngOnInit(): void {
		let theme = this.themes.filter((theme) => theme.selected)[0];

		if (theme) {
			document.documentElement.style.setProperty('--background-color', theme.backgroundColor);
			document.documentElement.style.setProperty('--header-background-color1', theme.header.backgroundColor1);
			document.documentElement.style.setProperty(
				'--header-background-color2',
				theme.header.backgroundColor2 === '' || theme.header.backgroundColor2 === null || theme.header.backgroundColor2 === undefined
					? theme.header.backgroundColor1
					: theme.header.backgroundColor2
			);
			document.documentElement.style.setProperty('--scroll-color', theme.scrollColor);
			document.documentElement.style.setProperty('--header-icon--background-color', theme.header.iconBackgroundColor);
			document.documentElement.style.setProperty('--header-icon--font-color', theme.header.iconFontColor);
			document.documentElement.style.setProperty('--header-border-shadow-color', theme.header.borderShadowColor);
			document.documentElement.style.setProperty('--menu-font-color', theme.menu.fontColor);
			document.documentElement.style.setProperty('--menu-font-hover-color', theme.menu.fontHoverColor);
			document.documentElement.style.setProperty('--menu-background-color', theme.menu.backgroundColor);
			document.documentElement.style.setProperty('--menu-background-hover-color', theme.menu.backgroundHoverColor);
			document.documentElement.style.setProperty('--menu-border-left-color', theme.menu.borderLeftColor);
			document.documentElement.style.setProperty('--menu-submenu-background-color', theme.menu.subMenuBackgroundColor);
			document.documentElement.style.setProperty('--menu-submenu-selected-background-color', theme.menu.subMenuSelectedBackgroundColor);
			document.documentElement.style.setProperty('--menu-selected-font-color', theme.menu.menuSelectedFontColor);
			document.documentElement.style.setProperty('--footer-background-color', theme.footer.backgroundColor);
			document.documentElement.style.setProperty('--footer-font-color', theme.footer.fontColor);
			document.documentElement.style.setProperty('--footer-border-top-color', theme.footer.borderTopColor);
		}
	}

	getMenuOptions = (): MenuOptions => {
		let theme = this.themes.filter((theme) => theme.selected)[0];
		return theme.menuOptions;
	};

	getCompanyName = (): string => {
		let theme = this.themes.filter((theme) => theme.selected)[0];
		return theme?.footer?.companyName !== '' ? theme.footer.companyName : 'Company name';
	};

	appsOpened($event: boolean): void {
		this.appsIsOpen = $event;
	}

	useClosedMenuClass(): boolean {
		return this.menuClosed && window.innerWidth > 800;
	}

	useMenuOpenedClass(): boolean {
		return this.menuClosed && window.innerWidth <= 800;
	}

	toggleMenu(state: boolean): void {
		this.menuClosed = state;
	}

	closeSubMenu = (): void => {
		if (window.innerWidth >= 800) {
			let divSubmenu = document.getElementById('submenu');
			let divSubSubmenu = document.getElementById('subsubmenu');
			
			if (divSubmenu) divSubmenu.style.display = 'none';
			if (divSubSubmenu) divSubSubmenu.style.display = 'none';
		}
	};
}
