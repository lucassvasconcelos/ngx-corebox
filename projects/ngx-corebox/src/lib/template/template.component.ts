import { Component, Input, OnInit } from '@angular/core';
import { AppItem } from '../types/app-item';
import { MenuItem } from '../types/menu-item';
import { isMobile } from '../utils/mobile/mobile.check';

@Component({
  selector: 'corebox-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  @Input() companyName: string = 'companyName';
  @Input() menuItems: MenuItem[] = [];
  @Input() appItems: AppItem[] = [];
  @Input() mainColor: string = '#470066';
  @Input() secondaryColor: string = '#8a2be2';

  menuIsOpen: boolean = false;
  appsIsOpen: boolean = false;

  ngOnInit(): void {
    this.menuIsOpen = !isMobile();
  }

  appsOpened($event: boolean): void {
    this.appsIsOpen = $event;
  }

  menuOpened($event: boolean): void {
    this.menuIsOpen = $event;
  }
}