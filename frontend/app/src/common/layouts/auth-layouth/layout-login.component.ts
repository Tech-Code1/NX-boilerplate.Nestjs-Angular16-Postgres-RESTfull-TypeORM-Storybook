import { Component, inject } from '@angular/core';
import { IsActiveMatchOptions, Router } from '@angular/router';

@Component({
    selector: 'layout-login',
    templateUrl: './layout-login.component.html',
    styleUrls: ['./layout-login.component.scss'],
    standalone: false
})
export class LayoutLoginComponent {
  private router = inject(Router);

  isLoginOrRegisterActive(): boolean {
    const urls = ['/auth/login', '/auth/register'];
    const matchOptions: IsActiveMatchOptions = {
      paths: 'exact',
      queryParams: 'exact',
      fragment: 'ignored',
      matrixParams: 'ignored',
    };
    return urls.some((url) => this.router.isActive(url, matchOptions));
  }
}
