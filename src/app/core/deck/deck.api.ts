import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config} from '../config';
import {ApiResponse} from '../api-response/api-response.model';
import {Deck} from './deck.model';

@Injectable({
  providedIn: 'root',
})
export class DeckApi {
  private path = "/api/decks";

  constructor(
    private http: HttpClient,
    private config: Config
  ) {}

  add(payload: Deck) {
    return this.http.post<ApiResponse<Deck>>(`${this.config.apiUrl}${this.path}`, payload)
  }

  getAll(){
    return this.http.get<ApiResponse<Deck[]>>(`${this.config.apiUrl}${this.path}`)
  }

  getAllByUserId(userId: number) {
    return this.http.get<ApiResponse<Deck[]>>(
      `${this.config.apiUrl}/decks`,
      { params: { userId: userId.toString() } }
    );
  }

  updateById(id: number, payload: Deck) {
    return this.http.put<ApiResponse<Deck>>(`${this.config.apiUrl}${this.path}/${id}`, payload)
  }

  deleteById(id: number) {
    return this.http.delete<ApiResponse<Deck>>(`${this.config.apiUrl}${this.path}/${id}`)
  }
}
