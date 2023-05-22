import { IconName } from '@fortawesome/fontawesome-common-types';
import { IconPrefix } from '@fortawesome/fontawesome-svg-core';

export class AppItem {
	constructor(
		public title: string,
		public url: string | (() => void),
		public icon: IconName = 'font-awesome',
		public iconGallery: IconPrefix = 'fas',
		public show: boolean = true
	) {}
}
