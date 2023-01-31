import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppItem } from '../types/app-item';
import { navigate } from '../utils/navigate';

@Component({
	selector: 'corebox-apps',
	templateUrl: './apps.component.html',
	styleUrls: ['./apps.component.scss']
})
export class AppsComponent {
	@Input() appItems: AppItem[] = [];
	@Input() showApps: boolean = false;

	constructor(public router: Router) {}

	navigate = (url: string): void => navigate(url, this.router);
}
