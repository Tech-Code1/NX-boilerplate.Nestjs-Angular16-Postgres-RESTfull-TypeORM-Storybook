import { Component, OnInit, computed, effect, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginStateService } from './pages/auth/service/state';
import { AuthStatus } from './pages/auth/types';

@Component({
    selector: 'root',
    templateUrl: './app.component.html',
    styleUrls: [],
    standalone: false
})
export class AppComponent implements OnInit {
  title = 'Template Angular';

  private authService = inject(LoginStateService);
  private router = inject(Router);

  ngOnInit() {
    this.authService.initialize();
  }

  public finishedAuthCheck = computed<boolean>(() => {
    if (this.authService.authStatus() === AuthStatus.CHECKING) {
      return false;
    }

    return true;
  });

  public authStatusChangedEffect = effect(() => {
    const currentRoute = this.router.url;
    const allowedPublicRoutes = [
      '/auth/login',
      '/auth/register',
      '/auth/recover',
    ];

    const isChangePasswordRoute = (route: string): boolean => {
      const segments = route.split('/');
      return (
        segments.length >= 4 &&
        segments[1] === 'auth' &&
        segments[2] === 'reset-password'
      );
    };

    switch (this.authService.authStatus()) {
      case AuthStatus.AUTHENTICATED:
        if (
          allowedPublicRoutes.includes(currentRoute) ||
          isChangePasswordRoute(currentRoute)
        ) {
          this.router.navigateByUrl('/dashboard');
        }
        break;
      case AuthStatus.NOT_AUTHENTICATED:
        if (
          !allowedPublicRoutes.includes(currentRoute) &&
          !isChangePasswordRoute(currentRoute)
        ) {
          this.router.navigateByUrl('/auth/login');
        }
        break;
      case AuthStatus.RESETTING_PASSWORD:
        if (!isChangePasswordRoute(currentRoute)) {
          console.log('Redirecting to Reset Password...');
        }
        break;
      default:
        break;
    }
  });
}
