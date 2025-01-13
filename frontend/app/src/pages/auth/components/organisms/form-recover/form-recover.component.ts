import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormUtilitiesService } from '@utils';
import { RecoverStateService } from '../../../service/state';

@Component({
    selector: 'form-recover',
    templateUrl: './form-recover.component.html',
    styleUrls: ['./form-recover.component.scss'],
    standalone: false
})
export class FormRecoverComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  recoverService = inject(RecoverStateService);
  protected formUtilities = inject(FormUtilitiesService);

  formRecover!: FormGroup;

  ngOnInit(): void {
    this.formRecover = this.formBuilder.group({
      email: [''],
    });
  }

  onRecoverPassword() {
    if (!this.formRecover.valid) return;

    this.recoverService.onRecoverPassword(this.formRecover);
  }
}
