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
      this.getCounters();
  }

  async getCounters() {
    this.notification = await this.notificationsService.getData().toPromise();
    console.log('COUNS', this.notification);
  }

  close() {
    this.popoverControll.dismiss();
  }

  ngOnInit() {}
}
