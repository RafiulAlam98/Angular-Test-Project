import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import en from '@angular/common/locales/en';
import { provideHttpClient } from '@angular/common/http';

import { provideOAuthClient } from 'angular-oauth2-oidc';
import { provideRouter } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import { routes } from './app.routes';

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), provideOAuthClient(),importProvidersFrom()],
};
