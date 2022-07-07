export class MenuItem {
    url?: string;
    queryParams?: any;
    icon?: string;
    title?: string;
    children?: MenuItem[];
    viewChildren?: boolean = false;
    allowedRoles?: string[];
}