import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config} from '../config';
import {ApiResponse} from '../api-response/api-response.model';
import {User} from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserApi {
  private path = "/api/users";

  constructor(
    private http: HttpClient,
    private config: Config
  ) {}

  add(payload: Partial<User>) {
    return this.http.post<any>(`${this.config.apiUrl}${this.path}`, payload)
  }

  getAll(){
    return this.http.get<ApiResponse<User[]>>(`${this.config.apiUrl}${this.path}`)
  }

  updateById(id: number, payload: any) {
    return this.http.put<ApiResponse<User>>(`${this.config.apiUrl}${this.path}/${id}`, payload)
  }

  deleteById(id: number) {
    return this.http.delete<ApiResponse<User>>(`${this.config.apiUrl}${this.path}/${id}`)
  }
}
