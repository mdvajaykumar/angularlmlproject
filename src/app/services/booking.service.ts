import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class BookingService {
  constructor(private httpClient: HttpClient) {}

  createBooking(data: any) {
    return this.httpClient
      .post<any>('http://localhost:3000/bookings', data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  getAllBookings() {
    return this.httpClient.get<any>('http://localhost:3000/bookings').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getBookingById(id: number) {
    return this.httpClient
      .get<any>(`http://localhost:3000/bookings/${id}`)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  deleteBooking(id: number) {
    return this.httpClient
      .delete<any>(`http://localhost:3000/bookings/${id}`)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
