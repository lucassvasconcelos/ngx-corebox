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
      selected: false,
      name: 'Light',
      logotipo: '../assets/logo-desktop.svg',
      logotipoMobile: '../assets/logo-mobile.svg',
      backgroundColor: '#f9f9f9',
      header: {
        backgroundColor: '#1c5297',
        iconBackgroundColor: 'white',
        iconFontColor: '#1c5297',
        borderShadowColor: '#00000040'
      },
      menu: {
        fontColor: '#7d8185',
        fontHoverColor: '#1c5297',
        backgroundColor: '#f3f3f3',
        backgroundHoverColor: 'rgba(30, 82, 148, 0.15)',
        borderLeftColor: '#1c5297',
        subMenuSelectedBackgroundColor: '#1e52945c',
        menuSelectedFontColor: '#1c5297'
      } as Menu,
      footer: {
        backgroundColor: 'white',
        fontColor: '#7d8185',
        borderTopColor: '#e7eaec'
      } as Footer
    } as Theme,
    {
      selected: true,
      name: 'Dark',
      logotipo: '../assets/logo-desktop.svg',
      logotipoMobile: '../assets/logo-mobile.svg',
      backgroundColor: '#1b1e1f',
      header: {
        backgroundColor: '#1c5297',
        iconBackgroundColor: '#181a1b',
        iconFontColor: '#8bbeea',
        borderShadowColor: '#00000040'
      },
      menu: {
        fontColor: '#989082',
        fontHoverColor: '#79b3e6',
        backgroundColor: '#1f2123',
        backgroundHoverColor: '#18427626',
        borderLeftColor: '#1f5caa',
        subMenuSelectedBackgroundColor: '#18427626',
        menuSelectedFontColor: '#79b3e6'
      } as Menu,
      footer: {
        backgroundColor: '#181a1b',
        fontColor: '#989082',
        borderTopColor: '#1c5297'
      } as Footer
    } as Theme
  ];

  appItems: AppItem[] = [
    {
      title: 'Painel',
      url: '/url1',
      icon: 'user'
    },
    {
      title: 'RNE',
      url: '/url2',
      icon: 'wallet'
    },
    {
      title: 'Financeiro',
      url: '/url3',
      icon: 'dollar'
    },
    {
      title: 'Suporte',
      url: '/url3',
      icon: 'dollar'
    },
    {
      title: 'Painel',
      url: '/url1',
      icon: 'user'
    },
    {
      title: 'RNE',
      url: '/url2',
      icon: 'wallet'
    },
    {
      title: 'Financeiro',
      url: '/url3',
      icon: 'dollar'
    },
    {
      title: 'Suporte',
      url: '/url3',
      icon: 'dollar'
    },
    {
      title: 'RNE',
      url: '/url2',
      icon: 'wallet'
    },
    {
      title: 'Financeiro',
      url: '/url3',
      icon: 'dollar'
    },
    {
      title: 'Suporte',
      url: '/url3',
      icon: 'dollar'
    },
    {
      title: 'RNE',
      url: '/url2',
      icon: 'wallet'
    },
    {
      title: 'Financeiro',
      url: '/url3',
      icon: 'dollar'
    },
    {
      title: 'Suporte',
      url: '/url3',
      icon: 'dollar'
    },
    {
      title: 'RNE',
      url: '/url2',
      icon: 'wallet'
    },
    {
      title: 'Financeiro',
      url: '/url3',
      icon: 'dollar'
    },
    {
      title: 'Suporte',
      url: '/url3',
      icon: 'dollar'
    }
  ];

  menuItems: MenuItem[] = [
    {
      title: 'Painéis',
      url: '/url1',
      icon: 'th',
      children: [
        {
          title: 'Eventos Quantitativos',
          url: '/SubUrl1',
          icon: 'font-awesome'
        },
        {
          title: 'Eventos por Localidade',
          url: '/SubUrl2',
          icon: 'font-awesome'
        },
        {
          title: 'Eventos por Veículos',
          url: '/SubUrl3',
          icon: 'font-awesome'
        }
      ]
    } as MenuItem,
    {
      title: 'Eventos',
      url: '/url2',
      icon: 'car-crash'
    } as MenuItem,
    {
      title: 'Inadimplências',
      url: '/url2',
      icon: 'dollar-sign',
      children: [
        {
          title: 'Buscar Inadimplências',
          url: '/SubUrl1',
          icon: 'font-awesome'
        },
        {
          title: 'Nova Inadimplência',
          url: '/SubUrl2',
          icon: 'font-awesome'
        }
      ]
    } as MenuItem,
    {
      title: 'Oficinas',
      url: '/url3',
      icon: 'car-battery'
    },
    {
      title: 'Consultas Pagas',
      url: '/url4',
      icon: 'search'
    },
    {
      title: 'Comunicação de Vendas',
      url: '/url5',
      icon: 'tty'
    },
    {
      title: 'Tabela Fipe',
      url: '/url5',
      icon: 'table'
    },
    {
      title: 'Processos Judiciais',
      url: '/url5',
      icon: 'satellite-dish'
    },
    {
      title: 'Suporte',
      url: '/url5',
      icon: 'headset'
    },
    {
      title: 'Perguntas Frequentes',
      url: '/url5',
      icon: 'question-circle'
    }
  ];

  profileOptions = {
    companyName: 'Kenkko Group',
    userName: 'Gilberto Ferreira',
    profileUrl: '/profile',
    profileIcon: 'user',
    profileLabel: 'Meu Perfil',
    logoutIcon: 'sign-out',
    logoutLabel: 'Sair',
    logoutUrl: '/logout'
  } as ProfileOptions;
}
