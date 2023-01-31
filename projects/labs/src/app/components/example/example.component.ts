import { Component } from '@angular/core';
import { NgbModal, NgxSpinnerService, ToastrService } from 'ngx-corebox';

@Component({
	selector: 'app-example',
	templateUrl: './example.component.html',
	styleUrls: ['example.component.scss']
})
export class ExampleComponent {
	constructor(private toastr: ToastrService, private spinner: NgxSpinnerService, private modal: NgbModal) {}

	showToastr(): void {
		this.toastr.success('Hello World!');
	}

	showSpinner(): void {
		this.spinner.show();

		setTimeout(() => {
			this.spinner.hide();
		}, 1000);
	}

	showCoreBoxModal(modal: any): void {
		this.modal.open(modal, { centered: true, size: 'lg' });
	}

	modalSubmit() {
		this.toastr.info('Modal submit triggered!');
	}

	modalClose() {
		this.toastr.info('Modal close triggered!');
	}
}
