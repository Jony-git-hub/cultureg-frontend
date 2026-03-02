import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config} from '../config';
import {ApiResponse} from '../api-response/api-response.model';
import {Language} from './language.model';

@Injectable({
  providedIn: 'root',
})
export class LanguageApi {
  private path = "/api/languages";

  constructor(
    private http: HttpClient,
    private config: Config
  ) {}

  add(payload: Language) {
    return this.http.post<ApiResponse<Language>>(`${this.config.apiUrl}${this.path}`, payload)
  }

  getAll(){
    return this.http.get<ApiResponse<Language[]>>(`${this.config.apiUrl}${this.path}`)
  }

  updateById(id: number, payload: Language) {
    return this.http.put<ApiResponse<Language>>(`${this.config.apiUrl}${this.path}/${id}`, payload)
  }

  deleteById(id: number) {
    return this.http.delete<ApiResponse<Language>>(`${this.config.apiUrl}${this.path}/${id}`)
  }
}
