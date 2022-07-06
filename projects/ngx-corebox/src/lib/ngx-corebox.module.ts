import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class NgxCoreboxModule { }
