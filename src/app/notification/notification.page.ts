import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../notifications/notifications.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
notification: any = [];
  constructor(
    public notificationsService: NotificationsService
  ) {
      this.getCounters();
  }

  async getCounters() {
    this.notification = await this.notificationsService.getData().toPromise();
    console.log('COUNS', this.notification);
  }

  ngOnInit() {
  }

}
