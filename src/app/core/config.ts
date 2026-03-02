import { Injectable } from '@angular/core';
import {BehaviorSubject, of, tap} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class Config {
  private config: any = {};
  public loaded = false;

  setConfig(config: any) {
    this.config = config;
    this.loaded = true;
  }

  get redirectUri(): string {
    return this.config.redirectUri || '';
  }

  get apiUrl(): string {
    return this.config.apiUrl || '';
  }
}
