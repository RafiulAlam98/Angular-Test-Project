import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';

import { FormsModule } from '@angular/forms';
import en from '@angular/common/locales/en';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideNzIcons } from './icons-provider';
import { provideOAuthClient } from 'angular-oauth2-oidc';
import { provideRouter } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import { routes } from './app.routes';

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideNzIcons(),
    provideNzI18n(en_US),
    importProvidersFrom(FormsModule),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideOAuthClient(),
  ],
};
