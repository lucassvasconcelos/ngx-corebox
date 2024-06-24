import { Component, Input } from '@angular/core';

@Component({
	selector: 'corebox-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
	@Input() companyName?: string;
	@Input() menuClosed: boolean;
	@Input() showMenu: boolean = true;

	currentYear: number = new Date().getFullYear();

	useClosedMenuClass(): boolean {
		return this.menuClosed && window.innerWidth > 800;
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
