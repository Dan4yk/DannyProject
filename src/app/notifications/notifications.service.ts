import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface INote {
      id: number;
      notificationsName: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private dataNotifications = 'assets/notifications.json';

  constructor(private http: HttpClient) { }

  getData(): Observable<INote[]> {
    return this.http.get<INote[]>(this.dataNotifications);
}
}
