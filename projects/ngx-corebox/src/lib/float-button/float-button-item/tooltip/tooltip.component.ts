import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	selector: 'corebox-tooltip',
	template: `<div>{{ tooltip }}</div>`,
	styles: [
		`
			div {
				background: rgb(44, 39, 39);
				color: white;
				padding: 8px;
				border-radius: 5px;
				font-size: 1rem;
			}
		`
	]
})
export class TooltipComponent {
	@Input() tooltip: string = 'tooltip';
}
