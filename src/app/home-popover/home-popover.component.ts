import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { NotificationsService } from '../notifications/notifications.service';

@Component({
  selector: 'app-home-popover',
  templateUrl: './home-popover.component.html',
  styleUrls: ['./home-popover.component.scss'],
})
export class HomePopoverComponent implements OnInit {
  notification: any = [];
  constructor(
    private popoverControll: PopoverController,
    public notificationsService: NotificationsService
  ) {
        this.getNotifications();
        // this.createNotifications();
  }

  async getNotifications() {
    this.notification = await this.notificationsService.getNotifications().toPromise();
    console.log('Couns', this.notification);
  }

  // async createNotifications() {
  //   this.notification = await this.notificationsService.createNotifications().toPromise();
  //   console.log('Couns', this.notification);
  // }

  // async deleteNotification() {
  //     this.notificationsService.deleteNotifications(notification.id).subscribe();
  //     console.log('Couns', this.notification);
  // }

  // async getCounters() {
    // this.notification = await this.notificationsService.getData().toPromise();
    // console.log('COUNS', this.notification);
  // }

  close() {
    this.popoverControll.dismiss();
  }
  ngOnInit(): void {
  }
}
