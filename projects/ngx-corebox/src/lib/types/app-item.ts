import { IconName } from '@fortawesome/fontawesome-common-types';

export class AppItem {
    url: string = '';
    icon: IconName = 'font-awesome';
    title?: string;
    allowedRoles?: string[];
}