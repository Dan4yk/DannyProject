import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';



const httpOptions = {
  headers: new HttpHeaders({
    'X-Parse-Application-Id': 'test-app',
    'X-Parse-REST-API-Key': 'test-app-key'
  })
};

export interface INotification {
  product: string;
  DataTime: Date;
  Description: string;
}

// export interface INote {
//       id: number;
//       notificationsName: string;
// }

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  // private dataNotifications = 'assets/notifications.json';
  private apiUrl = 'http://localhost:1448/parse/classes/Products/';

  constructor(private http: HttpClient) { }

  getNotifications(): Observable <INotification[]> {
    return this.http.get<INotification[]>(this.apiUrl, httpOptions);
  }

  // createNotifications(): Observable<INotification[]> {
  //   return this.http.post<INotification[]>(this.apiUrl , httpOptions);
  // }

  // updateNotifications(): Observable<INotification[]> {
  //   return this.http.put<INotification[]>(this.apiUrl, httpOptions);
  // }

  // deleteNotifications(id: string): Observable<{}> {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.delete(url, httpOptions);
  // }

//   getData(): Observable<INote[]> {
//     return this.http.get<INote[]>(this.dataNotifications);
// }
}
