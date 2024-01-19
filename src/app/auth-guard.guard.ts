import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

export const authGuardGuard: CanActivateFn = async (route, state) => {
  const keycloakService = inject(KeycloakService);
  try {
    const isAuthenticated = keycloakService.isLoggedIn();
    if (isAuthenticated) {
      return true;
    } else {
      keycloakService.login({
        redirectUri: window.location.origin + state.url,
      });
      return false;
    }
  } catch (error) {
    console.error('Error during authentication', error);
    return false;
  }
};
