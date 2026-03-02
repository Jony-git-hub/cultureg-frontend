import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {importProvidersFrom, inject, provideAppInitializer} from '@angular/core';
import {provideStore} from '@ngrx/store';
import {EffectsModule, provideEffects} from '@ngrx/effects';
import {provideRouter, withEnabledBlockingInitialNavigation} from '@angular/router';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { rootReducers, rootEffects } from './app/app.store';
import { routes } from './app/app.routes';
import {Config} from './app/core/config';
import {providePrimeNG} from 'primeng/config';
import {AuraOwlympiad} from './assets/primeng-themes/aura-light';
import Aura from '@primeuix/themes/aura';
import Lara from '@primeuix/themes/lara';
import Material from '@primeuix/themes/material';


export function initializeConfig() {
  return async () => {
    const configService = inject(Config);
    try {
      const response = await fetch('/assets/config.json?v=' + Date.now(), { cache: 'no-cache' });
      const config = await response.json();
      configService.setConfig(config);
    } catch (err) {
      console.error('❌ Error loading config.json', err);
    }
  };
}

bootstrapApplication(App, {
  ...appConfig,
  providers: [

    ...(appConfig.providers ?? []),
    Config,
    provideAppInitializer(initializeConfig()),
    importProvidersFrom(ReactiveFormsModule),
    provideStore(rootReducers),
    provideEffects(...rootEffects),
    importProvidersFrom(EffectsModule),
    provideRouter(routes, withEnabledBlockingInitialNavigation()),
    provideHttpClient(withInterceptorsFromDi()),
    providePrimeNG({
      theme: {
        preset: AuraOwlympiad,
        //preset: Material
      }
    })
  ]
})
  .catch((err) => console.error(err));
