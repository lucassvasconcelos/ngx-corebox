export class Menu {
    backgroundColor: string = '';
    fontColor: string = ''
}

export class Theme {
    selected: boolean = false;
    name: string = 'Light';
    backgroundImage: string = '';
    logotipo: string = '';
    logotipoMobile: string = '';
    primaryColor: string = '';
    secondaryColor: string = '';
    backgroundColor: string = '';
    menu: Menu = new Menu();
}