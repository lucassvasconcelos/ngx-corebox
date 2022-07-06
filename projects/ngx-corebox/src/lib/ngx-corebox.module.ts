import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import { RouterModule } from '@angular/router';
import { AppsComponent } from './apps/apps.component';
import { AvatarComponent } from './avatar/avatar.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    TemplateComponent,
    AppsComponent,
    AvatarComponent,
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    AppsComponent,
    AvatarComponent,
    TemplateComponent
  ]
})
export class NgxCoreboxModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
