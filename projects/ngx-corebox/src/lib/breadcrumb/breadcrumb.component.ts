import { Component, Input } from '@angular/core';

@Component({
	selector: 'corebox-breadcrumb',
	templateUrl: './breadcrumb.component.html',
	styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
	@Input() text: string = '';
}
