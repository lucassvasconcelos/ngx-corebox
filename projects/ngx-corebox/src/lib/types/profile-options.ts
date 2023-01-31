import { IconName } from '@fortawesome/free-solid-svg-icons';

export class ProfileOptions {
	companyName?: string;
	userName?: string;
	avatarUrl?: string;
	profileUrl?: string;
	profileLabel?: string;
	profileIcon?: IconName;
	logoutLabel?: string;
	logoutIcon?: IconName;
	logoutEvent: () => void = () => alert('Logout Event Trigged!');
}
