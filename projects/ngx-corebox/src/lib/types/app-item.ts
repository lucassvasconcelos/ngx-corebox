import { IconName } from '@fortawesome/fontawesome-common-types';

export class AppItem {
	constructor(public title: string, public url: string | (() => void), public icon: IconName = 'font-awesome', public show: boolean = true) {}
}
