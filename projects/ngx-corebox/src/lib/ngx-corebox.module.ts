import { NgModule } from '@angular/core';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import { RouterModule } from '@angular/router';
import { AppsComponent } from './apps/apps.component';
import { AvatarComponent } from './avatar/avatar.component';
import { ProfileComponent } from './profile/profile.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { AppsButtonComponent } from './header/apps-button/apps-button.component';
import { MenuButtonComponent } from './header/menu-button/menu-button.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
	declarations: [
		FooterComponent,
		AppsButtonComponent,
		MenuButtonComponent,
		HeaderComponent,
		MenuComponent,
		TemplateComponent,
		AppsComponent,
		AvatarComponent,
		ProfileComponent,
		BreadcrumbComponent,
		ModalComponent
	],
	imports: [CommonModule, FontAwesomeModule, RouterModule],
	exports: [
		FooterComponent,
		HeaderComponent,
		MenuComponent,
		AppsComponent,
		AvatarComponent,
		ProfileComponent,
		TemplateComponent,
		BreadcrumbComponent,
		ModalComponent
	]
})
export class NgxCoreboxModule {
	constructor(library: FaIconLibrary) {
		library.addIconPacks(fas);
	}
}
