import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAuth0 } from '@auth0/auth0-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAuth0({
      domain: 'dev-q2g4uhwq8h2sj55u.us.auth0.com',
      clientId: 'FGfXebLJirAc79X7qhvt0Ag9Calxpjpj',
      authorizationParams: {
        redirect_uri: 'http://localhost:4200'
      }
    })
  ]
};
