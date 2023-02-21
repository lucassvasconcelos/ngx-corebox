import { Component, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'corebox-error-page',
	templateUrl: './error-page.component.html',
	styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements DoCheck {
	description: string = '';
	errorMessage: string = '';
	queryParams: any;
	statusCode: string = '';
	title: string = '';

	constructor(private route: ActivatedRoute) {}

	ngDoCheck(): void {
		this.getQueryParams();
	}

	private getQueryParams(): void {
		this.route.queryParams.subscribe((params) => (this.queryParams = params));
		this.description = this.queryParams.description;
		this.errorMessage = this.queryParams.errorMessage;
		this.statusCode = this.queryParams.statusCode;
		this.title = this.queryParams.title;
	}
}
