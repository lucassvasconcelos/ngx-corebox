import { Component } from '@angular/core';
import { ProfileOptions } from 'dist/ngx-corebox/lib/types/profile-options';
import { Footer, Menu, Theme } from 'dist/ngx-corebox/lib/types/theme';
import { AppItem, MenuItem } from 'ngx-corebox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'labs';

  themes = [
    {
      selected: true,
      name: 'Light',
      logotipo: '../assets/logo-desktop.png',
      logotipoMobile: '../assets/logo-mobile.png',
      backgroundColor: '#f9f9f9',
      header: {
        backgroundColor: '#111111',
        iconBackgroundColor: 'white',
        iconFontColor: '#111111',
        borderShadowColor: '#00000040'
      },
      menu: {
        fontColor: '#111111',
        fontHoverColor: '#ed4b4b',
        backgroundColor: '#ffffff',
        backgroundHoverColor: '#11111114',
        borderLeftColor: '#ed4b4b',
        subMenuSelectedBackgroundColor: '#e0e0e0',
        menuSelectedFontColor: '#ed4b4b'
      } as Menu,
      footer: {
        backgroundColor: 'white',
        fontColor: '#111111',
        borderTopColor: '#e7eaec'
      } as Footer
    } as Theme,
    {
      selected: true,
      name: 'Dark',
      logotipo: '../assets/logo-desktop-black.png',
      logotipoMobile: '../assets/logo-mobile-black.png',
      backgroundColor: '#1b1e1f',
      header: {
        backgroundColor: '#0d0e0e',
        iconBackgroundColor: '#dddad6',
        iconFontColor: '#0d0e0e',
        borderShadowColor: '#00000040'
      },
      menu: {
        fontColor: '#dddad6',
        fontHoverColor: '#ee5353',
        backgroundColor: '#181a1b',
        backgroundHoverColor: '#0d0e0ebd',
        borderLeftColor: '#930f0f',
        subMenuSelectedBackgroundColor: '#0d0e0ee0',
        menuSelectedFontColor: '#ee5353'
      } as Menu,
      footer: {
        backgroundColor: '#181a1b',
        fontColor: '#dddad6',
        borderTopColor: '#363b3d'
      } as Footer
    } as Theme
  ];

  appItems: AppItem[] = [
    {
      title: 'App1',
      url: '/url1',
      icon: 'th-large'
    },
    {
      title: 'App2',
      url: '/url2',
      icon: 'wallet'
    },
    {
      title: 'App3',
      url: '/url3',
      icon: 'pen-to-square'
    },
    {
      title: 'App4',
      url: '/url3',
      icon: 'database'
    },
    {
      title: 'App5',
      url: '/url1',
      icon: 'sack-dollar'
    },
    {
      title: 'App6',
      url: '/url2',
      icon: 'users'
    },
    {
      title: 'App7',
      url: '/url3',
      icon: 'dollar'
    },
    {
      title: 'App8',
      url: '/url3',
      icon: 'headset'
    }
  ];

  menuItems: MenuItem[] = [
    {
      title: 'Item 1',
      url: '/url1',
      icon: 'th',
      children: [
        {
          title: 'Item 1.1',
          url: '/SubUrl1',
          icon: 'font-awesome'
        },
        {
          title: 'Item 1.2',
          url: '/SubUrl2',
          icon: 'font-awesome'
        },
        {
          title: 'Item 1.3',
          url: '/SubUrl3',
          icon: 'font-awesome'
        }
      ]
    } as MenuItem,
    {
      title: 'Item 2',
      url: '/url2',
      icon: 'car-crash'
    } as MenuItem,
    {
      title: 'Item 3',
      url: '/url2',
      icon: 'dollar-sign',
      children: [
        {
          title: 'Item 3.1',
          url: '/SubUrl1',
          icon: 'font-awesome'
        },
        {
          title: 'Item 3.1',
          url: '/SubUrl2',
          icon: 'font-awesome'
        }
      ]
    } as MenuItem,
    {
      title: 'Item 4',
      url: '/url3',
      icon: 'car-battery'
    },
    {
      title: 'Item 5',
      url: '/url4',
      icon: 'search'
    },
    {
      title: 'Item 6',
      url: '/url 5',
      icon: 'tty'
    },
    {
      title: 'Item 7',
      url: '/url5',
      icon: 'table'
    },
    {
      title: 'Item 8',
      url: '/url5',
      icon: 'satellite-dish'
    },
    {
      title: 'Item 9',
      url: '/url5',
      icon: 'headset'
    },
    {
      title: 'Item 10',
      url: '/url5',
      icon: 'question-circle'
    }
  ];

  profileOptions = {
    companyName: 'Kenkko Group',
    userName: 'Severo Wayne',
    profileUrl: '/profile',
    profileIcon: 'user',
    profileLabel: 'Meu Perfil',
    logoutIcon: 'sign-out',
    logoutLabel: 'Sair',
    logoutUrl: '/logout'
  } as ProfileOptions;
}
