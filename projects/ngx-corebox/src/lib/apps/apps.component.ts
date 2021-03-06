import { Component, Input } from '@angular/core';
import { AppItem } from '../types/app-item';

@Component({
  selector: 'corebox-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent {
  @Input() appsIsOpen: boolean = false;
  @Input() appItems: AppItem[] = [];
  @Input() mainColor: string = '#470066';
  @Input() secondaryColor: string = '#8a2be2';
}