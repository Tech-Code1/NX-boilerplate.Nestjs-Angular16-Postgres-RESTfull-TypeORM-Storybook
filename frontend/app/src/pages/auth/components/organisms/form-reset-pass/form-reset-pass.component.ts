import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn } from '@angular/forms';
import { FormUtilitiesService, ValidatorsService } from '@utils';
import { ResetStateService } from '../../../service/state';

@Component({
    selector: 'form-reset-pass',
    templateUrl: './form-reset-pass.component.html',
    styleUrls: ['./form-reset-pass.component.scss'],
    standalone: false
})
export class FormResetPassComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private resetStateService = inject(ResetStateService);
  protected formUtilities = inject(FormUtilitiesService);
  protected validatorsService = inject(ValidatorsService);

  @Input() token = '';
  @Input() id = '';

  formReset!: FormGroup;
  customValidator!: ValidatorFn;

  ngOnInit(): void {
    this.customValidator = this.validatorsService.similarInputs(
      'password',
      'passRepeat'
    );

    this.formReset = this.formBuilder.group(
      {
        password: [''],
        passRepeat: [''],
      },
      {
        validators: this.customValidator,
      }
    );
  }

  onResetPassword(): void {
    if (!this.formReset.valid) return;

    this.resetStateService.onResetPassword(this.formReset, this.token, this.id);
  }
}
