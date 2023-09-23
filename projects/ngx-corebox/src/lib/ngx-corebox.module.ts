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
import { AppsButtonComponent } from './header/apps-button/apps-button.component';
import { MenuButtonComponent } from './header/menu-button/menu-button.component';
import { ModalComponent } from './modal/modal.component';
import { ErrorPageComponent } from './error-page/error-page.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { IconPack, fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FloatButtonComponent } from './float-button/float-button.component';
import { FloatButtonItemComponent } from './float-button/float-button-item/float-button-item.component';
import { FloatButtonService } from './float-button/float-button.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TooltipDirective } from './float-button/float-button-item/tooltip.directive';
import { TooltipComponent } from './float-button/float-button-item/tooltip/tooltip.component';

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
		ModalComponent,
		ErrorPageComponent,
		FloatButtonComponent,
		FloatButtonItemComponent,
		TooltipDirective,
		TooltipComponent
	],
	exports: [
		FooterComponent,
		HeaderComponent,
		MenuComponent,
		AppsComponent,
		AvatarComponent,
		ProfileComponent,
		TemplateComponent,
		BreadcrumbComponent,
		ModalComponent,
		ErrorPageComponent,
		FloatButtonComponent,
		FloatButtonItemComponent
	],
	imports: [CommonModule, FontAwesomeModule, RouterModule],
	providers: [FloatButtonService]
})
export class NgxCoreboxModule {
	constructor(library: FaIconLibrary) {
		library.addIconPacks(fas, fab as IconPack);
	}
}
