<p align="center">
  <img style="text-align: center;" src="./projects/labs/src/assets/logo-desktop.png">
  <h1 align="center">ngx-corebox</h1>
  <p align="center">A library with the base template your application needs. Built natively in angular and javascript only.</p>
</p>

## Features

-   Responsive base template with
    -   Menu;
    -   Header;
    -   Footer;
    -   Profile settings;
    -   Apps menu;
    -   Delimited content;
    -   Breadcrumb;
    -   Modal.

## Roadmap

-   Template selection
-   Notifications
-   Switch font-size

## Install

```bash
npm i @kenkko.group/ngx-corebox
```

Import `NgxCoreboxModule` in in the root module(`AppModule`):

```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Import library module
import { NgxCoreboxModule } from 'ngx-corebox';

@NgModule({
	imports: [BrowserModule, NgxCoreboxModule]
})
export class AppModule {}
```

## Usage

In `app.component.ts` paste the code bellow:

```js
appItems: AppItem[] = [new AppItem('App 1', '/url1')];
```

```js
menuItems: MenuItem[] = [
	new MenuItem('/url1', 'Menu 1', [new MenuItem('/submenu1', 'SubMenu 1.1'), new MenuItem('/submenu2', 'Hidden SubMenu 1.2', null, false)]),
	new MenuItem(() => {
		alert('Menu event');
	}, 'Menu 2'),
	new MenuItem('', 'Hidden Menu 3', null, false)
];
```

```js
profileOptions = new ProfileOptions(() => alert('Logout Event Trigged!'), 'Logout', 'Sevéro Wayne');
```

```js
themes: Theme[] = [new Theme(true, 'Default', '#f9f9f9', '#ed4b4b', new Header(), new Menu(), new Footer('Kenkko'))];
```

Add the code bellow in your `app.component.html` and voilà:

```html
<corebox-template [themes]="themes" [profileOptions]="profileOptions" [menuItems]="menuItems" [appItems]="appItems"> </corebox-template>
```

<p style="display:flex;justify-content:space-between;">
    <img style="width:800px" src="./projects/labs/src/assets/desktop.png">
    <img style="width:200px" src="./projects/labs/src/assets/mobile.png">
</p>

## How to run

-   Clone the repository

-   Go to project root folder

-   Install dependencies

    ```bash
    npm i
    ```

-   Open 2 terminals and run

    ```bash
    npm run watch ngx-corebox

    npm start labs
    ```

-   Open your browser at http://localhost:4200

**Thanks for contributions <3**

## License

ngx-corebox is [MIT licensed](./LICENSE).
