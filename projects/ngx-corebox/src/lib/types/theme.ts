export class Header {
	constructor(
		public backgroundColor1: string = 'black',
		public backgroundColor2: string = 'black',
		public iconBackgroundColor: string = '#f9f9f9',
		public iconFontColor: string = '#111111',
		public borderShadowColor: string = '#00000040'
	) {}
}

export class Menu {
	constructor(
		public backgroundColor: string = '#ffffff',
		public backgroundHoverColor: string = '#11111114',
		public fontColor: string = '#111111',
		public fontHoverColor: string = '#ed4b4b',
		public borderLeftColor: string = '#ed4b4b',
		public subMenuBackgroundColor: string = '#dedede',
		public subMenuSelectedBackgroundColor: string = '#e0e0e0',
		public menuSelectedFontColor: string = '#ed4b4b'
	) {}
}

export class MenuOptions {
	constructor(public showMenu: boolean = true, public backgroundImage: string = '', public logo: string = '', public logoMobile: string = '') {}
}

export class Footer {
	constructor(
		public companyName: string,
		public backgroundColor: string = 'white',
		public fontColor: string = '#111111',
		public borderTopColor: string = '#e7eaec'
	) {}
}

export class Theme {
	constructor(
		public selected: boolean,
		public name: string,
		public backgroundColor: string,
		public scrollColor: string,
		public header: Header,
		public menu: Menu,
		public footer: Footer,
		public menuOptions: MenuOptions = new MenuOptions()
	) {}
}
