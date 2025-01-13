import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormUtilitiesService } from '@utils';
import { LoginStateService } from '../../../service/state';

@Component({
    selector: 'form-login',
    templateUrl: './form-login.component.html',
    styleUrls: ['./form-login.component.scss'],
    standalone: false
})
export class FormLoginComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private loginService = inject(LoginStateService);
  protected formUtilities = inject(FormUtilitiesService);

  formLogin!: FormGroup;

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  onSubmit() {
    if (!this.formLogin.valid) return;

    this.loginService.onSubmit(this.formLogin);
  }
}
