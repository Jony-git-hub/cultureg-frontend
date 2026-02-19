import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {importProvidersFrom} from '@angular/core';
import {provideStore} from '@ngrx/store';
import {EffectsModule, provideEffects} from '@ngrx/effects';
import {provideRouter, withEnabledBlockingInitialNavigation} from '@angular/router';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { rootReducers, rootEffects } from './app/app.store';
import { routes } from './app/app.routes';

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...(appConfig.providers ?? []),
    importProvidersFrom(ReactiveFormsModule),
    provideStore(rootReducers),
    provideEffects(...rootEffects),
    importProvidersFrom(EffectsModule),
    provideRouter(routes, withEnabledBlockingInitialNavigation()),
    provideHttpClient(withInterceptorsFromDi()),
  ]
})
  .catch((err) => console.error(err));
