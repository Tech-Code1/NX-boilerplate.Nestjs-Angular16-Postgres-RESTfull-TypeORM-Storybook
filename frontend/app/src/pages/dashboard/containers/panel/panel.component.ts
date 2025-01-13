import { Component, computed, inject } from '@angular/core';
import { LoginStateService } from '../../../auth/service/state';

@Component({
    selector: 'panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.scss'],
    standalone: false
})
export class PanelComponent {
  private loginService = inject(LoginStateService);

  public user = computed(() => this.loginService.currentUser());

  onLogout() {
    this.loginService.logout();
  }
}
