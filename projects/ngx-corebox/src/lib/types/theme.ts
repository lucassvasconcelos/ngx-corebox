export class Menu {
    backgroundColor: string = '';
    backgroundHoverColor: string = '';
    fontColor: string = '';
    fontHoverColor: string = '';
    borderLeftColor: string = '';
    subMenuSelectedBackgroundColor: string = '';
    menuSelectedFontColor: string = '';
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
    fontColor: string = '';
    menu: Menu = new Menu();
}