import { IconName } from '@fortawesome/free-solid-svg-icons';

export class ProfileOptions {
	constructor(
		public logoutEvent: () => void = () => alert('Logout Event Trigged!'),
		public logoutLabel: string,
		public userName: string,
		public logoutIcon: IconName = 'font-awesome',
		public companyName: string = '',
		public avatarUrl: string = '',
		public profileUrl: string = '',
		public profileLabel: string = '',
		public profileIcon: IconName = 'font-awesome'
	) {}
}
