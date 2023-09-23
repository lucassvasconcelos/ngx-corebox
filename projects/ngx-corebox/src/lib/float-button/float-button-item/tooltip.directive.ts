import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Directive, ElementRef, Input, OnInit } from '@angular/core';
import { TooltipComponent } from './tooltip/tooltip.component';

@Directive({
	selector: '[coreboxTooltip]',
	exportAs: 'coreboxTooltip'
})
export class TooltipDirective implements OnInit {
	@Input('coreboxTooltip') tooltip: string = 'tooltip';

	private _overlayRef!: OverlayRef;
	private tooltipRef?: ComponentRef<TooltipComponent>;

	constructor(private overlayPositionBuilder: OverlayPositionBuilder, private elementRef: ElementRef, private overlay: Overlay) {}

	ngOnInit(): void {
		const positionStrategy = this.overlayPositionBuilder.flexibleConnectedTo(this.elementRef).withPositions([
			{
				offsetX: -45,
				originX: 'start',
				originY: 'center',
				overlayX: 'end',
				overlayY: 'center'
			}
		]);

		this._overlayRef = this.overlay.create({ positionStrategy });
	}

	show() {
		const tooltipPortal = new ComponentPortal(TooltipComponent);
		this.tooltipRef = this._overlayRef.attach(tooltipPortal);
		this.tooltipRef.instance.tooltip = this.tooltip;
	}

	hide() {
		this._overlayRef.detach();
	}
}
