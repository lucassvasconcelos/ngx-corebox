import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FloatButtonState } from '../types/float-button';

@Injectable()
export class FloatButtonService {
	public state$: Observable<FloatButtonState>;

	private state: FloatButtonState;
	private stateSubject$: BehaviorSubject<FloatButtonState>;

	constructor() {
		this.state = {} as FloatButtonState;
		this.stateSubject$ = new BehaviorSubject(this.state);
		this.state$ = this.stateSubject$.asObservable();
	}

	get currentState(): FloatButtonState {
		return this.state;
	}

	publish(newState: FloatButtonState): void {
		this.state = newState;
		this.stateSubject$.next(newState);
	}
}
