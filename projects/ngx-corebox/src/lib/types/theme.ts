export class Header {
    backgroundColor: string = '';
    iconBackgroundColor: string = '';
    iconFontColor: string = '';
    borderShadowColor: string = '';
}

export class Menu {
    backgroundColor: string = '';
    backgroundHoverColor: string = '';
    fontColor: string = '';
    fontHoverColor: string = '';
    borderLeftColor: string = '';
    subMenuSelectedBackgroundColor: string = '';
    menuSelectedFontColor: string = '';
}

export class Footer {
    backgroundColor: string = '';
    fontColor: string = '';
    borderTopColor: string = '';
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
    header: Header = new Header();
    menu: Menu = new Menu();
    footer: Footer = new Footer();
}