import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config} from '../config';
import {ApiResponse} from '../api-response/api-response.model';
import {Theme} from './theme.model';

@Injectable({
  providedIn: 'root',
})
export class ThemeApi {
  private path = "/api/themes";

  constructor(
    private http: HttpClient,
    private config: Config
  ) {}

  add(payload: Partial<Theme>) {
    return this.http.post<ApiResponse<Theme>>(`${this.config.apiUrl}${this.path}`, payload)
  }

  getAll(){
    return this.http.get<ApiResponse<Theme[]>>(`${this.config.apiUrl}${this.path}`)
  }

  updateById(id: number, payload: any) {
    return this.http.put<ApiResponse<Theme>>(`${this.config.apiUrl}${this.path}/${id}`, payload)
  }

  deleteById(id: number) {
    return this.http.delete<ApiResponse<Theme>>(`${this.config.apiUrl}${this.path}/${id}`)
  }
}
