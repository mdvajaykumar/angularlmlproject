import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
//import { User } from '../models/user.model';

@Injectable()
export class HospitalService {
  constructor(private httpClient: HttpClient) {}

  createHospital(data: any) {
    return this.httpClient
      .post<any>('http://localhost:3000/hospitals', data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  getAllHospitals() {
    return this.httpClient.get<any>('http://localhost:3000/hospitals').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getHospitalById(id: number) {
    return this.httpClient
      .get<any>(`http://localhost:3000/hospitals/${id}`)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  getHospitalByCity(city: string) {
    return this.httpClient.get<any>(
      `http://localhost:3000/hospitals?city=${city}`
    );
  }

  updateHospital(data: any, id: number) {
    return this.httpClient
      .put<any>(`http://localhost:3000/hospitals/${id}`, data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  deleteHosiptal(id: number) {
    return this.httpClient
      .delete<any>(`http://localhost:3000/hospitals/${id}`)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
