import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppItem } from '../types/app-item';
import { ProfileOptions } from '../types/profile-options';

@Component({
	selector: 'corebox-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	@Input() profileOptions?: ProfileOptions;
	@Input() appItems: AppItem[] = [];
	@Input() menuClosed: boolean;
	@Input() showMenu: boolean = true;

	appsIsOpen: boolean = false;
	profileIsOpen: boolean = false;
	profileMenuButtonPressed = false;
	appsMenuButtonPressed = false;

	@Output() menuChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
	@Output() appsOpenedEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

	constructor(public router: Router) {}

	ngOnInit(): void {
		const localStorageItem = localStorage.getItem('menuClosed');

		if (window.innerWidth <= 800) {
			this.menuChanged.emit(false);
			localStorage.setItem('menuClosed', String(false));
		} else {
			if (localStorageItem === null) {
				this.menuChanged.emit(false);
				localStorage.setItem('menuClosed', String(false));
			} else {
				const menuClosed = localStorageItem === 'true' ? true : false;
				this.menuChanged.emit(menuClosed);
			}
		}

		document.body.addEventListener('click', () => {
			!this.profileMenuButtonPressed ? this.toogleProfileMenu(false) : (this.profileMenuButtonPressed = false);
			!this.appsMenuButtonPressed ? this.toogleAppsMenu(false) : (this.appsMenuButtonPressed = false);
		});
	}

	toogleProfileMenu = (pressionouBotao: boolean): void => {
		this.profileMenuButtonPressed = pressionouBotao;

		if (pressionouBotao) {
			this.profileIsOpen = !this.profileIsOpen;

			if (window.innerWidth <= 800) this.menuChanged.emit(false);
		} else {
			this.profileIsOpen = false;
		}
	};

	toogleAppsMenu = (pressionouBotao: boolean): void => {
		this.appsMenuButtonPressed = pressionouBotao;

		if (pressionouBotao) {
			this.appsIsOpen = !this.appsIsOpen;

			if (window.innerWidth <= 800) this.appsOpenedEvent.emit(false);
		} else {
			this.appsIsOpen = false;
		}
	};

	toogleMenu() {
		const localStorageItem = localStorage.getItem('menuClosed');
		const menuClosed = localStorageItem === 'true' ? true : false;
		localStorage.setItem('menuClosed', String(!menuClosed));
		this.menuChanged.emit(!menuClosed);
	}

	isMobile = (): boolean => {
		return window.innerWidth <= 800;
	};

	closeSubMenu = (): void => {
		if (!this.isMobile()) {
			let divSubmenu = document.getElementById('submenu');
			let divSubSubmenu = document.getElementById('subsubmenu');

			if (divSubmenu) divSubmenu.style.display = 'none';
			if (divSubSubmenu) divSubSubmenu.style.display = 'none';
		}
	};

	useClosedMenuClass(): boolean {
		return this.menuClosed && window.innerWidth > 800;
	}
}
