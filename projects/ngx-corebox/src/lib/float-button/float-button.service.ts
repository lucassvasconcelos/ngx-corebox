import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FloatButtonState } from '../types/float-button';

@Injectable()
export class FloatButtonService {
	private _state: FloatButtonState;
	private _stateSubject$: BehaviorSubject<FloatButtonState>;
	public state$: Observable<FloatButtonState>;

	constructor() {
		this._state = {} as FloatButtonState;
		this._stateSubject$ = new BehaviorSubject(this._state);
		this.state$ = this._stateSubject$.asObservable();
	}

	get currentState(): FloatButtonState {
		return this._state;
	}

	publish(newState: FloatButtonState): void {
		this._state = newState;
		this._stateSubject$.next(newState);
	}
}
