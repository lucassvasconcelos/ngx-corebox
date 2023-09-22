import { Component, Input, ViewChild, HostListener, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FloatButtonService } from '../float-button.service';
import { FloatButtonState } from '../../types/float-button';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	selector: 'corebox-float-button-item',
	templateUrl: './float-button-item.component.html',
	styleUrls: ['./float-button-item.component.scss']
})
export class FloatButtonItemComponent {
	@Input() icon: IconProp = 'flag';
	@Input({ required: true }) tooltip: string = '';
	@Input() color: string = 'text-secondary';
	@Input() disabled: boolean = false;
	@Input() tooltipDisabled: boolean = false;

	@Output() clicked: EventEmitter<void> = new EventEmitter<void>();

	@ViewChild('ngbTooltip') ngbTooltip: NgbTooltip;

	constructor(public stateService: FloatButtonService) {}

	@HostListener('click') onClick(): void {
		if (!this.disabled) {
			const currentState: FloatButtonState = this.stateService.currentState;
			const newState = { ...currentState, isOpen: !currentState.isOpen };
			this.stateService.publish(newState);
			this.clicked.emit();
		}
	}
}
