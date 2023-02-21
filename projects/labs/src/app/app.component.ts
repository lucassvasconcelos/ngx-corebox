import { Component } from '@angular/core';
import { AppItem, Footer, Header, Menu, MenuItem, MenuOptions, Theme } from 'ngx-corebox';
import { ProfileOptions } from 'projects/ngx-corebox/src/public-api';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'labs';

	profileOptions = new ProfileOptions(
		() => alert('Logout Event Trigged!'),
		'Logout',
		'Sevéro Wayne',
		'sign-out',
		'Kenkko Group',
		'',
		'/profile',
		'My profile',
		'user'
	);

	themes: Theme[] = [
		new Theme(
			true,
			'Default',
			'#f9f9f9',
			'#ed4b4b',
			new Header(),
			new Menu(),
			new Footer('Kenkko'),
			new MenuOptions(true, '', '../assets/logo-desktop.png', '../assets/logo-mobile.png')
		)
	];

	appItems: AppItem[] = [new AppItem('App 1', '/url1')];

	menuItems: MenuItem[] = [
		new MenuItem('/url1', 'Menu 1', [
			new MenuItem('/submenu1', 'SubMenu 1.1'),
			new MenuItem('/submenu1', 'SubMenu 1.2'),
			new MenuItem('/submenu1', 'Hidden SubMenu 1.3', null, false),
			new MenuItem('/submenu1', 'SubMenu 1.4')
		]),
		new MenuItem('/example2', 'Menu 2'),
		new MenuItem(() => {
			alert('Menu event');
		}, 'Menu 3'),
		new MenuItem('', 'Hidden Menu 3', null, false)
	];
}
