import { Component } from '@angular/core';

@Component({
	selector: 'app-example3',
	template: `<corebox-error-page [description]="'Page not found!'" [statusCode]="'404'" [title]="'ERROR'" />`
})
export class Example3Component {}
