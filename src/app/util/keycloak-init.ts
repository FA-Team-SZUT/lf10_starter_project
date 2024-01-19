import { KeycloakService } from 'keycloak-angular';
export function initializeKeycloak(keycloakService: KeycloakService) {
  return () =>
    keycloakService.init({
      config: {
        url: 'https://keycloak.szut.dev/auth',
        realm: 'szut',
        clientId: 'employee-management-service-frontend',
      },
      initOptions: {
        onLoad: 'check-sso',
        checkLoginIframe: false,
      },
      enableBearerInterceptor: true,
      bearerExcludedUrls: ['../../assets'],
    });
}
