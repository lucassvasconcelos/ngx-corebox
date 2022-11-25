import { Component } from '@angular/core';
import { MenuOptions } from 'dist/ngx-corebox/lib/types/menu-options';
import { AppItem, MenuItem } from 'ngx-corebox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'labs';

  appItems: AppItem[] = [
    {
      title: 'App1',
      url: '/url1',
      icon: 'user'
    },
    {
      title: 'App2',
      url: '/url2',
      icon: 'wallet'
    },
    {
      title: 'App3',
      url: '/url3',
      icon: 'dollar'
    },
    {
      title: 'App1',
      url: '/url1',
      icon: 'user'
    },
    {
      title: 'App2',
      url: '/url2',
      icon: 'wallet'
    },
    {
      title: 'App3',
      url: '/url3',
      icon: 'dollar'
    },
    {
      title: 'App3',
      url: '/url3',
      icon: 'dollar'
    },
    {
      title: 'App1',
      url: '/url1',
      icon: 'user'
    },
    {
      title: 'App2',
      url: '/url2',
      icon: 'wallet'
    },
    {
      title: 'App3',
      url: '/url3',
      icon: 'dollar'
    },
    {
      title: 'App3',
      url: '/url3',
      icon: 'dollar'
    },
    {
      title: 'App1',
      url: '/url1',
      icon: 'user'
    },
    {
      title: 'App2',
      url: '/url2',
      icon: 'wallet'
    },
    {
      title: 'App3',
      url: '/url3',
      icon: 'dollar'
    },
    {
      title: 'App2',
      url: '/url2',
      icon: 'wallet'
    },
    {
      title: 'App3',
      url: '/url3',
      icon: 'dollar'
    },
    {
      title: 'App1',
      url: '/url1',
      icon: 'user'
    },
    {
      title: 'App2',
      url: '/url2',
      icon: 'wallet'
    },
    {
      title: 'App3',
      url: '/url3',
      icon: 'dollar'
    },
    {
      title: 'App3',
      url: '/url3',
      icon: 'dollar'
    },
    {
      title: 'App1',
      url: '/url1',
      icon: 'user'
    },
    {
      title: 'App2',
      url: '/url2',
      icon: 'wallet'
    },
    {
      title: 'App3',
      url: '/url3',
      icon: 'dollar'
    },
    {
      title: 'App3',
      url: '/url3',
      icon: 'dollar'
    },
    {
      title: 'App1',
      url: '/url1',
      icon: 'user'
    },
    {
      title: 'App2',
      url: '/url2',
      icon: 'wallet'
    },
    {
      title: 'App3',
      url: '/url3',
      icon: 'dollar'
    },
    {
      title: 'App2',
      url: '/url2',
      icon: 'wallet'
    },
    {
      title: 'App3',
      url: '/url3',
      icon: 'dollar'
    },
    {
      title: 'App1',
      url: '/url1',
      icon: 'user'
    },
    {
      title: 'App2',
      url: '/url2',
      icon: 'wallet'
    },
    {
      title: 'App3',
      url: '/url3',
      icon: 'dollar'
    },
    {
      title: 'App3',
      url: '/url3',
      icon: 'dollar'
    },
    {
      title: 'App1',
      url: '/url1',
      icon: 'user'
    },
    {
      title: 'App2',
      url: '/url2',
      icon: 'wallet'
    },
    {
      title: 'App3',
      url: '/url3',
      icon: 'dollar'
    },
    {
      title: 'App3',
      url: '/url3',
      icon: 'dollar'
    },
    {
      title: 'App1',
      url: '/url1',
      icon: 'user'
    },
    {
      title: 'App2',
      url: '/url2',
      icon: 'wallet'
    },
    {
      title: 'App3',
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
    },
    {
      title: 'Eventos',
      url: '/url2',
      icon: 'car-crash'
    },
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
    },
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

  public menuOptions = {
    backgroundImage: '../assets/background-menu.jpeg',
    logotipo: '../assets/logo-desktop.svg',
    logotipoMobile: '../assets/logo-mobile.svg'
  } as MenuOptions;
}
