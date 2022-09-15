import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { AppItem } from '../types/app-item';
import { MenuItem } from '../types/menu-item';
import { isMobile } from '../utils/mobile/mobile.check';

@Component({
  selector: 'corebox-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TemplateComponent implements OnInit {
  @Input() companyName: string = 'companyName';
  @Input() menuItems: MenuItem[] = [];
  @Input() appItems: AppItem[] = [];
  @Input() darkMode: boolean = false;
  @Input() lightModeMainColor: string = '#470066';
  @Input() lightModeSecondaryColor: string = '#8a2be2';
  @Input() lightModeDesktopMenuColor: string = '#f3f3f3';
  @Input() lightModeMobileMenuColor: string = '#470066';
  @Input() lightModeContentColor: string = '#f9f9f9';
  @Input() lightModeDefaultTextColor: string = '#000000';
  @Input() lightModeTextColorOnMain: string = '#ffffff';
  @Input() lightModeTextColorOnMenu: string = '#000000';
  
  @Input() darkModeMainColor: string = '#470066';
  @Input() darkModeSecondaryColor: string = '#8a2be2';
  @Input() darkModeDesktopMenuColor: string = '#201f1e';
  @Input() darkModeMobileMenuColor: string = '#201f1e';
  @Input() darkModeContentColor: string = '#252423';
  @Input() darkModeDefaultTextColor: string = '#e9f4f4';
  @Input() darkModeTextColorOnMain: string = '#000000';
  @Input() darkModeTextColorOnMenu: string = '#000000';

  menuIsOpen: boolean = false;
  appsIsOpen: boolean = false;

  ngOnInit(): void {
    this.menuIsOpen = !isMobile();
    
    if (this.darkMode) {
      document.documentElement.style.setProperty('--main-color', this.darkModeMainColor);
      document.documentElement.style.setProperty('--secondary-color', this.darkModeSecondaryColor);
      document.documentElement.style.setProperty('--desktop-menu-color', this.darkModeDesktopMenuColor);
      document.documentElement.style.setProperty('--mobile-menu-color', this.darkModeMobileMenuColor);
      document.documentElement.style.setProperty('--content-color', this.darkModeContentColor);
      document.documentElement.style.setProperty('--default-text-color', this.darkModeDefaultTextColor);
      document.documentElement.style.setProperty('--text-color-on-main', this.darkModeTextColorOnMain);
      document.documentElement.style.setProperty('--text-color-on-menu', this.darkModeTextColorOnMenu);
    } else {
      document.documentElement.style.setProperty('--main-color', this.lightModeMainColor);
      document.documentElement.style.setProperty('--secondary-color', this.lightModeSecondaryColor);
      document.documentElement.style.setProperty('--desktop-menu-color', this.lightModeDesktopMenuColor);
      document.documentElement.style.setProperty('--mobile-menu-color', this.lightModeMobileMenuColor);
      document.documentElement.style.setProperty('--content-color', this.lightModeContentColor);
      document.documentElement.style.setProperty('--default-text-color', this.lightModeDefaultTextColor);
      document.documentElement.style.setProperty('--text-color-on-main', this.lightModeTextColorOnMain);
      document.documentElement.style.setProperty('--text-color-on-menu', this.lightModeTextColorOnMenu);
    }
  }

  appsOpened($event: boolean): void {
    this.appsIsOpen = $event;
  }

  menuOpened($event: boolean): void {
    this.menuIsOpen = $event;
  }
}