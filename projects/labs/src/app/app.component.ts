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

  profileOptions = {
    companyName: 'Kenkko Group',
    userName: 'Severo Wayne',
    profileUrl: '/profile',
    profileIcon: 'user',
    profileLabel: 'Meu Perfil',
    logoutIcon: 'sign-out',
    logoutLabel: 'Sair',
    logoutEvent: () => alert('Logout Event Trigged!')
  } as ProfileOptions;
  

  themes = [
    {
      selected: true,
      name: 'Light',
      logo: '../assets/logo-desktop.png',
      logoMobile: '../assets/logo-mobile.png',
      backgroundColor: '#f9f9f9',
      scrollColor: '#ed4b4b',
      header: {
        backgroundColor1: 'black',
        iconBackgroundColor: '#f9f9f9',
        iconFontColor: '#111111',
        borderShadowColor: '#00000040'
      },
      menu: {
        fontColor: '#111111',
        fontHoverColor: '#ed4b4b',
        backgroundColor: '#ffffff',
        backgroundHoverColor: '#11111114',
        borderLeftColor: '#ed4b4b',
        subMenuBackgroundColor: '#dedede',
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
      logo: '../assets/logo-desktop-black.png',
      logoMobile: '../assets/logo-mobile-black.png',
      backgroundColor: '#1b1e1f',
      header: {
        backgroundColor1: '#0d0e0e',
        backgroundColor2: '#ffffff',
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
      title: 'App 1',
      url: '/url1',
      icon: 'th-large'
    },
    {
      title: 'App 2',
      url: '/url2',
      icon: 'wallet'
    },
    {
      title: 'App 3',
      url: '/url3',
      icon: 'pen-to-square'
    },
    {
      title: 'App 4',
      url: '/url1',
      icon: 'th-large'
    },
    {
      title: 'App 5',
      url: '/url2',
      icon: 'wallet'
    },
    {
      title: 'App 6',
      url: '/url3',
      icon: 'pen-to-square'
    },
    {
      title: 'App 7',
      url: '/url1',
      icon: 'th-large'
    },
    {
      title: 'App 8',
      url: '/url2',
      icon: 'wallet'
    },
    {
      title: 'App 9',
      url: '/url3',
      icon: 'pen-to-square'
    }
  ];

  menuItems: MenuItem[] = [
    {
      title: 'Menu 1',
      url: '/url1',
      icon: 'th',
      children: [
        {
          title: 'SubMenu 1.1',
          url: '/SubUrl1',
          icon: 'font-awesome'
        },
        {
          title: 'SubMenu 1.2',
          url: '/SubUrl2',
          icon: 'font-awesome'
        },
        {
          title: 'SubMenu 1.3',
          url: '/SubUrl3',
          icon: 'font-awesome'
        }
      ]
    } as MenuItem,
    {
      title: 'Menu 2',
      url: '/url2',
      icon: 'car-crash'
    } as MenuItem
  ];
}
