import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'corebox-notifications',
  templateUrl: './notifications.component.html'
})
export class NotificationsComponent implements OnInit {
  public notifications: Notification[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
