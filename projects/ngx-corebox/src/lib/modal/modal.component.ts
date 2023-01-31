import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconName } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'corebox-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
	@Input() closeIcon: IconName;
	@Input() cancelButtonClass: string;
	@Input() cancelButtonText: string;
	@Input() content: string;
	@Input() submitButtonText: string;
	@Input() title: string;
	@Input() titleBackgroundColor: string;
	@Input() titleFontColor: string;
	@Input() titleIcon: IconName;

	@Output() submitEvent: EventEmitter<void> = new EventEmitter<void>();
	@Output() closeEvent: EventEmitter<void> = new EventEmitter<void>();

	submit() {
		this.submitEvent.emit();
	}

	close() {
		this.closeEvent.emit();
	}
}
