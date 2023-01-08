import { Component, Input } from '@angular/core';
import { AppItem } from '../types/app-item';

@Component({
  selector: 'corebox-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})
export class AppsComponent {
  @Input() appItems: AppItem[] = [];
  @Input() showApps: boolean = false;

  navegar = (url: string): void => {
    location.href = url;
  }
}