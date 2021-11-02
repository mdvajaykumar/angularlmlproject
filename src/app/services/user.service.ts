import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
//import { User } from '../models/user.model';

@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient) {}

  createUser(data: any) {
    return this.httpClient.post<any>('http://localhost:3000/users', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getAllUsers() {
    return this.httpClient.get<any>('http://localhost:3000/users').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getUserById(id: number) {
    return this.httpClient.get<any>(`http://localhost:3000/users/${id}`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  updateUser(data: any, id: number) {
    return this.httpClient
      .put<any>(`http://localhost:3000/users/${id}`, data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  deleteUser(id: number) {
    return this.httpClient
      .delete<any>(`http://localhost:3000/users/${id}`)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
