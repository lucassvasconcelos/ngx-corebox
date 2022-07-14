import { Component } from '@angular/core';
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
      title: 'MenuItem1',
      url: '/url1',
      children: [
        {
          title: 'SubMenuItem1',
          url: '/SubUrl1'
        },
        {
          title: 'SubMenuItem2',
          url: '/SubUrl2'
        },
        {
          title: 'SubMenuItem3',
          url: '/SubUrl3'
        }
      ]
    },
    {
      title: 'MenuItem2',
      url: '/url2'
    },
    {
      title: 'MenuItem3',
      url: '/url3'
    },
    {
      title: 'MenuItem4',
      url: '/url4'
    },
    {
      title: 'MenuItem5',
      url: '/url5'
    }
  ];
}
