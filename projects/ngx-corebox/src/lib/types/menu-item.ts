import { IconName } from "@fortawesome/free-solid-svg-icons";

export class MenuItem {
    url?: string;
    queryParams?: any;
    icon?: IconName = 'font-awesome';
    title?: string;
    children?: MenuItem[];
    viewChildren?: boolean = false;
    allowedRoles?: string[];
}