import { AuthConfig } from '@auth0/auth0-angular';

export const authConfig: AuthConfig = {
  domain: 'dev-q2g4uhwq8h2sj55u.us.auth0.com',
  clientId: 'FGfXebLJirAc79X7qhvt0Ag9Calxpjpj',
  authorizationParams: {
    redirect_uri: 'http://localhost:4200'
  },
  skipRedirectCallback: true,
  cacheLocation: 'localstorage'
}; 