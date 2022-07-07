import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import { RouterModule } from '@angular/router';
import { AppsComponent } from './apps/apps.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    TemplateComponent,
    AppsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    TemplateComponent
  ]
})
export class NgxCoreboxModule { }
