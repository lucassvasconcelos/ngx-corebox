import { IconName } from '@fortawesome/free-solid-svg-icons';

export class MenuItem {
	constructor(
		public url: string | (() => void),
		public title: string,
		public children: MenuItem[] = null,
		public show: boolean = true,
		public queryParams: any = null,
		public icon: IconName = 'font-awesome',
		public opened: boolean = false
	) {}
}
