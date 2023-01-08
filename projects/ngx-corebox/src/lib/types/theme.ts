export class Header {
    backgroundColor1: string = '';
    backgroundColor2: string = '';
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
    subMenuBackgroundColor: string = '';
    subMenuSelectedBackgroundColor: string = '';
    menuSelectedFontColor: string = '';
}

export class Footer {
    backgroundColor: string = '';
    fontColor: string = '';
    borderTopColor: string = '';
}

export class Theme {
    selected: boolean = true;
    name: string = 'Light';
    logo: string = '../assets/logo-desktop.png';
    logoMobile: string = '../assets/logo-mobile.png';
    backgroundColor: string = '#f9f9f9';
    header: Header = {
        backgroundColor1: '#111111',
        backgroundColor2: '#FFFFFF',
        iconBackgroundColor: 'white',
        iconFontColor: '#111111',
        borderShadowColor: '#00000040'
    } as Header;
    menu: Menu = {
        fontColor: '#111111',
        fontHoverColor: '#ed4b4b',
        backgroundColor: '#ffffff',
        backgroundHoverColor: '#11111114',
        borderLeftColor: '#ed4b4b',
        subMenuBackgroundColor: '#dedede',
        subMenuSelectedBackgroundColor: '#e0e0e0',
        menuSelectedFontColor: '#ed4b4b'
    } as Menu;
    footer: Footer = {
        backgroundColor: 'white',
        fontColor: '#111111',
        borderTopColor: '#e7eaec'
    } as Footer;
}