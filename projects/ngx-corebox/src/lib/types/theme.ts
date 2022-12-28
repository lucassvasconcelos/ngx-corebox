export class Font {
    color: string = '';
    colorFeatured: string = '';
}

export class Menu {
    backgroundColor: string = '';
    fontColor: string = ''
}

export class Theme {
    selected: boolean = false;
    name: string = 'Light';
    mainColor: string = '';
    backgroundColor: string = '';
    font: Font = new Font();
    menuDesktop: Menu = new Menu();
    menuMobile: Menu = new Menu();
}