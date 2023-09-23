import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';
import {
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	ContentChildren,
	EventEmitter,
	Input,
	OnChanges,
	OnDestroy,
	OnInit,
	Output,
	QueryList,
	SimpleChanges
} from '@angular/core';
import { FloatButtonState } from '../types/float-button';
import { Subscription } from 'rxjs';
import { FloatButtonItemComponent } from './float-button-item/float-button-item.component';
import { FloatButtonService } from './float-button.service';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	selector: 'corebox-float-button',
	templateUrl: './float-button.component.html',
	styleUrls: ['./float-button.component.scss'],
	animations: [
		trigger('accordion', [
			state(
				'open',
				style({
					visibility: 'visible'
				})
			),
			state(
				'closed',
				style({
					visibility: 'hidden'
				})
			),
			transition(
				'open => closed',
				query(
					'corebox-float-button-item',
					[style({ transform: 'scale(1)' }), stagger(100, [animate('0.05s', style({ transform: 'scale(0)' }))])],
					{ optional: true }
				)
			),
			transition('closed => open', [
				style({ visibility: 'visible' }),
				query(
					'corebox-float-button-item',
					[style({ transform: 'scale(0)' }), stagger(100, [animate('0.05s', style({ transform: 'scale(1)' }))])],
					{ optional: true }
				)
			])
		]),
		trigger('openClose', [
			state('open', style({ transform: 'scale(1.2)' })),
			state('closed', style({ transform: 'scale(1)' })),
			transition('open => closed', [animate('0.1s')]),
			transition('closed => open', [animate('0.1s')])
		])
	]
})
export class FloatButtonComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
	@Input() icon: IconProp = 'flag';
	@Input() color: string = 'text-primary';
	@Input() marginBottom: string = '75px';
	@Input() marginRight: string = '50px';
	@Input() disabled: boolean = false;
	@Input() isOpen: boolean = false;
	@Input() hoverable: boolean = false;

	@Output() clicked: EventEmitter<void> = new EventEmitter<void>();

	private _initState: FloatButtonState = {} as FloatButtonState;
	private _stateSubscription!: Subscription;

	@ContentChildren(FloatButtonItemComponent) buttons!: QueryList<FloatButtonItemComponent>;

	constructor(public stateService: FloatButtonService) {}

	ngOnInit(): void {
		this._initState = {
			isHoverable: this.hoverable,
			isOpen: this.isOpen
		};
		this.stateService.publish(this._initState);
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['isOpen'] && changes['isOpen'].previousValue != changes['isOpen'].currentValue) {
			const newState = { ...this.stateService.currentState, isOpen: changes['isOpen'].currentValue };
			this.stateService.publish(newState);
		}

		if (changes['hoverable'] && changes['hoverable'].previousValue != changes['hoverable'].currentValue) {
			const newState = { ...this.stateService.currentState, isHoverable: changes['hoverable'].currentValue };
			this.stateService.publish(newState);
		}
	}

	ngAfterViewInit(): void {
		this._stateSubscription = this.stateService.state$.subscribe((newState: FloatButtonState) => this.showTooltips(newState));
	}

	ngOnDestroy(): void {
		this._stateSubscription!.unsubscribe();
	}

	private showTooltips(state: FloatButtonState): void {
		const isOpen = state.isOpen;
		const buttons = this.buttons.toArray();

		if (isOpen) {
			buttons.forEach((b) => !b.tooltipDisabled && b.tooltipRef.show());
		} else {
			buttons.forEach((b) => b.tooltipRef.hide());
		}
	}

	toggle(): void {
		const state = this.stateService.currentState;
		const newState = { ...state, isOpen: !state.isOpen };
		this.stateService.publish(newState);

		if (!state.isHoverable) {
			this.clicked.emit();
		}
	}
}
