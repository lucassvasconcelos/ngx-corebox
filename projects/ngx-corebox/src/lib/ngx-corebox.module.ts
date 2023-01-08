import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import { RouterModule } from '@angular/router';
import { AppsComponent } from './apps/apps.component';
import { AvatarComponent } from './avatar/avatar.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileComponent } from './profile/profile.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    TemplateComponent,
    AppsComponent,
    AvatarComponent,
    ProfileComponent,
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
    ProfileComponent,
    TemplateComponent
  ]
})
export class NgxCoreboxModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
