import { IconName } from "@fortawesome/free-solid-svg-icons";

export class ProfileOptions {
    companyName: string = '';
    userName: string = '';
    avatarUrl?: string = undefined;
    profileUrl: string = '';
    profileLabel: string = 'Profile';
    profileIcon: IconName = 'font-awesome';
    logoutUrl: string = '';
    logoutLabel: string = 'Logout';
    logoutIcon: IconName = 'font-awesome';
}