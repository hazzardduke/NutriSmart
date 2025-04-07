import { provideAuth0 } from '@auth0/auth0-angular';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
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
    provideRouter(routes),
    provideHttpClient(),
  ],
});
