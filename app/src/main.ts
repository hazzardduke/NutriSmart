import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideAuth0 } from '@auth0/auth0-angular';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAuth0({
      domain: 'dev-q2g4uhwq8h2sj55u.us.auth0.com',
      clientId: 'FGfXebLJirAc79X7qhvt0Ag9Calxpjpj',
      authorizationParams: {
        redirect_uri: window.location.origin,
        audience: 'https://dev-q2g4uhwq8h2sj55u.us.auth0.com/api/v2/',
      },
      cacheLocation: 'localstorage',
      useRefreshTokens: true,
    }),
    importProvidersFrom(
      CalendarModule.forRoot({
        provide: DateAdapter,
        useFactory: adapterFactory,
      })
    )
  ],
});
