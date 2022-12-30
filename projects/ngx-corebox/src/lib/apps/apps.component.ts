import { Component, Input } from '@angular/core';
import { AppItem } from '../types/app-item';

@Component({
  selector: 'corebox-apps',
  templateUrl: './apps.component.html'
})
export class AppsComponent {
  @Input() appsIsOpen: boolean = false;
  @Input() appItems: AppItem[] = [];
}