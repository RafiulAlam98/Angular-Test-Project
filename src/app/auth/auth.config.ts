import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: 'https://auth.prohelika.net/realms/test',

  redirectUri: window.location.origin,

  clientId: 'dashboard',

  responseType: 'code',

  scope: 'openid profile email offline_access',

  showDebugInformation: true,
};
