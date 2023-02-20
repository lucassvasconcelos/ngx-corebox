import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppItem } from '../types/app-item';
import { ProfileOptions } from '../types/profile-options';
import { navigate } from '../utils/navigate';

@Component({
	selector: 'corebox-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	@Input() profileOptions?: ProfileOptions;
	@Input() appItems: AppItem[] = [];
	@Input() menuClosed: boolean = false;
	@Input() showMenu: boolean = true;

	appsIsOpen: boolean = false;
	profileIsOpen: boolean = false;
	profileMenuButtonPressed = false;
	appsMenuButtonPressed = false;

	@Output() menuStateEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
	@Output() appsOpenedEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

	constructor(public router: Router) {}

	ngOnInit(): void {
		const localStorageItem = localStorage.getItem('menuClosed');

		if (window.innerWidth <= 1280) {
			this.menuStateEvent.emit(false);
			localStorage.setItem('menuClosed', String(false));
		} else {
			if (localStorageItem === null) {
				this.menuStateEvent.emit(false);
				localStorage.setItem('menuClosed', String(false));
			} else {
				const menuClosed = localStorageItem === 'true' ? true : false;
				this.menuStateEvent.emit(menuClosed);
			}
		}

		document.body.onclick = (): void => {
			!this.profileMenuButtonPressed ? this.toogleProfileMenu(false) : (this.profileMenuButtonPressed = false);
			!this.appsMenuButtonPressed ? this.toogleAppsMenu(false) : (this.appsMenuButtonPressed = false);
		};
	}

	toogleProfileMenu = (pressionouBotao: boolean): void => {
		this.profileMenuButtonPressed = pressionouBotao;

		if (pressionouBotao) {
			this.profileIsOpen = !this.profileIsOpen;

			if (window.innerWidth <= 1280) this.menuStateEvent.emit(false);
		} else {
			this.profileIsOpen = false;
		}
	};

	toogleAppsMenu = (pressionouBotao: boolean): void => {
		this.appsMenuButtonPressed = pressionouBotao;

		if (pressionouBotao) {
			this.appsIsOpen = !this.appsIsOpen;

			if (window.innerWidth <= 1280) this.appsOpenedEvent.emit(false);
		} else {
			this.appsIsOpen = false;
		}
	};

	toogleMenu() {
		const localStorageItem = localStorage.getItem('menuClosed');
		const menuClosed = localStorageItem === 'true' ? true : false;
		localStorage.setItem('menuClosed', String(!menuClosed));
		this.menuStateEvent.emit(!menuClosed);
	}

	isMobile = (): boolean => {
		return window.innerWidth <= 1280;
	};

	closeSubMenu = (): void => {
		if (!this.isMobile()) {
			let divSubmenu = document.getElementById('submenu');
			if (divSubmenu) {
				divSubmenu.style.display = 'none';
			}
		}
	};

	useClosedMenuClass(): boolean {
		return this.menuClosed && window.innerWidth > 1280;
	}
}
